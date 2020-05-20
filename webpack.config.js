const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtensionReloader = require("webpack-extension-reloader");
const sass = require("node-sass");

const scrawlers = require("./src/scrawlers");
const simpleBraceExpansion = require("./utils/simpleBraceExpansion");
const pkg = require("./package.json");

function transformManifest(buffer, mode) {
  const manifest = JSON.parse(buffer.toString());
  manifest.version = pkg.version;
  for (const key of Object.keys(scrawlers).sort()) {
    const scrawler = scrawlers[key];
    const origins = simpleBraceExpansion(scrawler.origin);
    manifest.permissions.push(...origins.map(x => `${x}/*`));
    manifest.content_scripts[0].matches.push(...origins.map(x => `${x}/*`));
  }
  if (mode === "development") {
    // For easier development
    // manifest.permissions.push("https://*/*");
    // manifest.content_scripts[0].matches.push("https://*/*");
  }
  return JSON.stringify(manifest, null, 2);
}

module.exports = (env, argv) => ({
  entry: {
    background: "./src/background",
    content: "./src/content"
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: "src",
        from: "**",
        ignore: [
          "*.js", // Handled by Webpack core
          "*.scss", // Handled separately
          "manifest.json" // Handled separately
        ] },
      { context: "src", from: "manifest.json", transform: buffer => transformManifest(buffer, argv.mode) },
      { context: "src", from: "*.scss", to: "[name].css", transform: (buffer, file) => sass.renderSync({ file }).css.toString() }
    ]),
    new ExtensionReloader({
      entries: {
        contentScript: "content",
        background: "background",
      }
    }),
  ],
  optimization: {
    minimize: false, // Google Web Store: Code Readability Requirements
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  }
});

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtensionReloader = require("webpack-extension-reloader");
const sass = require("node-sass");

const scrawlers = require("./extension/scrawlers");
const simpleBraceExpansion = require("./utils/simpleBraceExpansion");

function transformManifest(buffer, mode) {
  const manifest = JSON.parse(buffer.toString());
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
    background: "./extension/background",
    content: "./extension/content"
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: "extension",
        from: "**",
        ignore: [
          "*.js", // Handled by Webpack core
          "*.scss", // Handled separately
          "manifest.json" // Handled separately
        ] },
      { context: "extension", from: "manifest.json", transform: buffer => transformManifest(buffer, argv.mode) },
      { context: "extension", from: "*.scss", to: "[name].css", transform: (buffer, file) => sass.renderSync({ file }).css.toString() },
      { from: "node_modules/webextension-polyfill/dist/browser-polyfill.js" },
      { from: "node_modules/arrive/src/arrive.js" }
    ]),
    new ExtensionReloader({
      entries: {
        contentScript: "content",
        background: "background",
      }
    }),
  ],
  devtool: "cheap-module-source-map", // To avoid: Refused to evaluate a string as JavaScript because 'unsafe-eval'
  optimization: {
    minimize: false, // Google Web Store: Code Readability Requirements
  },
  output: {
    path: path.join(__dirname, "extension-build"),
    filename: "[name].js"
  }
});

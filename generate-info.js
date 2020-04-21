const scrawlers = require("./extension/src/scrawlers");
const simpleBraceExpansion = require("./utils/simpleBraceExpansion");

const patterns = [];
const items = [];

for (const key of Object.keys(scrawlers).sort()) {
  const scrawler = scrawlers[key];
  const origins = simpleBraceExpansion(scrawler.origin);
  patterns.push(
    ...origins.map(x =>
      `"${x}/*"`
    )
  );

  items.push(
    origins.map(x => `[${x.replace(/https:\/\/(www.)?/, "")}](${x})`).join(", ")
  );
}

console.log("Patterns for manifest:");
console.log(patterns.join(",\n"));

console.log("\n\n");

console.log("Items for Readme:");
console.log(items.map(x => "- [x] " + x).join("\n"));

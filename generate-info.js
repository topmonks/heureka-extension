const scrawlers = require("./extension/scrawlers");
const simpleBraceExpansion = require("./utils/simpleBraceExpansion");

const items = [];

for (const key of Object.keys(scrawlers).sort()) {
  const scrawler = scrawlers[key];
  const origins = simpleBraceExpansion(scrawler.origin);
  items.push(
    origins.map(x => `[${x.replace(/https:\/\/(www.)?/, "")}](${x})`).join(", ")
  );
}

console.log("Items for Readme:");
console.log(items.map(x => "- [x] " + x).join("\n"));

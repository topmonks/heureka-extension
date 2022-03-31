const { execSync } = require("child_process");
const scrawlers = require("../extension/scrawlers");
const simpleBraceExpansion = require("./simpleBraceExpansion");

const SPECIFIC_BROWSER = "Google Chrome Dev"; // feel free to adjust to your needs, or clear to use default browser

for (const shop of Object.values(scrawlers)) {
  for (const url of simpleBraceExpansion(shop.origin)) {
    const fullUrl = `${url}/${shop.exampleProductPath}`;
    execSync(
      SPECIFIC_BROWSER ?
        `open -a "${SPECIFIC_BROWSER}" ${fullUrl}` :
        `open ${fullUrl}`
    );
  }
}

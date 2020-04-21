const fs = require("fs");
const path = require("path");
var { execSync } = require("child_process");

// Iterate over all files in current directory
fs.readdirSync(__dirname).forEach(file => {
  // Filter just .zip files
  if (file.endsWith(".zip")) {
    const name = file.replace(/\(.+\)/, "").replace(".zip", ""); // // ublock-origin(v1.26.0).zip => ublock-origin
    const packedFullPath = path.resolve(__dirname, file);
    const unpackedFullPath = path.resolve(__dirname, "unpacked", name);
    if (!fs.existsSync(unpackedFullPath)) { // In not already, unpack
      execSync(`unzip "${packedFullPath}" -d "${unpackedFullPath}"`);
    }
  }
});

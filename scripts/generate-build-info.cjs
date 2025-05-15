const fs = require("fs");
const path = require("path");

const timestamp = new Date().toISOString();
const content = `export const BUILD_TIMESTAMP = '${timestamp}';\n`;

const targetPath = path.join(__dirname, "../src/build-info.ts");
fs.writeFileSync(targetPath, content);

console.log(`✅ BUILD_TIMESTAMP written to build-info.ts: ${timestamp}`);

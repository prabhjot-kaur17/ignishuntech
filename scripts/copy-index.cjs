const fs = require("fs");

fs.copyFileSync("dist/index.html", "dist/404.html");

console.log("SPA fallback created: dist/404.html");
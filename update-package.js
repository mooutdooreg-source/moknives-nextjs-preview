// update-package.js
const fs = require("fs");

const p = "package.json";
const j = JSON.parse(fs.readFileSync(p, "utf8"));

j.scripts = j.scripts || {};
j.scripts.lint = "eslint . --ext .js,.jsx,.ts,.tsx";

j.dependencies = j.dependencies || {};
j.dependencies.next = "^16.0.0";
j.dependencies["@next/third-parties"] = "^16.0.0";

j.devDependencies = j.devDependencies || {};
j.devDependencies["eslint-config-next"] = "^16.0.0";
j.devDependencies["@eslint/eslintrc"] = "^3.0.0";

fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n");

console.log("package.json updated successfully!");
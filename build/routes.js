import { writeFile } from "fs/promises";
import { globby } from "globby";
import { resolve } from "path";

const files = await globby(["../src/pages/**/[a-z[]*.js"], {
  cwd: resolve(process.cwd(), "build"),
});

const ROUTES = {};
for (const file of files) {
  if (/robots/.test(file)) {
    continue;
  }
  const code = await import(file);
  ROUTES[file] = { name: code.default.name, file };
}

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\.\.\/src\/pages|index|\.js$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  const { file, name } = ROUTES[route];

  return { path, file: file.replace("../src", ".."), name };
});

const fileContent = `// GENERATED FILE
${routes
  .map((r) => {
    return `import * as ${r.name} from '${r.file}';`;
  })
  .join("\n")}

  export const routes = [
    ${routes
      .map((r) => {
        return `{path: '${r.path}', code: ${r.name}}`;
      })
      .join(",\n")}
  ];
`;

await writeFile("./src/lib/routes.js", fileContent, "utf-8");

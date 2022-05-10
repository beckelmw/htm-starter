import { writeFile, readFile } from "fs/promises";
import { render as renderToString } from "preact-render-to-string";
import { Favicon } from "../src/components/favicon.js";

const pkg = await readFile("./package.json", "utf-8");
const pkgJson = JSON.parse(pkg);

await writeFile(
  "./public/favicon.svg",
  renderToString(Favicon({ text: pkgJson.name.charAt(0) })),
  "utf-8"
);
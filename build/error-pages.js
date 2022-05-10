import { writeFile, mkdir } from "fs/promises";
import { render as renderToString } from "preact-render-to-string";
import PageNotFound from "../src/pages/404.js";
import { HtmlPage } from "../src/pages/document.js";

await mkdir("./public", { recursive: true });

await writeFile(
  "./public/404.html",
  HtmlPage({ content: renderToString(PageNotFound()) }),
  "utf-8"
);

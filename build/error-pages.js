import { writeFile, mkdir } from "fs/promises";
import { render as renderToString } from "preact-render-to-string";
import PageNotFound from "#pages/404.js";
import { HtmlPage } from "#pages/_document.js";

await mkdir("./public", { recursive: true });

await writeFile(
  "./public/404.html",
  HtmlPage({ content: renderToString(PageNotFound()) }),
  "utf-8"
);

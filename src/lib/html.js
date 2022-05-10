import htm from "htm";
import { h } from "preact";
import { render as renderToString } from "preact-render-to-string";
import { SECURITY_HEADERS } from "./constants.js";
import * as PageNotFound from "../pages/404.js";
import { HtmlPage } from "../pages/document.js";

export default htm.bind(h);

const isFunction = (fn) => {
  return typeof fn === "function";
};

export function createRenderer({ request, env, params }) {
  return async (Layout, Page) => {
    let data = {};
    let headers = {
      "content-type": "text/html",
      ...SECURITY_HEADERS,
    };
    let head = "";

    if (isFunction(Page.getServerSideData)) {
      data = await Page.getServerSideData({ request, env, params });
      if (data.errorCode) {
        const html = renderToString(PageNotFound.default());
        return new Response(HtmlPage({ content: html }), {
          status: data.errorCode,
          headers,
        });
      }
    }

    if (isFunction(Page.headers)) {
      headers = { ...headers, ...Page.headers({ request, env, props: data }) };
    }

    if (isFunction(Page.head)) {
      head = renderToString(Page.head({ request, env, props: data }));
    }

    const content = renderToString(Page.default({ request, env, props: data }));
    const html = Layout({ content, head });
    return new Response(html, { headers });
  };
}

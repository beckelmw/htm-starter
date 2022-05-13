import { render as renderToString } from "preact-render-to-string";
import { SECURITY_HEADERS, APPLICATION_JSON, TEXT_HTML } from "./constants.js";
import * as PageNotFound from "#pages/404.js";
import { HtmlPage } from "#pages/_document.js";

const isFunction = (fn) => {
  return typeof fn === "function";
};

export function createRenderer({ request, env }) {
  return async (Layout, Page, params) => {
    let data = {};
    let headers = {
      ...SECURITY_HEADERS,
    };

    // Idea from https://medium.com/@ijoeyguerra/content-negotiation-in-node-js-augmenting-express-js-78ea9de8bda0
    const wantsJson =
      request.headers.has("accept") &&
      request.headers
        .get("accept")
        .split(",")
        .find((x) => x === APPLICATION_JSON);

    if (wantsJson) {
      headers["content-type"] = APPLICATION_JSON;
      if (isFunction(Page.api)) {
        data = await Page.api({ request, env, params });
        if (data.errorCode) {
          return new Response(JSON.stringify({}), {
            status: data.errorCode,
            headers,
          });
        }
        return new Response(JSON.stringify(data), { headers });
      }
      {
        return new Response(JSON.stringify({}), { status: 404, headers });
      }
    }

    // HTML
    let head = "";
    headers["content-type"] = TEXT_HTML;

    if (isFunction(Page.api)) {
      data = await Page.api({ request, env, params });
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

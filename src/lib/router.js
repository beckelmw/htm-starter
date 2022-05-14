import { ThrowableRouter, withParams } from "itty-router-extras";
import { createRenderer } from "#lib/renderer.js";
import { HtmlPage } from "#pages/_document.js";
import robots from "#pages/robots.js";

import { routes } from "./routes.js";

export default function Router(context) {
  const { request, env } = context;
  const render = createRenderer(context);

  const router = ThrowableRouter();

  for (const route of routes) {
    router.get(route.path, withParams, ({ params }) => {
      return render(HtmlPage, route.code, params);
    });
  }

  router
    .post("/htmx/clicked", () => {
      const html = `<div>Hello world!</div>`;
      return new Response(html, { headers: { "content-type": "text/html" } });
    })
    .all("/robots.txt", robots)
    .get("*", () => {
      // Since we are using cloudflare pages need to go here
      // in order to get assets like css
      return env.ASSETS.fetch(request);
    });

  return router;
}

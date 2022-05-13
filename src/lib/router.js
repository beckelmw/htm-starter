import { ThrowableRouter, withParams } from "itty-router-extras";
import { createRenderer } from "#lib/html.js";
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

  router.all("/robots.txt", robots).get("*", () => {
    // Since we are using cloudflare pages need to go here
    // in order to get assets like css
    return env.ASSETS.fetch(request);
  });

  return router;
}

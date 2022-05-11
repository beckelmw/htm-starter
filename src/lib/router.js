import { ThrowableRouter } from "itty-router-extras";
import { createRenderer } from "#/lib/html";
import { HtmlPage } from "#/pages/_document";
import robots from "#/pages/robots";

import { routes } from "./routes.js";

export default function Router(context) {
  const { request, env } = context;
  const render = createRenderer(context);

  const router = ThrowableRouter();

  for (const route of routes) {
    router.get(route.path, () => render(HtmlPage, route.code));
  }

  router
    .all("/robots.txt", robots)
    .get("*", () => {
      // Since we are using cloudflare pages need to go here
      // in order to get assets like css
      return env.ASSETS.fetch(request);
    });

  return router;
}

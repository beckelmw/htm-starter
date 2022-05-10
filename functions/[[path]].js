import { ThrowableRouter } from "itty-router-extras";
import { createRenderer } from "#/lib/html";
import { HtmlPage } from "#/pages/document";
import robots from "#/pages/robots";
import * as Posts from "#/pages/posts";
import * as Post from "#/pages/post";
import * as Index from "#/pages/index";

export async function onRequest(context) {
  const { request, env } = context;
  const render = createRenderer(context);

  const router = ThrowableRouter()
    .get("/post/:id", () => render(HtmlPage, Post))
    .get("/posts", () => render(HtmlPage, Posts))
    .all("/robots.txt", robots)
    .get("/", () => render(HtmlPage, Index))
    .get("*", () => {
      // Since we are using cloudflare pages need to go here
      // in order to get assets like css
      return env.ASSETS.fetch(request);
    });

  return router.handle(request);
}

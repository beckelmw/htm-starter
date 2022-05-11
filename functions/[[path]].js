import getRouter from "#/lib/router";

export async function onRequest(context) {
  const { request } = context;
  const router = getRouter(context);

  return router.handle(request);
}

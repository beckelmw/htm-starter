import html from "#lib/html.js";

export async function api({ env }) {
  await env.SITE.put("test.json", JSON.stringify({ test: "1" }));
  const site = await env.SITE.get("test.json", "json");
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { posts: data, site };
}

export default function Posts({ props }) {
  const { posts } = props;

  return html`
    <h1>Posts</h1>
    <ul class="list-disc list-inside">
      ${posts.map(
        (i) => html`<li>
          <a href="/post/${i.id}">${i.title}</a>
        </li>`
      )}
    </ul>
  `;
}

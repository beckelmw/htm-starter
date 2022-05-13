import html from "#lib/html.js";
import { Header, Footer, Main } from "#components/index.js";

export async function api({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return { errorCode: res.status };
  }
  const data = await res.json();
  return { post: data };
}

export default function Post({ props }) {
  const { post } = props;

  const result = html`
    <div class="wrapper">
      <${Header} />
      <${Main}>
        <h1>${post.title}</h1>
        <div>${post.body}</div>
      <//>
      <${Footer} />
    </div>
  `;
  return result;
}

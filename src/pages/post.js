import html from "#/lib/html";
import { Header, Footer, Main } from "#/components";

export async function getServerSideData({ params }) {
  const [, id] = params.path;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return { errorCode: res.status };
  }
  const data = await res.json();
  return { post: data };
}

export default function About({ props }) {
  const { post } = props;

  return html`
    <div class="wrapper">
      <${Header} />
      <${Main}>
        <h1>${post.title}</h1>
        <div>${post.body}</div>
      <//>
      <${Footer} />
    </div>
  `;
}

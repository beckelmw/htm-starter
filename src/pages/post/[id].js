import html from "#lib/html.js";

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
    <h1>${post.title}</h1>
    <div>${post.body}</div>
  `;
  return result;
}

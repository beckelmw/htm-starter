import html from "#lib/html.js";

export default function Post({ params }) {
  const { name } = params;

  const result = html`
    <h1>Hello ${decodeURI(name)}!</h1>
  `;
  return result;
}

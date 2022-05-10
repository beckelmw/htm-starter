import html from "../lib/html.js";

export const PostList = ({ posts }) => {
  return html`<ul class="list-disc list-inside">
    ${posts.map(
      (i) => html`<li>
        <a href="/post/${i.id}">${i.title}</a>
      </li>`
    )}
  </ul>`;
};

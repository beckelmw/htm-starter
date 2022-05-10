import html from "../lib/html.js";

export const Header = () => {
  return html`
    <div class="site-header bg-blue-500">
      <nav class="flex pl-8 py-4 gap-4">
        <a href="/">Home</a> <a href="/posts">Posts</a>
      </nav>
    </div>
  `;
};

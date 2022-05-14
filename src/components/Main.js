import html from "#lib/html.js";

export const Main = ({ children }) => {
  return html`<div class="wrapper">
    <main class="my-8">${children}</main>
  </div> `;
};

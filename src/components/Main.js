import html from "#lib/html.js";

export const Main = ({ children }) => {
  return html` <main class="my-8">${children}</main> `;
};

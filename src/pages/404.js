import html from "../lib/html.js";
import { Header, Footer } from "../components/index.js";

export default function PageNotFound() {
  return html`
    <div class="wrapper">
      <${Header} />
      <div>
        <h1>Page not found</h1>
      </div>
      <${Footer} />
    </div>
  `;
}

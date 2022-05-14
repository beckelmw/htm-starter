import html from "#lib/html.js";
import { Header, Footer, Main } from "#components/index.js";

export function headers() {
  return {
    "x-whatever": "12345",
  };
}

export function head() {
  return html` <script src="/js/htmx.min.js" defer></script> `;
}

export default function Htmx() {
  return html`
    <div class="wrapper">
      <${Header} />
      <${Main}>
        <h1>Htmx</h1>

        <div class="mb-8">
          <a href="https://htmx.org/">https://htmx.org/</a>
        </div>

        <div class="mb-8">
          <button
            class="px-4 py-2 text-white bg-blue-500 rounded"
            hx-post="/htmx/clicked"
            hx-trigger="click"
            hx-target="#parent-div"
            hx-swap="innerHTML"
          >
            Click Me!
          </button>
        </div>

        <div id="parent-div"></div>
      <//>
      <${Footer} />
    </div>
  `;
}

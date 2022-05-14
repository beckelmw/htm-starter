import html, { render } from "#lib/html.js";

export function headers() {
  return {
    "x-whatever": "12345",
  };
}

export function head() {
  return html` <script src="/js/htmx.min.js" defer></script> `;
}

const Content = () => {
  const date = new Date();
  return html`<div id="htmx">
    <h1>Htmx</h1>
    <div class="mb-8">Rendered at ${date.toLocaleTimeString()}</div>
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

    <div class="mb-8">
      <button
        class="px-4 py-2 text-white bg-green-500 rounded"
        hx-get="/htmx/refresh"
        hx-trigger="click"
        hx-target="#htmx"
        hx-swap="outerHTML"
      >
        Server refresh
      </button>
    </div>
  </div>`;
};

export default function Htmx() {
  return html` <${Content} /> `;
}

function send(content) {
  return new Response(content, { headers: { "content-type": "text/html" } });
}

export const actions = {
  clicked: () => {
    const result = render(html`<div>Hello world!</div>`);
    return send(result);
  },
  refresh: () => {
    const result = render(html`<${Content} />`);
    return send(result);
  },
};

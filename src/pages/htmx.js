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
    <blockquote class="mb-8">
      htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent
      Events directly in HTML, using attributes, so you can build modern user
      interfaces with the simplicity and power of hypertext –
      <a href="https://htmx.org/">https://htmx.org/</a>
    </blockquote>
    <div class="mb-8">Rendered at ${date.toLocaleTimeString()}</div>

    <div class="mb-8 pb-8 border-b-2 border-b-blue-500">
      <h3>Loading a new server rendered fragment</h2>
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded"
        hx-post="/htmx/fragment"
        hx-trigger="click"
        hx-target="#parent-div"
        hx-swap="innerHTML"
      >
        New fragment
      </button>

      <div id="parent-div"></div>
    </div>

    <div class="mb-8 pb-8 border-b-2 border-b-blue-500">
      <h3>Refreshing all content in main element</h2>
      <p>Rendered at ${date.toLocaleTimeString()}</p>
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

    <form hx-boost="true" action="/htmx/submit" method="POST">
      <h3>Form example</h2>
      <label for="name">Enter your name: </label>
      <input
        class="px-2 py-1 border rounded"
        type="text"
        id="name"
        name="name"
      />
      <div>
        <button class="px-4 py-2 text-white bg-blue-500 rounded" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>`;
};

export default function Htmx() {
  return html` <${Content} /> `;
}

function send(content) {
  return new Response(content, { headers: { "content-type": "text/html" } });
}

export const actions = {
  fragment: () => {
    const date = new Date();
    const result = render(
      html`<div>Fragment: ${date.toLocaleTimeString()}</div>`
    );
    return send(result);
  },
  refresh: () => {
    const result = render(html`<${Content} />`);
    return send(result);
  },
  submit: async (request) => {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
      });
    }

    const body = await request.formData();

    const { name } = Object.fromEntries(body);

    return new Response(204, {
      headers: { "HX-Redirect": `/greeting/${name}` },
    });
  },
};

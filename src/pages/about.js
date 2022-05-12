import html from "../lib/html.js";
import { Header, Footer, Main } from "../components/index.js";

export function headers() {
  return {
    "x-whatever": "12345",
  };
}

export function head() {
  return html` <meta name="author" content="Bill Beckelman" /> `;
}

export default function About() {
  return html`
    <div class="wrapper">
      <${Header} />
      <${Main}>
        <h1>About</h1>
      <//>
      <${Footer} />
    </div>
  `;
}

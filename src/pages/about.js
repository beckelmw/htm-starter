import html from "#lib/html.js";

export function headers() {
  return {
    "x-whatever": "12345",
  };
}

export function head() {
  return html` <meta name="author" content="Bill Beckelman" /> `;
}

export default function About() {
  return html` <h1>About</h1> `;
}

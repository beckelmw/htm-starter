import html from "../lib/html.js";
import { Header, Footer, Main } from "../components/index.js";
import { PostList } from "../components/PostList.js";

export function headers() {
  return {
    "x-whatever": "12345",
  };
}

export function head() {
  return html` <meta name="author" content="Bill Beckelman" /> `;
}

export async function getServerSideData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { posts: data.slice(0, 10) };
}
export default function Index({ props }) {
  const { posts } = props;
  
  return html`
    <div class="wrapper">
      <${Header} />
      <${Main}>
        <h1>Latest Posts</h1>
        <${PostList} posts=${posts} />
      <//>
      <${Footer} />
    </div>
  `;
}

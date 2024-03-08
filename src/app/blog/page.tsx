import Link from "next/link";

const BlogPages = () => {
  return (
    <main>
      <ul>
        <li>
          <Link href="/blog/1">Post1</Link>
        </li>
        <li>
          <Link href="/blog/2">Post2</Link>
        </li>
      </ul>
    </main>
  );
};
export default BlogPages;

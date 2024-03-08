const BlogPostPages = ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <main>
      <h1>Blog Post{slug}</h1>
    </main>
  );
};
export default BlogPostPages;

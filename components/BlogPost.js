import PostHeader from "./PostHeader";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}

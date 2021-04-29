import Link from "next/link";
import PostHeader from "./PostHeader";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <PostHeader meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};

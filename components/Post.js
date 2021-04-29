import PostHeader from "./PostHeader";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <PostHeader meta={meta} link={link} />
    </article>
  );
};

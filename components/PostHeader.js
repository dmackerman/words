import Head from "next/head";
import Link from "next/link";

export default function PostHeader({ meta, link, isBlogPost }) {
  const title = isBlogPost ? (
    <h1>{meta.title}</h1>
  ) : (
    <Link href={"/blog" + link}>
      <h1>{meta.title}</h1>
    </Link>
  );

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {title}
      <div className="meta">
        <p>{meta.description}</p>
        <span>{meta.date}</span>
      </div>
    </>
  );
}

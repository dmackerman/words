import Head from "next/head";

export default function PostHeader({ meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <h1>{meta.title}</h1>
      <div className="meta">
        <p>{meta.description}</p>
        <span>{meta.date}</span>
      </div>
    </>
  );
}

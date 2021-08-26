import Head from "next/head";
import Header from "./Header";
import { GoogleFonts } from "next-google-fonts";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Overpass:wght@100;400;700&display=swap" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
}

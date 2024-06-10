import Head from "next/head";
import AddArticlePage from "@/pages/AddBoard/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddArticlePage />
    </>
  );
}

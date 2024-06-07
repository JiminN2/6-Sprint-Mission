import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Head from "next/head";
import Container from "@/components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="일상의 모든 물건을 거래해 보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container page>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

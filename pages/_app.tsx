import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import BestPostList from "@/components/BestPostList";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <BestPostList />
    </>
  );
}

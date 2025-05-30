import Head from "next/head";
import { Basic } from "@/components/Basic";
export default function Page() {
  return (
    <>
      <Head>
        <title>Child 1</title>
      </Head>
      <Basic t1="Bloque Basico solo una p" />
    </>
  );
}

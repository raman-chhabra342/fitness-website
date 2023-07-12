import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark ">
      <Head></Head>
      <body className="bg-white dark:bg-black dark:text-white overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

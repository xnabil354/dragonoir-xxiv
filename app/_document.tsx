import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script src={`https://www.google.com/recaptcha/api.js?render=6LcyLvopAAAAADIFCeDJ_rnj2_z4Dz_IR0XDaMi7`} async defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

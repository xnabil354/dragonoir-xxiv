// _app.tsx
import { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LcyLvopAAAAADIFCeDJ_rnj2_z4Dz_IR0XDaMi7">
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;

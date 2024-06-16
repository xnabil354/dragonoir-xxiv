import { ReCaptchaProvider } from 'next-recaptcha-v3';
import '../styles/globals.css'; 

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ReCaptchaProvider reCaptchaKey="6LcyLvopAAAAADIFCeDJ_rnj2_z4Dz_IR0XDaMi7">
      <Component {...pageProps} />
    </ReCaptchaProvider>
  );
};

export default MyApp;

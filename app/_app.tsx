import { ReCaptchaProvider } from 'next-recaptcha-v3';
import '../styles/globals.css'; 

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ReCaptchaProvider reCaptchaKey="your_site_key">
      <Component {...pageProps} />
    </ReCaptchaProvider>
  );
};

export default MyApp;

import { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../../components/ContactsForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const SITE_KEY = '6LcyLvopAAAAADIFCeDJ_rnj2_z4Dz_IR0XDaMi7';

const ContactPage: NextPage = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      <div className="mt-40 px-3">
        <Head>
          <title>Contact Form</title>
          <meta name="description" content="Contact form Dragonoir XXIV" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="z-10 text-4xl font-mono text-center mb-20">Contact Us</h1>
          <ContactForm />
        </main>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default ContactPage;

import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../../components/ContactsForm';

const Home: NextPage = () => {
  return (
    <div className="mt-40 px-3">
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Contact form using Next.js, TypeScript, and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="z-10 text-7xl font-mono text-center mb-20">
        Contact Us
      </h1>
        <ContactForm />
      </main>
    </div>
  );
};

export default Home;
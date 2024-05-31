import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="mt-40 px-3">
      <Head>
        <title>Graduation</title>
        <meta name="description" content="Graduation Dragonoir XXIV SMAN 15 Jakarta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="z-10 text-4xl font-mono text-center mb-20">
          Graduation
        </h1>
        <div className="flex justify-center items-center flex-wrap text-center">
          <img className="mb-5 mx-20 mr-20" src="/graduation-image-3.jpg" alt="Graduation Image 3" width="300" height="200" />
          <img className="mb-5 mx-20 mr-20" src="/graduation-image-2.jpg" alt="Graduation Image 2" width="300" height="200" />
          <img className="mb-5 mx-20 mr-20" src="/graduation-image.jpg" alt="Graduation Image" width="300" height="200" />
        </div>
        <div className="text-center mt-10">
          <a 
            href="/UNDANGAN-GRADUATION-2024.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mb-4 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors active:bg-gradient-to-r active:from-blue-500 active:to-green-500 active:text-white"
          >
            Lihat Undangan
          </a>
          <br />
          <a 
            href="/UNDANGAN-GRADUATION-2024.pdf" 
            download 
            className="inline-block px-6 py-3 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors active:bg-gradient-to-r active:from-blue-500 active:to-green-500 active:text-white"
          >
            Unduh Undangan
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

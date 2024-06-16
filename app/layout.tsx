import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const clashDisplay = localFont({
  src: "./ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

const RECAPTCHA_SITE_KEY = '6LcyLvopAAAAADIFCeDJ_rnj2_z4Dz_IR0XDaMi7';

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Dragonoir XXIV",
  description: "Website Angkatan XXIV Made By Dragonoir XXIV",
  icons: "/icon-512x512.png",
};

const HeadContent = () => (
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
    <meta name="theme-color" content="#000000" />
    {/* Google Tag Manager */}
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K946CW9');`,
      }}
    />
    {/* End Google Tag Manager */}
  </head>
);

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bgMesh relative before:content-[''] before:-z-999 before:absolute before:w-full before:h-full before:bg-[#ffffff86] before:backdrop-blur-md">
    <div className="scrollbar overflow-auto">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${clashDisplay.variable} ${spaceGrotesk.variable}`}
    >
      <HeadContent />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K946CW9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
          <MantineProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </MantineProvider>
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}

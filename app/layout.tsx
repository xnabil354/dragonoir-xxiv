import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const clashDisplay = localFont({
  src: "./ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Dragonoir XXIV",
  description: "Website Angkatan XXIV Made By Dragonoir XXIV",
};

const HeadContent = () => (
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
    <meta name="theme-color" content="#000000" />
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
        <MantineProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
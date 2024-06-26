"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsAppInstalled(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      (deferredPrompt as any).userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      <nav className="text-neutral-800 mx-5 my-8 backdrop-blur brightness-105 bg-gradient-to-br from-red-400/10 via-blue-400/10 to-cyan-400/10 z-50 border-white border-2 border-opacity-30 rounded-3xl shadow-xl px-10 py-10 lg:px-20 lg:py-20 flex flex-col lg:flex-row space-y-16 lg:space-y-0">
        <div className="grow flex justify-evenly lg:justify-start space-x-5 lg:space-x-10">
          <div className="">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>
          <div className="flex flex-col space-y-1 justify-evenly text-md font-bold uppercase min-w-[120px]">
            <Link href="/the-fam">The Fam!</Link>
            <Link href="/the-team">Meet The Team</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/graduation">Graduation</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="grow flex flex-col lg:flex-row justify-evenly lg:justify-end items-center lg:space-x-10 space-y-4 lg:space-y-0">
          <div className="font-bold">Find Us on Social Media!</div>
          <div className="flex space-x-8 text-xl">
            <Link href="https://www.instagram.com/dragonoir_/">
              <FaInstagram />
            </Link>
          </div>
          {!isAppInstalled && deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="font-mono text-black px-4 py-2 rounded-lg shadow-md bg-transparent border border-white transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500"
            >
              Download App Now!
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
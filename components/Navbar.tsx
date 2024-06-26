"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

interface NavLinkProps extends LinkProps {
  isActive?: boolean;
  children?: React.ReactNode;
}

function NavLink({ isActive, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className={`py-1.5 px-4 rounded-full transition hover:shadow-lg font-semibold text-neutral-800 ${
        isActive ? "bg-white/80 shadow-md" : "hover:bg-neutral-50/40"
      }`}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    // TODO: Make Navbar responsive
    <div className="fixed top-0 left-0 w-screen h-screen invisible z-50">
      <nav className="visible fixed inset-x-5 top-5 backdrop-blur bg-gradient-to-br from-red-400/10 via-blue-400/10 to-cyan-400/10 border-white border-2 border-opacity-30 shadow-xl rounded-3xl z-50 px-10 py-3 10 flex flex-row content-center justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="" width={48} height={49} />
        </Link>
        <div className="visible duration-700 hidden md:flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2">
          <NavLink
            isActive={pathname === "/the-fam/"}
            href="/the-fam"
            onClick={() => setOpen(false)}
          >
            The Fam!
          </NavLink>
          <NavLink
            isActive={pathname === "/the-team/"}
            href="/the-team"
            onClick={() => setOpen(false)}
          >
            Meet the Team
          </NavLink>
          <NavLink
            isActive={pathname === "/gallery/"}
            href="/gallery"
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            isActive={pathname === "/graduation/"}
            href="/graduation"
            onClick={() => setOpen(false)}
          >
            Graduation
          </NavLink>
          <NavLink
            isActive={pathname === "/contact/"}
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>

          <button
            className="md:hidden rounded-full mt-20 bg-black text-white p-3 text-xl"
            onClick={() => setOpen(false)}
          >
            <HiXMark />
          </button>
        </div>
        <button
          className="md:hidden hover:bg-opacity-20 hover:bg-gray-600 p-2.5 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <HiBars3 />
        </button>
      </nav>
      <div
        className={`${
          open ? "bottom-0" : "-bottom-[150%]"
        } visible duration-700 fixed md:static h-screen w-screen md:w-auto z-50 md:h-auto flex md:hidden flex-col md:flex-row backdrop-blur md:backdrop-blur-0 justify-center items-center gap-4 md:gap-2`}
      >
        <h1 className="md:hidden text-4xl mb-20 font-mono">DRAGONOIR XXIV</h1>

        <NavLink
          isActive={pathname === "/the-fam/"}
          href="/the-fam"
          onClick={() => setOpen(false)}
        >
          The Fam!
        </NavLink>
        <NavLink
          isActive={pathname === "/the-team/"}
          href="/the-team"
          onClick={() => setOpen(false)}
        >
          Meet the Team
        </NavLink>
        <NavLink
          isActive={pathname === "/gallery/"}
          href="/gallery"
          onClick={() => setOpen(false)}
        >
          Gallery
        </NavLink>
        <NavLink
            isActive={pathname === "/graduation/"}
            href="/graduation"
            onClick={() => setOpen(false)}
          >
            Graduation
          </NavLink>
        <NavLink
          isActive={pathname === "/contact/"}
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Contact Us
        </NavLink>

        <button
          className="md:hidden rounded-full mt-20 bg-black text-white p-3 text-xl"
          onClick={() => setOpen(false)}
        >
          <HiXMark />
        </button>
      </div>
    </div>
  );
}

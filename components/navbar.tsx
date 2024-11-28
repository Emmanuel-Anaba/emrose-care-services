"use client";
import clsx from "clsx";
import Link from "next/link";
import NavLinks from "./navlinks";
import ThemeSwitcher from "./themeswitcher";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <nav>
        <Link href="/">Emrose Care Services</Link>
        <div>
          <NavLinks />
          <ThemeSwitcher />
          <RiMenu3Line onClick={toggleSidebar} />
        </div>
      </nav>
      <div
        className={clsx("overlay", open ? "block" : "hidden")}
        onClick={toggleSidebar}></div>
      <aside className={open ? "left-0" : "-left-72"}>
        <NavLinks toggleSidebar={toggleSidebar} />
      </aside>
    </>
  );
}

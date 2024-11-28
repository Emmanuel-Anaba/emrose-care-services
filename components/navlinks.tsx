"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/lists";

export default function NavLinks({
  toggleSidebar,
}: {
  toggleSidebar?: () => void;
}) {
  const path = usePathname();

  return (
    <ul className="nav-links">
      {navLinks.map(({ name, href }) => (
        <li
          key={name}
          onClick={toggleSidebar}
          className={clsx(path === href && "active")}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

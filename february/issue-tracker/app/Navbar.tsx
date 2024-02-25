"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import cn from "classnames";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Issues", href: "/issues" },
];

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug
          className={cn({
            "text-2xl": true,
            "text-blue-700": currentPath === "/",
          })}
        />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={cn({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

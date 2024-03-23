"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavbarDrawer } from "./NavbarDrawer";
import { Navlink } from "@/types/NavLinks";
import { ToggleDarkModeButton } from "./ToggleDarkModeButton";

const navLinks: Navlink[] = [
  { label: "Accueil", href: "/" },
  { label: "AI Chat", href: "/ai_chat" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="border border-b-2 p-6 flex items-center justify-between ">
      <div className="block sm:hidden">
        <NavbarDrawer navLinks={navLinks} />
      </div>
      <div className="">Logo</div>
      <div className="hidden sm:block">
        <nav>
          {navLinks.map(({ label, href }: Navlink) => (
            <Link
              href={href}
              key={label}
              className={`mx-2 text-xl ${
                pathname === href
                  ? "font-bold underline underline-offset-8 decoration-indigo-500 decoration-4"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="">
        <ToggleDarkModeButton />
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLink from "../NavLinks/NavLink";
import { navLinks } from "../NavLinks/navLinks";
import UserWidget from "../UserWidget/UserWidget";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative h-navbar bg-quaternary">
      <div className="container mx-auto px-4">
        <div className="flex h-full items-center justify-between py-2">
          <Link href="/" className="text-xl font-bold text-quinary">
            Yisus
            <span className="text-tertiary">
              Shop<span className="text-primary/70">!</span>
            </span>
          </Link>

          <div className="flex grow items-center justify-end gap-7 lg:justify-between">
            <div className="hidden grow justify-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            <UserWidget />

            <div className="lg:hidden">
              {menuOpen ? (
                <AiOutlineClose
                  size={24}
                  className="cursor-pointer text-primary"
                  onClick={toggleMenu}
                />
              ) : (
                <AiOutlineMenu
                  size={24}
                  className="cursor-pointer text-tertiary"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 bg-quaternary shadow-md lg:hidden">
            <div className="flex flex-col items-center gap-4 px-4 py-4 text-center">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={toggleMenu}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

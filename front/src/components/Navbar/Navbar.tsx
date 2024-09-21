'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import NavLink from '../NavLinks/NavLink';
import { navLinks, NavLink as NavLinkInterface } from '../NavLinks/navLinks';
import UserWidget from '../UserWidget/UserWidget';
import { AuthContext } from '@/context/authContext';

const Navbar: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-quaternary h-navbar relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-full py-2">
          <Link href="/" className="text-quinary text-xl font-bold">
            Yisus
            <span className="text-tertiary">
              Shop<span className="text-primary/70">!</span>
            </span>
          </Link>

          <div className="flex items-center gap-7 flex-grow justify-end lg:justify-between">
            <div className="hidden lg:flex gap-7 flex-grow justify-center">
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
                  className="text-primary cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <AiOutlineMenu
                  size={24}
                  className="text-tertiary cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-quaternary shadow-md z-50 ">
            <div className="flex flex-col gap-4 py-4 px-4 items-center text-center">
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

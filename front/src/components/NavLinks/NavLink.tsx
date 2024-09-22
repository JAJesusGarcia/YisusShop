import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-tertiary transition-colors duration-500 hover:text-primary ${isActive ? 'relative !text-quinary after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:transform after:text-quinary after:content-["•"]' : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;

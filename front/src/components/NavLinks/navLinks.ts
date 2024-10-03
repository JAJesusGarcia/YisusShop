export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/products", label: "SHOP" },
  { href: "/dashboard", label: "DASHBOARD" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
  { href: "/favorites", label: "FAVORITES" },
];

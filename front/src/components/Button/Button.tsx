import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  onClick,
  href = "",
}: //type,
IButton) => {
  return (
    <Link href={href}>
      <button
        className={`bg-${variant} ${className} rounded border-2 px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-100`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

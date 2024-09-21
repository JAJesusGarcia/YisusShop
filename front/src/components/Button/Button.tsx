import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface IButton {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  href = '',
}: //type,
IButton) => {
  return (
    <Link href={href}>
      <button
        className={`bg-${variant} ${className} py-2 px-4 border-2 rounded transition-all hover:scale-105 duration-300 active:scale-100`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

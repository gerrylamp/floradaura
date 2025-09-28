import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // we'll still support "href", but internally map to <Link to="">
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  href,
  primary,
  onClick,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-all duration-200";
  const styleClasses = primary
    ? "bg-[#d4af37] hover:bg-[#c4a030] text-white"
    : "bg-white hover:bg-[#f8f9fa] text-[#343a40] border-[#d1e7dd] hover:border-[#d4af37]";
  const classes = `${baseClasses} ${styleClasses} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;

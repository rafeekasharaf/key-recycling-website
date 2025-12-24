import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    to?: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    to,
    href,
    onClick,
    children,
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
}: ButtonProps) {
    const cls = `btn btn--${variant} btn--${size} ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={cls} onClick={onClick as any}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={cls} onClick={onClick as any}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick as any} className={cls}>
            {children}
        </button>
    );
}

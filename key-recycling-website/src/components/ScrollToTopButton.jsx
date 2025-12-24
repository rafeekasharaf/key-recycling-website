import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    return (
        <button
            className={`scroll-top ${visible ? "is-visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
}

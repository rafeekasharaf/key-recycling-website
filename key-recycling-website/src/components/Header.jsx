import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import "../styles/header.css";
import brandLogo from "../assets/images/brand-logo.png";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 980) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const close = () => setOpen(false);

    return (
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <div className="header-top">
                <div className="container header-top-inner">
                    <div className="top-left">
                        <span className="top-dot" />
                        <span className="top-text">Refrigerator & Freezer Recycling</span>
                        <span className="top-sep">•</span>
                        <span className="top-text">Safe Refrigerant Handling</span>
                        <span className="top-sep">•</span>
                        <span className="top-text">Pickup Available</span>
                    </div>
                    <span className="top-actions">
                        <a href="mailto:KeyRecyclingLLC@Gmail.com">KeyRecyclingLLC@Gmail.com</a>
                        <a href="tel:+14843691217">+1 (484) 369-1217</a>
                    </span>
                </div>
            </div>

            <div className="container header-main">
                <Link to="/" className="brand" onClick={close} aria-label="Key Recycling home">
                    <img
                        src={brandLogo}
                        alt="Key Recycling LLC Logo"
                        className="brand-logo"
                    />
                    <div className="brand-text">
                        <div className="brand-title">Key Recycling LLC</div>
                        <div className="brand-sub">Appliance Recycling Specialists</div>
                    </div>
                </Link>

                <button
                    className={`burger ${open ? "is-open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
                    <div className="nav-links">
                        <NavLink to="/" end onClick={close}>Home</NavLink>
                        <NavLink to="/why-recycle" onClick={close}>Why Recycle</NavLink>
                        <NavLink to="/how-it-works" onClick={close}>How It Works</NavLink>
                        <NavLink to="/about" onClick={close}>About</NavLink>
                        <NavLink to="/services" onClick={close}>Services</NavLink>



                        <NavLink to="/contact" onClick={close}>Contact</NavLink>
                        {/* <NavLink to="/faq" onClick={close}>FAQ</NavLink> */}
                    </div>

                    <div className="nav-cta">
                        <Button to="/contact" variant="primary" size="lg" onClick={close}>
                            Request Pickup
                        </Button>
                        <Button href="tel:+14843691217" variant="secondary" size="sm" className="cta-btn">
                            Call Now
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

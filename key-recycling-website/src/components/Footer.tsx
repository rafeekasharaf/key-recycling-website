import { Link } from "react-router-dom";
import "../styles/footer.css";
import Button from "./Button";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <div className="footer-brand">
                        <div className="footer-badge">♻</div>
                        <div>
                            <div className="footer-title">Key Recycling LLC</div>
                            <div className="muted">Responsible refrigerator & freezer recycling</div>
                        </div>
                    </div>

                    <p className="muted footer-text">
                        We provide safe, professional appliance recycling with a simple pickup experience.
                        Our process prioritizes responsible handling and material recovery—built for clarity, trust, and speed.
                    </p>

                    <div className="footer-actions">
                        <Button to="/contact" variant="primary" size="sm">Request Pickup</Button>
                        <Button href="tel:+14843691217" variant="secondary" size="sm" className="cta-btn">
                            Call Now
                        </Button>
                    </div>
                </div>

                <div className="footer-col">
                    <div className="footer-h">Pages</div>
                    <Link to="/">Home</Link>
                    <Link to="/why-recycle">Why Recycle</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/how-it-works">How It Works</Link>

                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-col">
                    <div className="footer-h">Contact</div>
                    <div className="muted">Email</div>
                    <a href="mailto:KeyRecyclingLLC@Gmail.com">KeyRecyclingLLC@Gmail.com</a>

                    <div className="muted" style={{ marginTop: 10 }}>Phone</div>
                    <a href="tel:+14843691217">+1 (484) 369-1217</a>

                    <div className="muted" style={{ marginTop: 10 }}>Address</div>
                    <div>8400 US-13, Bristol, PA 19007</div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <span>© {year} Key Recycling LLC. All rights reserved.</span>

                </div>
            </div>
        </footer>
    );
}

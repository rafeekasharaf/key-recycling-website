import { Link } from "react-router-dom";
import "../styles/footer.css";
import Button from "./Button";
import HomeownerNotice from "./HomeownerNotice";

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
                            <div className="muted">Appliance recycling partner to utility energy-efficiency programs</div>
                        </div>
                    </div>

                    <p className="muted footer-text">
                        We help utilities and program implementers deliver turnkey refrigerator and freezer recycling programs —
                        from in-home collection for program participants to responsible processing at our own plant and reliable
                        reporting back to the program.
                    </p>

                    <div className="footer-actions">
                        <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
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
                    <div className="footer-h">Utility & Program Inquiries</div>
                    <div className="muted">Email</div>
                    <a href="mailto:KeyRecyclingLLC@Gmail.com">KeyRecyclingLLC@Gmail.com</a>

                    <div className="muted" style={{ marginTop: 10 }}>Phone</div>
                    <div>+1 (484) 369-1217</div>

                    <div className="muted" style={{ marginTop: 10 }}>Address</div>
                    <div>1800 Route-13, Bristol, PA 19007</div>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: 18 }}>
                <HomeownerNotice compact />
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <span>© {year} Key Recycling LLC. All rights reserved.</span>

                </div>
            </div>
        </footer>
    );
}

import Section from "../components/Section";
import Button from "../components/Button";
import areasImg from "../assets/images/areas-hero.png";

export default function ServiceAreas() {
    const areas = [
        "City / Town 1",
        "City / Town 2",
        "City / Town 3",
        "County / Region",
        "Neighboring Areas",
        "Commercial Zones",
    ];

    return (
        <>
            <section className="page-hero page-hero--short">
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(6,33,22,.66), rgba(9,20,35,.60)), url(${areasImg})`,
                    }}
                />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <h1 className="h1">Service Areas</h1>
                        <p className="hero-lead">
                            We provide pickup coverage across local areas. Update this page with exact cities and counties to improve local SEO.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Request Pickup</Button>
                            <Button to="/services" variant="secondary" size="lg">Services</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Coverage"
                title="Local pickup coverage"
                subtitle="Replace these with real coverage cities/counties from your client."
            >
                <div className="grid-2">
                    <div className="panel">
                        <h3 className="h3">Areas we serve</h3>
                        <div className="pill-grid">
                            {areas.map((a) => (
                                <span key={a} className="pill">{a}</span>
                            ))}
                        </div>
                        <p className="muted">
                            If you’re unsure whether you’re in range, submit a request. We’ll confirm quickly.
                        </p>
                        <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                    </div>

                    <div className="panel">
                        <h3 className="h3">Map</h3>
                        <p className="muted">
                            Replace this iframe with your Google Maps embed (business address or coverage area).
                        </p>
                        <div className="map">
                            <iframe
                                title="Service Area Map"
                                src="https://www.google.com/maps?q=United%20States&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

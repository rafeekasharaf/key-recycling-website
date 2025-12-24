import Section from "../components/Section";
import Button from "../components/Button";
import servicesImg from "../assets/images/services-hero.jpg";

export default function Services() {
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
                        backgroundImage: `linear-gradient(90deg, rgba(6,33,22,.68), rgba(9,20,35,.60)), url(${servicesImg})`,
                    }}
                />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <h1 className="h1">Services</h1>
                        <p className="hero-lead">
                            Refrigerator and freezer recycling for homes and businesses — with a clean, modern, trust-focused experience.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Request Pickup</Button>
                            <Button to="/how-it-works" variant="secondary" size="lg">How It Works</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Core services"
                title="What we offer"
                subtitle="Service descriptions written to build trust and answer customer questions."
            >
                <div className="grid-2">
                    {/* Card 1 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Residential</span>
                            <span className="service-chip service-chip--alt">Most Popular</span>
                        </div>

                        <h3 className="h3 service-title">Refrigerator Recycling</h3>
                        <p className="service-summary">
                            Hassle-free refrigerator pickup and responsible recycling — designed for homeowners, property managers, and rentals.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> old kitchen fridges, garage fridges, rental move-outs
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Pickup scheduling & confirmation</div>
                            <div className="service-feature">Careful handling & transport</div>
                            <div className="service-feature">Responsibility-minded recycling</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                            <Button to="/faq" variant="ghost" size="sm">Questions?</Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Residential</span>
                            <span className="service-chip service-chip--alt">Heavy Units</span>
                        </div>

                        <h3 className="h3 service-title">Freezer Recycling</h3>
                        <p className="service-summary">
                            Freezers can be heavy and awkward. We confirm access details up front and keep pickup smooth and predictable.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> chest freezers, upright freezers, basement/garage units
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Access planning (stairs, doors, gates)</div>
                            <div className="service-feature">Safe pickup workflow</div>
                            <div className="service-feature">Clear request-to-schedule process</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                            <Button to="/how-it-works" variant="ghost" size="sm">See process</Button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Commercial</span>
                            <span className="service-chip service-chip--alt">Bulk Pickup</span>
                        </div>

                        <h3 className="h3 service-title">Commercial Appliance Recycling</h3>
                        <p className="service-summary">
                            Bulk pickup and logistics coordination for businesses — aligned with dock access, time windows, and site requirements.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> restaurants, retail, apartments, facilities & maintenance teams
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Bulk pickup planning</div>
                            <div className="service-feature">Dock/access coordination</div>
                            <div className="service-feature">Clear scheduling communication</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Request quote</Button>
                            <Button to="/service-areas" variant="ghost" size="sm">Coverage</Button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Partners</span>
                            <span className="service-chip service-chip--alt">Programs</span>
                        </div>

                        <h3 className="h3 service-title">Program / Partner Support</h3>
                        <p className="service-summary">
                            If your organization runs a recycling program, we can align workflows for consistency, coordination, and smooth customer handling.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> utility programs, community initiatives, partner collections
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Partner-friendly coordination</div>
                            <div className="service-feature">Consistent customer experience</div>
                            <div className="service-feature">Operational alignment</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Talk to us</Button>
                            <Button to="/about" variant="ghost" size="sm">About</Button>
                        </div>
                    </div>
                </div>

            </Section>




            <>


                <Section
                    tone="gradient"
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
            <section className="cta-band">
                <div className="container cta-band-inner">
                    <div>
                        <h2 className="h2">Need pickup scheduling that’s simple?</h2>
                        <p className="lead">Use our request form — we’ll respond quickly and confirm the next steps.</p>
                    </div>
                    <div className="cta-actions">
                        <Button to="/contact" variant="primary" size="lg">Request Pickup</Button>
                        <Button to="/how-it-works" variant="secondary" size="lg">How it works</Button>
                    </div>
                </div>
            </section>
        </>
    );
}

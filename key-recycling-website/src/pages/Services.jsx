import Section from "../components/Section";
import Button from "../components/Button";
import servicesImg from "../assets/images/services-hero.jpg";

export default function Services() {
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
                            End-to-end appliance recycling services for utility energy-efficiency programs and their implementers.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Partner With Us</Button>
                            <Button to="/how-it-works" variant="secondary" size="lg">Our Process</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Core services"
                title="What we offer"
                subtitle="Everything a utility appliance recycling program needs — collection, processing, and reporting — from one partner."
            >
                <div className="grid-2">
                    {/* Card 1 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Utility Programs</span>
                            <span className="service-chip service-chip--alt">Collection</span>
                        </div>

                        <h3 className="h3 service-title">Program Collection Services</h3>
                        <p className="service-summary">
                            In-home collection for utility program participants, carried out by our own trained crews on the program’s behalf.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> utility appliance recycling programs and their implementers
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Professional collection crews</div>
                            <div className="service-feature">Scheduling handled through the program</div>
                            <div className="service-feature">Unit verification at collection</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
                            <Button to="/how-it-works" variant="ghost" size="sm">Our Process</Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Processing</span>
                            <span className="service-chip service-chip--alt">95%+ Recovery</span>
                        </div>

                        <h3 className="h3 service-title">Recycling & Material Recovery</h3>
                        <p className="service-summary">
                            Every unit is fully deconstructed at our own plant, with over 95% of components and materials recycled or
                            responsibly handled.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> programs that require documented, compliance-focused processing
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Refrigerant recovery</div>
                            <div className="service-feature">Foam blowing-agent recovery</div>
                            <div className="service-feature">Full deconstruction & material recovery</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
                            <Button to="/why-recycle" variant="ghost" size="sm">Why recycle?</Button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Reporting</span>
                            <span className="service-chip service-chip--alt">Program Data</span>
                        </div>

                        <h3 className="h3 service-title">Program Data & Reporting</h3>
                        <p className="service-summary">
                            Unit-level records from collection through processing to support program verification and savings reporting.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> program administrators, implementers, and evaluation teams
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Unit-level collection records</div>
                            <div className="service-feature">Processing documentation</div>
                            <div className="service-feature">Records delivered back to the program</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
                            <Button to="/about" variant="ghost" size="sm">About</Button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="service-card service-card--clean">
                        <div className="service-top">
                            <span className="service-chip">Partners</span>
                            <span className="service-chip service-chip--alt">Bulk Volume</span>
                        </div>

                        <h3 className="h3 service-title">Retail & Bulk Partners</h3>
                        <p className="service-summary">
                            Processing for appliances collected by retail and bulk partners, held to the same standards as our program units.
                        </p>

                        <div className="service-bestfor">
                            <strong>Best for:</strong> retailers and organizations with bulk appliance volume
                        </div>

                        <div className="service-features">
                            <div className="service-feature">Consistent processing standards</div>
                            <div className="service-feature">High-volume plant capacity</div>
                            <div className="service-feature">Documentation on request</div>
                        </div>

                        <div className="service-actions">
                            <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
                            <Button to="/about" variant="ghost" size="sm">About</Button>
                        </div>
                    </div>
                </div>

            </Section>

            <section className="cta-band">
                <div className="container cta-band-inner">
                    <div>
                        <h2 className="h2">Planning or expanding an appliance recycling program?</h2>
                        <p className="lead">Tell us about your program and territory — we’ll follow up to discuss how we can support it.</p>
                    </div>
                    <div className="cta-actions">
                        <Button to="/contact" variant="primary" size="lg">Partner With Us</Button>
                    </div>
                </div>
            </section>
        </>
    );
}

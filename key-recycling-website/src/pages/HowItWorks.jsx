import Section from "../components/Section";
import Button from "../components/Button";
import processImg from "../assets/images/process-hero.png";

export default function HowItWorks() {
    return (
        <>
            <section className="page-hero page-hero--short">
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(9,20,35,.72), rgba(6,33,22,.52)), url(${processImg})`,
                    }}
                />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <h1 className="h1">How It Works</h1>
                        <p className="hero-lead">
                            A simple, transparent process from request to responsible recycling—built to make customers feel confident.
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
                eyebrow="Step-by-step"
                title="Three steps that customers understand"
                subtitle="Clear steps reduce friction and increase trust."
            >
                <div className="timeline-steps">
                    <div className="step step--wide">
                        <div className="step-num">1</div>
                        <div>
                            <div className="step-title">Submit a pickup request</div>
                            <div className="muted">
                                Tell us what you’re recycling (refrigerator, freezer, or commercial unit), the pickup address, and any access notes.
                                If the unit is in a basement, behind a gate, or requires special handling, include that too.
                            </div>
                        </div>
                    </div>

                    <div className="step step--wide">
                        <div className="step-num">2</div>
                        <div>
                            <div className="step-title">We confirm details & schedule</div>
                            <div className="muted">
                                We review your request, confirm the details, and coordinate an appointment time. For businesses, we can coordinate around
                                docks, access windows, and volume.
                            </div>
                        </div>
                    </div>

                    <div className="step step--wide">
                        <div className="step-num">3</div>
                        <div>
                            <div className="step-title">Pickup & responsible recycling</div>
                            <div className="muted">
                                We handle pickup professionally and follow a responsibility-minded recycling workflow. The goal is to minimize environmental
                                impact and recover useful materials wherever possible.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-row">
                    <Button to="/contact" variant="primary" size="md">Request pickup</Button>
                    <Button to="/faq" variant="secondary" size="md">Read FAQs</Button>
                </div>
            </Section>

            <Section
                tone="soft"
                eyebrow="What to prepare"
                title="Make pickup smoother in minutes"
                subtitle="These quick details help avoid delays and make pickup predictable."
            >
                <div className="grid-3">
                    <div className="panel">
                        <h3 className="h3">Access info</h3>
                        <p className="muted">Stairs, gates, narrow doors, elevator access, or loading docks.</p>
                    </div>
                    <div className="panel">
                        <h3 className="h3">Appliance details</h3>
                        <p className="muted">Refrigerator/freezer type, approximate size, and any notes.</p>
                    </div>
                    <div className="panel">
                        <h3 className="h3">Preferred timing</h3>
                        <p className="muted">A date range or preferred days helps schedule faster.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}

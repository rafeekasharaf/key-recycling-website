import { useEffect, useRef } from "react";
import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import Section from "../components/Section";
import Button from "../components/Button";
import IconCard from "../components/IconCard";
import heroImg from "../assets/images/home-hero.png";

import rad1 from "../assets/images/rad/rad-plant-1.webp";
import rad2 from "../assets/images/rad/rad-plant-2.webp";
import rad3 from "../assets/images/rad/rad-plant-3.webp";
import rad4 from "../assets/images/rad/rad-plant-4.webp";
import rad5 from "../assets/images/rad/rad-plant-5.webp";
import rad6 from "../assets/images/rad/rad-plant-6.webp";
import rad7 from "../assets/images/rad/rad-plant-7.webp";

import rad8 from "../assets/images/rad/rad-plant-8.webp";
import rad9 from "../assets/images/rad/rad-plant-9.webp";

function useReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-revealed");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return ref;
}

export default function Home() {
    const heroRef = useReveal();
    const recycleRef = useReveal();
    const whyRef = useReveal();
    const howRef = useReveal();
    const trustRef = useReveal();

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const plantImages = useMemo(() => ([
        { src: rad1, alt: "RAD recycling plant equipment overview", caption: "Inside the RAD recycling plant — real equipment and operations." },
        { src: rad2, alt: "RAD recycling plant equipment wide view" },
        { src: rad3, alt: "RAD plant machinery close-up with operator" },
        { src: rad4, alt: "RAD plant filtration and collection system" },
        { src: rad5, alt: "RAD plant cyclone system structure" },
        { src: rad6, alt: "RAD plant processing unit close-up" },
        { src: rad7, alt: "RAD plant outdoor equipment staging area" },
        { src: rad8, alt: "RAD recycling plant compressor collection area" },
        { src: rad9, alt: "RAD recycling plant e-waste processing area" },
    ]), []);

    return (
        <>
            {/* HERO */}
            <section className="page-hero page-hero--premium" ref={heroRef}>
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(6,33,22,.72), rgba(10,18,35,.55)), url(${heroImg})`,
                    }}
                />
                <div className="page-hero-overlay" />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <div className="hero-badges">
                            <span className="pill pill--glass">Safe refrigerant handling</span>
                            <span className="pill pill--glass">Residential & Commercial</span>
                            <span className="pill pill--glass">Fast pickup scheduling</span>
                        </div>

                        <h1 className="h1 hero-title">
                            Responsible Appliance Recycling & Material Recovery
                            <span className="accent"> Done Right.</span>
                        </h1>

                        <p className="hero-lead">
                            Key Recycling LLC helps homeowners and businesses recycle old refrigerators and freezers responsibly.
                            We keep the process simple, communication clear, and handling professional — so you feel confident from
                            request to pickup.
                        </p>

                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Request Pickup</Button>
                            <Button to="/services" variant="secondary" size="lg">View Services</Button>
                            <Button href="tel:+14843691217" variant="ghost" size="lg">Call Now</Button>
                        </div>

                        <div className="hero-proof premium-proof">
                            <div className="proof proof--card">
                                <div className="proof-num">24–48h</div>
                                <div className="muted">Typical response window</div>
                            </div>
                            <div className="proof proof--card">
                                <div className="proof-num">Safety</div>
                                <div className="muted">Careful handling & transport</div>
                            </div>
                            <div className="proof proof--card">
                                <div className="proof-num">Eco</div>
                                <div className="muted">Responsible recycling mindset</div>
                            </div>
                        </div>

                        <div className="hero-mini">
                            <span className="mini-item">✔ Clear scheduling</span>
                            <span className="mini-item">✔ Professional pickup</span>
                            <span className="mini-item">✔ Simple request form</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE RECYCLE */}
            <Section
                tone="plain"
                eyebrow="What we recycle"
                title="Focused on appliances that matter most"
                subtitle="Refrigerators and freezers are our specialty — plus commercial units. A clean process built around trust."
            >
                <div className="recycle-wrap reveal" ref={recycleRef}>
                    <div className="recycle-grid">
                        <div className="recycle-card">
                            <div className="recycle-top">
                                <span className="recycle-label">Residential</span>
                                <span className="recycle-tag">Most common</span>
                            </div>
                            <h3 className="h3">Refrigerators</h3>
                            <p className="">
                                Standard kitchen refrigerators, garage fridges, rental move-out units — we coordinate pickup and handle
                                the unit carefully from start to finish.
                            </p>
                            <ul className="recycle-list">
                                <li>Pickup request & quick confirmation</li>
                                <li>Access notes (stairs, narrow doors)</li>
                                <li>Safe handling and transport</li>
                            </ul>
                            <div className="recycle-actions">
                                <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                                <Button to="/services" variant="ghost" size="sm">Coverage</Button>
                            </div>
                        </div>

                        <div className="recycle-card">
                            <div className="recycle-top">
                                <span className="recycle-label">Residential</span>
                                <span className="recycle-tag">Heavy units</span>
                            </div>
                            <h3 className="h3">Freezers</h3>
                            <p className="">
                                Upright and chest freezers can be heavy and awkward. We confirm access details up front and keep the pickup predictable.
                            </p>
                            <ul className="recycle-list">
                                <li>Chest and upright freezers</li>
                                <li>Basement/garage pickup planning</li>
                                <li>Clear request-to-schedule workflow</li>
                            </ul>
                            <div className="recycle-actions">
                                <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                                <Button to="/services" variant="ghost" size="sm">Coverage</Button>
                            </div>
                        </div>

                        <div className="recycle-card">
                            <div className="recycle-top">
                                <span className="recycle-label">Commercial</span>
                                <span className="recycle-tag">Bulk pickup</span>
                            </div>
                            <h3 className="h3">Commercial Units</h3>
                            <p className="">
                                For businesses, timing and logistics matter. We support bulk pickups and align scheduling with docks and access windows.
                            </p>
                            <ul className="recycle-list">
                                <li>Scheduling around site requirements</li>
                                <li>Dock & access coordination</li>
                                <li>Clear communication for teams</li>
                            </ul>
                            <div className="recycle-actions">
                                <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                                <Button to="/services" variant="ghost" size="sm">Coverage</Button>
                            </div>
                        </div>
                    </div>

                    <div className="recycle-note">
                        <div>
                            <div className="h3">Not sure if your unit qualifies?</div>
                            <p className="mt-8">
                                Submit a pickup request and we’ll confirm quickly. If it’s not eligible, we’ll tell you the best next option.
                            </p>
                        </div>
                        <Button to="/contact" variant="secondary" size="md">Check my unit</Button>
                    </div>
                </div>
            </Section>

            {/* WHY CHOOSE */}
            <Section
                tone="soft"
                eyebrow="Why choose Key Recycling"
                title="A better recycling experience"
                subtitle="Modern communication, professional handling, and a process designed to protect the environment. We provides an effective way for consumers and utilities to responsibly recycle household appliances, resulting in improved energy conservation, lower utility bills, and a safer environment. Energy conservation in casinos is gaining importance as operators adopt eco-friendly technologies and efficient systems. Sustainable lighting, temperature controls, and smart appliances reduce environmental impact"
            >
                <div className="reveal" ref={whyRef}>
                    <div className="grid-2">
                        <div className="panel panel--premium">
                            <h3 className="h3">Safety-first workflow</h3>
                            <p className="">
                                Appliances can contain refrigerants and components that should be handled responsibly. Our pickup and processing steps
                                are designed around clean handling and minimizing environmental risk.
                            </p>
                            <ul className="list-check">
                                <li>Careful pickup & transport</li>
                                <li>Responsible processing mindset</li>
                                <li>Material recovery where possible</li>
                            </ul>
                            <div className="panel-footer">
                                <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                                <Button to="/why-recycle" variant="ghost" size="sm">Why recycle?</Button>
                            </div>
                        </div>

                        <div className="panel panel--premium">
                            <h3 className="h3">Professional service</h3>
                            <p className="">
                                We keep communication clear and scheduling simple. Whether you’re a homeowner or a business,
                                we aim for quick responses and smooth pickup coordination.
                            </p>
                            <ul className="list-check">
                                <li>Fast response to requests</li>
                                <li>Residential & commercial scheduling</li>
                                <li>Mobile-friendly customer experience</li>
                            </ul>
                            <div className="panel-footer">
                                <Button to="/contact" variant="primary" size="sm">Request pickup</Button>
                                <Button to="/why-recycle" variant="ghost" size="sm">Why recycle?</Button>
                            </div>
                        </div>
                    </div>

                    <div className="stats-row stats-row--premium">
                        <div className="stat">
                            <div className="stat-big">Trusted</div>
                            <div className="">Clear expectations & communication</div>
                        </div>
                        <div className="stat">
                            <div className="stat-big">Safe</div>
                            <div className="">Careful handling at every step</div>
                        </div>
                        <div className="stat">
                            <div className="stat-big">Efficient</div>
                            <div className="">Simple request-to-schedule flow</div>
                        </div>
                        <div className="stat">
                            <div className="stat-big">Eco</div>
                            <div className="">Responsible recycling mindset</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* HOW IT WORKS */}
            <Section
                tone="gradient"
                eyebrow="How it works"
                title="Simple process. Clear steps."
                subtitle="Three steps from request to recycling — designed to feel easy for customers."
            >
                <div className="reveal" ref={howRef}>
                    <div className="timeline-steps timeline-steps--premium">
                        <div className="step step--card">
                            <div className="step-num">1</div>
                            <div>
                                <div className="step-title">Request pickup</div>
                                <div className="">Tell us what you have, where it is, and your preferred pickup window.</div>
                            </div>
                        </div>

                        <div className="step step--card">
                            <div className="step-num">2</div>
                            <div>
                                <div className="step-title">Confirm & schedule</div>
                                <div className="">We confirm access details and schedule a time that works for you.</div>
                            </div>
                        </div>

                        <div className="step step--card">
                            <div className="step-num">3</div>
                            <div>
                                <div className="step-title">Recycle responsibly</div>
                                <div className="">Units are handled and processed with safety and environmental responsibility in mind.</div>
                            </div>
                        </div>
                    </div>

                    {/* RAD PLANT GALLERY */}
                    <div className="plant-block">
                        <div className="plant-head">
                            <h3 className="h2" style={{ margin: 0 }}>RAD Recycling Plant</h3>
                            <p className="plant-sub">
                                A look inside the facility where appliances are processed with safety-first handling and responsible material recovery.
                                These photos highlight real equipment and real operations behind our recycling workflow.
                            </p>
                        </div>

                        <div className="plant-gallery" aria-label="RAD Recycling Plant photos">
                            {[
                                { src: rad1, alt: "RAD recycling plant equipment overview" },
                                { src: rad2, alt: "RAD recycling plant equipment wide view" },
                                { src: rad3, alt: "RAD plant machinery close-up with operator" },
                                { src: rad4, alt: "RAD plant filtration and collection system" },
                                { src: rad5, alt: "RAD plant cyclone system structure" },
                                { src: rad6, alt: "RAD plant processing unit close-up" },
                                { src: rad7, alt: "RAD plant outdoor equipment staging area" },
                                { src: rad8, alt: "RAD recycling plant compressor collection area" },
                                { src: rad9, alt: "RAD recycling plant e-waste processing area" },
                            ].map((img, idx) => (
                                <figure
                                    className="plant-item"
                                    key={idx}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            setLightboxIndex(idx);
                                            setLightboxOpen(true);
                                        }
                                    }}
                                >
                                    <img src={img.src} alt={img.alt} loading="eager" decoding="async"
                                        draggable="false"
                                        onContextMenu={(e) => e.preventDefault()}
                                        onDragStart={(e) => e.preventDefault()} />
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="center-row">
                    <Button to="/services" variant="ghost" size="sm">Coverage</Button>
                    <Button to="/contact" variant="primary" size="md">Request pickup</Button>
                </div>
            </Section>


            {/* TRUST */}
            <Section
                tone="plain"
                eyebrow="Built for trust"
                title="Clear answers. Clear expectations."
                subtitle="The details that help customers feel confident — before they submit a pickup request."
            >
                <div className="reveal" ref={trustRef}>
                    <div className="grid-3">
                        <IconCard
                            icon=""
                            title="Clear communication"
                            text="We respond quickly, confirm details, and keep scheduling simple — no confusing steps."
                        />
                        <IconCard
                            icon=""
                            title="Responsible handling"
                            text="Appliance recycling involves materials that must be handled carefully. Our workflow prioritizes safety."
                        />
                        <IconCard
                            icon=""
                            title="Environmental awareness"
                            text="Recycling reduces waste and recovers materials — when it’s done responsibly and consistently."
                        />
                    </div>

                    <div className="trust-band">
                        <div>
                            <div className="h3">Want the fastest way to schedule?</div>
                            <p className="">Use the Request Pickup form — we’ll respond quickly with next steps.</p>
                        </div>
                        <Button to="/contact" variant="primary" size="md">Request Pickup</Button>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="cta-band">
                <div className="container cta-band-inner">
                    <div>
                        <h2 className="h2">Ready to recycle your old fridge or freezer?</h2>
                        <p className="lead">
                            Submit your pickup request in under a minute. We’ll respond quickly to confirm scheduling and next steps.
                        </p>
                    </div>
                    <div className="cta-actions">
                        <Button to="/contact" variant="primary" size="lg">Request Pickup</Button>
                        <Button href="tel:+14843691217" variant="secondary" size="sm" className="cta-btn">
                            Call Now
                        </Button>
                    </div>
                </div>
            </section>
            <Lightbox
                open={lightboxOpen}
                images={plantImages}
                index={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
                onPrev={() => setLightboxIndex((i) => (i - 1 + plantImages.length) % plantImages.length)}
                onNext={() => setLightboxIndex((i) => (i + 1) % plantImages.length)}
                title="RAD Recycling Plant gallery"
            />
        </>
    );
}


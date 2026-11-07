import { useEffect, useRef } from "react";
import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import Section from "../components/Section";
import Button from "../components/Button";
import IconCard from "../components/IconCard";
import HomeownerNotice from "../components/HomeownerNotice";
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
    const servicesRef = useReveal();
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
                            <span className="pill pill--glass">Utility program partner</span>
                            <span className="pill pill--glass">400,000+ units / year</span>
                            <span className="pill pill--glass">95%+ material recovery</span>
                        </div>

                        <h1 className="h1 hero-title">
                            Appliance Recycling Built for Utility Programs
                            <span className="accent"> At Scale.</span>
                        </h1>

                        <p className="hero-lead">
                            Key Recycling LLC partners with utilities and program implementers to run refrigerator and freezer recycling
                            programs end to end — collection from participating customers, compliance-focused processing, and the documentation
                            programs need.
                        </p>

                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Partner With Us</Button>
                            <Button to="/services" variant="secondary" size="lg">Our Services</Button>
                        </div>

                        <div className="hero-proof premium-proof">
                            <div className="proof proof--card">
                                <div className="proof-num">20+ years</div>
                                <div className="muted">Serving utility programs</div>
                            </div>
                            <div className="proof proof--card">
                                <div className="proof-num">5 states</div>
                                <div className="muted">Regional program coverage</div>
                            </div>
                            <div className="proof proof--card">
                                <div className="proof-num">400,000+</div>
                                <div className="muted">Units recycled each year</div>
                            </div>

                            <div className="proof proof--card">
                                <div className="proof-num">95%+</div>
                                <div className="muted">Materials recovered or responsibly handled</div>
                            </div>

                            <div className="proof proof--card">
                                <div className="proof-num">In-house plant</div>
                                <div className="muted">Our own processing facility</div>
                            </div>
                        </div>

                        <div className="hero-mini">
                            <span className="mini-item">✔ Turnkey program delivery</span>
                            <span className="mini-item">✔ Compliance-focused processing</span>
                            <span className="mini-item">✔ Program reporting</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES (3-card grid) */}
            <Section
                tone="plain"
                eyebrow="Services"
                title="Recycling solutions built for utility programs"
                subtitle="Program collection, responsible processing, and reliable reporting — delivered as one service for utilities and implementers."
            >
                <div className="grid-3 reveal" ref={servicesRef}>
                    <IconCard
                        icon=""
                        title="Program Collection"
                        text="In-home collection for enrolled program participants, carried out by our crews on the utility's behalf."
                    />
                    <IconCard
                        icon=""
                        title="Recycling & Processing"
                        text="Units are deconstructed at our plant with refrigerant and foam blowing-agent recovery and responsible material recovery."
                    />
                    <IconCard
                        icon=""
                        title="Program Reporting"
                        text="Unit-level documentation to support program verification and savings reporting."
                    />
                </div>

                <div className="center-row mt-16">
                    <Button to="/services" variant="secondary" size="md">Our Services</Button>
                    <Button to="/contact" variant="primary" size="md">Partner With Us</Button>
                </div>
            </Section>

            {/* WHAT WE RECYCLE */}
            <Section
                tone="plain"
                eyebrow="What we recycle"
                title="Focused on appliances that matter most"
                subtitle="Refrigerators and freezers are our specialty — the units that drive program energy savings and require careful processing."
            >
                <div className="recycle-wrap reveal" ref={recycleRef}>
                    <div className="recycle-grid">
                        <div className="recycle-card">
                            <div className="recycle-top">
                                <span className="recycle-label">Program units</span>
                                <span className="recycle-tag">Most common</span>
                            </div>
                            <h3 className="h3">Refrigerators</h3>
                            <p className="">
                                Older, inefficient refrigerators collected through utility programs — fully deconstructed at our plant so
                                refrigerants, foam, and materials are handled responsibly.
                            </p>
                            <ul className="recycle-list">
                                <li>Refrigerant recovery</li>
                                <li>Foam blowing-agent recovery</li>
                                <li>Metals and plastics recovered for reuse</li>
                            </ul>
                        </div>

                        <div className="recycle-card">
                            <div className="recycle-top">
                                <span className="recycle-label">Program units</span>
                                <span className="recycle-tag">Chest & upright</span>
                            </div>
                            <h3 className="h3">Freezers</h3>
                            <p className="">
                                Chest and upright freezers processed through the same compliance-focused workflow, with each unit tracked
                                for program records.
                            </p>
                            <ul className="recycle-list">
                                <li>Chest and upright freezers</li>
                                <li>Refrigerant and foam recovery</li>
                                <li>Unit-level tracking for reporting</li>
                            </ul>
                        </div>

                        <div className="recycle-card">
                            <div className="recycle-top">
                                <span className="recycle-label">Partners</span>
                                <span className="recycle-tag">Bulk volume</span>
                            </div>
                            <h3 className="h3">Retail & Bulk Partners</h3>
                            <p className="">
                                Appliances collected through retailer haul-away and bulk partners, processed at our plant to the same
                                standards as program units.
                            </p>
                            <ul className="recycle-list">
                                <li>Consistent processing standards</li>
                                <li>High-volume plant capacity</li>
                                <li>Documentation on request</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* WHY CHOOSE */}
            <Section
                tone="soft"
                eyebrow="Why choose Key Recycling"
                title="A recycling partner programs can rely on"
                subtitle="Compliance-focused processing, dependable collection, and the documentation utility programs need."
            >
                <div className="reveal" ref={whyRef}>
                    <div className="grid-2">
                        <div className="panel panel--premium">
                            <h3 className="h3">Compliance-first processing</h3>
                            <p className="">
                                Refrigerators and freezers contain refrigerants and foam blowing agents that must be recovered, not released.
                                Every unit is processed at our own plant with recovery built into the workflow.
                            </p>
                            <ul className="list-check">
                                <li>Refrigerant recovery from every unit</li>
                                <li>Foam blowing-agent handling</li>
                                <li>Documentation for each unit processed</li>
                            </ul>
                            <div className="panel-footer">
                                <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
                                <Button to="/why-recycle" variant="ghost" size="sm">Why recycle?</Button>
                            </div>
                        </div>

                        <div className="panel panel--premium">
                            <h3 className="h3">A reliable program partner</h3>
                            <p className="">
                                With 400,000+ units a year across 5 states, we have the scale and experience to keep programs running
                                smoothly and participants satisfied.
                            </p>
                            <ul className="list-check">
                                <li>Scale to support large programs</li>
                                <li>On-time collection for participants</li>
                                <li>Clear communication with program partners</li>
                            </ul>
                            <div className="panel-footer">
                                <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
                                <Button to="/why-recycle" variant="ghost" size="sm">Why recycle?</Button>
                            </div>
                        </div>
                    </div>

                    <div className="stats-row stats-row--premium">
                        <div className="stat">
                            <div className="stat-big">Proven</div>
                            <div className="">20+ years serving utility programs</div>
                        </div>
                        <div className="stat">
                            <div className="stat-big">Compliant</div>
                            <div className="">Refrigerant and foam recovery</div>
                        </div>
                        <div className="stat">
                            <div className="stat-big">Scalable</div>
                            <div className="">400,000+ units each year</div>
                        </div>
                        <div className="stat">
                            <div className="stat-big">Documented</div>
                            <div className="">Reporting back to the program</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* HOW IT WORKS */}
            <Section
                tone="gradient"
                eyebrow="How it works"
                title="Simple process. Clear steps."
                subtitle="Three steps from program enrollment to recovered materials."
            >
                <div className="reveal" ref={howRef}>
                    <div className="timeline-steps timeline-steps--premium">
                        <div className="step step--card">
                            <div className="step-num">1</div>
                            <div>
                                <div className="step-title">Customer enrolls with the utility</div>
                                <div className="">The program enrolls the participant and sends us the order.</div>
                            </div>
                        </div>

                        <div className="step step--card">
                            <div className="step-num">2</div>
                            <div>
                                <div className="step-title">We collect</div>
                                <div className="">Our crews collect the unit and confirm it in program records.</div>
                            </div>
                        </div>

                        <div className="step step--card">
                            <div className="step-num">3</div>
                            <div>
                                <div className="step-title">We recycle & report</div>
                                <div className="">The unit is processed at our plant with materials recovery and reporting back to the program.</div>
                            </div>
                        </div>
                    </div>

                    {/* RAD PLANT GALLERY */}
                    <div className="plant-block">
                        <div className="plant-head">
                            <h3 className="h2" style={{ margin: 0 }}>Inside Our Recycling Facility</h3>
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
                    <Button to="/how-it-works" variant="ghost" size="sm">Our Process</Button>
                    <Button to="/contact" variant="primary" size="md">Partner With Us</Button>
                </div>
            </Section>


            {/* TRUST */}
            <Section
                tone="plain"
                eyebrow="Built for trust"
                title="Clear answers. Clear expectations."
                subtitle="What program administrators and implementers can count on when Key Recycling supports their appliance recycling program."
            >
                <div className="reveal" ref={trustRef}>
                    <div className="grid-3">
                        <IconCard
                            icon=""
                            title="Partner communication"
                            text="A responsive team that keeps program staff informed on collection status, volumes, and issues as they arise."
                        />
                        <IconCard
                            icon=""
                            title="Responsible processing"
                            text="Refrigerants and foam blowing agents are recovered, and 95%+ of each unit is recycled or responsibly handled."
                        />
                        <IconCard
                            icon=""
                            title="Program-ready records"
                            text="Unit-level documentation that supports program verification, evaluation, and savings reporting."
                        />
                    </div>

                    <div className="trust-band">
                        <div>
                            <div className="h3">Running or launching an appliance recycling program?</div>
                            <p className="">Tell us about your territory and volume — we’ll follow up to discuss.</p>
                        </div>
                        <Button to="/contact" variant="primary" size="md">Partner With Us</Button>
                    </div>
                </div>
            </Section>

            <div className="container" style={{ paddingBottom: 28 }}>
                <HomeownerNotice />
            </div>

            {/* CTA */}
            <section className="cta-band">
                <div className="container cta-band-inner">
                    <div>
                        <h2 className="h2">Looking for an appliance recycling partner for your program?</h2>
                        <p className="lead">
                            Tell us about your program, territory, and volume — we’ll follow up to discuss how we can help.
                        </p>
                    </div>
                    <div className="cta-actions">
                        <Button to="/contact" variant="primary" size="lg">Partner With Us</Button>
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

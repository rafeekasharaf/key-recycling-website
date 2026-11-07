import { useEffect, useRef } from "react";
import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import Section from "../components/Section";
import Button from "../components/Button";
import processImg from "../assets/images/process-hero.webp";

import rad1 from "../assets/images/rad/rad-plant-1.webp";
import rad2 from "../assets/images/rad/rad-plant-2.webp";
import rad3 from "../assets/images/rad/rad-plant-3.webp";
import rad4 from "../assets/images/rad/rad-plant-4.webp";
import rad5 from "../assets/images/rad/rad-plant-5.webp";
import rad6 from "../assets/images/rad/rad-plant-6.webp";
import rad7 from "../assets/images/rad/rad-plant-7.webp";
import rad8 from "../assets/images/rad/rad-plant-8.webp";
import rad9 from "../assets/images/rad/rad-plant-9.webp";

import mirogunDevice from "../assets/images/mirogun/mirogun-device.png";
import mirogunCase from "../assets/images/mirogun/mirogun-case.png";
import mirogunAccessories from "../assets/images/mirogun/mirogun-accessories.png";
import mirogunLeds from "../assets/images/mirogun/mirogun-leds.jpg";
import mirogunAbs from "../assets/images/mirogun/mirogun-spectrum-abs.jpg";
import mirogunReport from "../assets/images/mirogun/mirogun-report.jpg";
import mirogunFoil from "../assets/images/mirogun/mirogun-foil-spectrum.png";


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

export default function HowItWorks() {
    const howRef = useReveal();
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
                            How a utility appliance recycling program runs with Key Recycling — from enrollment to recovered materials.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Partner With Us</Button>
                            <Button to="/services" variant="secondary" size="lg">Our Services</Button>
                        </div>
                    </div>
                </div>
            </section>



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
                    <div className="grid-3">
                        <div className="panel">
                            <h3 className="h3">Collection</h3>
                            <p className="">Our own crews collect units from program participants and verify each unit against the program order at pickup.</p>
                        </div>
                        <div className="panel">
                            <h3 className="h3">Processing</h3>
                            <p className="">Units are deconstructed at our plant, with refrigerant and foam blowing-agent recovery and over 95% of materials recycled or responsibly handled.</p>
                        </div>
                        <div className="panel">
                            <h3 className="h3">Reporting</h3>
                            <p className="">Unit-level records are delivered back to the program to support verification and savings reporting.</p>
                        </div>
                    </div>

                    {/* RAD PLANT GALLERY */}
                    <div className="plant-block">
                        <div className="plant-head">
                            <h3 className="h2" style={{ margin: 0 }}>RAD Recycling Plant</h3>
                            <p className="plant-sub">
                                A look inside the facility where appliances are processed with safety-first handling and responsible material recovery.
                                These photos highlight real equipment and real operations behind our recycling workflow.
                                <br /><br />
                                At RAD, units move through a controlled process designed to support proper handling of materials and consistent outcomes.
                                The goal is simple: keep recyclable materials in circulation, reduce waste, and make sure appliances are processed responsibly
                                with professional-grade equipment and safety-minded procedures.
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
                                    <img src={img.src} alt={img.alt} loading="lazy"
                                        draggable="false"
                                        onContextMenu={(e) => e.preventDefault()}
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                </figure>
                            ))}
                        </div>
                    </div>


                </div>
                <div className="center-row">
                    <Button to="/contact" variant="primary" size="md">Partner With Us</Button>
                </div>
            </Section>

            <Section
                tone="plain"
                eyebrow="Identification technology"
                title="How plastics are identified & sorted (mIRoGun4.0)"
                subtitle="At the plant, we use fast material identification tools to support accurate sorting and responsible recycling."
            >
                <div className="mirogun-block">
                    <div className="mirogun-top">
                        <div className="mirogun-copy">
                            <div className="mirogun-kicker-row">
                                <div className="mirogun-kicker">mIRoGun4.0 • Handheld NIR Measuring System</div>

                                <a
                                    className="mirogun-readmore"
                                    href="/Handout_mIRoGun4.0-English.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Open mIRoGun4.0 PDF"
                                >
                                    Read More
                                    <span aria-hidden="true" className="mirogun-readmore-arrow">↗</span>
                                </a>
                            </div>
                            <h3 className="h2 mirogun-title">Instant plastic identification in milliseconds</h3>

                            <p className="mirogun-lead">
                                The mIRoGun4.0 is a handheld near-infrared (NIR) spectrometer used to identify plastics from household items,
                                packaging, engineering materials, electronics, and automotive applications. It works by pressing the device onto the
                                surface and triggering a scan—returning identification quickly to support confident sorting decisions.
                            </p>

                            <div className="mirogun-points">
                                <div className="mirogun-point">
                                    <div className="mirogun-point-title">Fast scanning</div>
                                    <p>
                                        Single and continuous scans can be done within milliseconds using the trigger or the LED button.
                                    </p>
                                </div>
                                <div className="mirogun-point">
                                    <div className="mirogun-point-title">Built-in database</div>
                                    <p>
                                        Includes an extensive library for thermoplastics, foils and textiles, plus a user-definable database for custom sorting rules.
                                    </p>
                                </div>
                                <div className="mirogun-point">
                                    <div className="mirogun-point-title">Connected workflow</div>
                                    <p>
                                        Data can be monitored and exchanged via USB or Wi-Fi for reporting, result tracking, and analysis support.
                                    </p>
                                </div>
                                <div className="mirogun-point">
                                    <div className="mirogun-point-title">Long runtime</div>
                                    <p>
                                        Uses Li-Ion battery technology with long operating time and optional powerbank support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mirogun-hero">
                            <div className="mirogun-hero-card">
                                <div className="mirogun-hero-badge">Wi-Fi Data Transmission</div>
                                <img src={mirogunDevice} alt="mIRoGun4.0 handheld NIR device" loading="lazy" />
                            </div>

                            <div className="mirogun-mini-grid">
                                <figure className="mirogun-mini">
                                    <img src={mirogunCase} alt="mIRoGun delivered in protective case" loading="lazy" />
                                    <figcaption>Delivered as a complete kit with accessories & test tools.</figcaption>
                                </figure>
                                <figure className="mirogun-mini">
                                    <img src={mirogunAccessories} alt="mIRoGun accessories and cables" loading="lazy" />
                                    <figcaption>Accessories support flexible setup and data exchange.</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="mirogun-divider" />

                    <div className="mirogun-lists">
                        <div className="mirogun-list-card">
                            <h4 className="mirogun-h4">Polymer types in the database</h4>
                            <div className="mirogun-chip-grid">
                                {[
                                    "PA6/PA66", "PA12", "PE", "PP", "PS", "ABS", "PPO", "SAN", "PET", "PBT", "PMMA", "PC",
                                    "PC+ABS", "PC+PET", "POM", "PVC", "PLA", "PVC+ABS", "PE+PET", "PE+PA", "PP+PET", "Cellulose"
                                ].map((x) => (
                                    <span key={x} className="mirogun-chip">{x}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mirogun-list-card">
                            <h4 className="mirogun-h4">Carpets & textiles library</h4>
                            <div className="mirogun-chip-grid">
                                {["PA", "PP", "Polyester", "Cotton", "Poly-Cotton", "Acrylic", "Silk", "Wool", "Acetate"].map((x) => (
                                    <span key={x} className="mirogun-chip">{x}</span>
                                ))}
                            </div>

                            <div className="mirogun-note">
                                For foils and transparent materials, a small ceramic “mirror” plate can be placed behind the sample to improve evaluation.
                            </div>
                        </div>
                    </div>

                    <div className="mirogun-media-row">
                        <figure className="mirogun-media">
                            <img src={mirogunAbs} alt="ABS spectra comparison screen" loading="lazy" />
                            <figcaption>Analysis mode allows comparison across many spectra.</figcaption>
                        </figure>

                        <figure className="mirogun-media">
                            <img src={mirogunReport} alt="NIR analysis report example" loading="lazy" />
                            <figcaption>Reports can include notes and measurement details.</figcaption>
                        </figure>

                        <figure className="mirogun-media">
                            <img src={mirogunFoil} alt="Foil sample spectrum example" loading="lazy" />
                            <figcaption>Foils & multilayer materials can also be evaluated.</figcaption>
                        </figure>

                        <figure className="mirogun-media">
                            <img src={mirogunLeds} alt="Programmable LED indicator panel" loading="lazy" />
                            <figcaption>Programmable LEDs can give quick result indication.</figcaption>
                        </figure>
                    </div>
                </div>
            </Section>


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

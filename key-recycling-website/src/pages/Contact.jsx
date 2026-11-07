import { useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import HomeownerNotice, { HOMEOWNER_NOTICE_TEXT } from "../components/HomeownerNotice";
import contactImg from "../assets/images/contact-hero.jpg";

const HOMEOWNER = "I'm a homeowner with an appliance to recycle";

export default function Contact() {
    const [msg, setMsg] = useState("");
    const [orgType, setOrgType] = useState("");
    const isHomeowner = orgType === HOMEOWNER;

    function onSubmit(e) {
        e.preventDefault();
        if (isHomeowner) return;

        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form.entries());

        const subject = encodeURIComponent(`Program Partnership Inquiry – ${data.organization}`);
        const body = encodeURIComponent(
            `Program Partnership Inquiry\n\nName: ${data.name}\nWork Email: ${data.email}\nOrganization: ${data.organization}\nRole: ${data.role}\nOrganization Type: ${data.orgType}\nStates / Service Territory: ${data.territory}\nEstimated Annual Volume: ${data.volume}\n\nMessage:\n${data.message}\n`
        );

        window.location.href = `mailto:KeyRecyclingLLC@Gmail.com?subject=${subject}&body=${body}`;
        setMsg("Opening your email app with your inquiry…");
        e.currentTarget.reset();
        setOrgType("");
    }

    return (
        <>
            <section className="page-hero page-hero--short">
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(9,20,35,.75), rgba(6,33,22,.55)), url(${contactImg})`,
                    }}
                />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <h1 className="h1">Partner With Key Recycling</h1>
                        <p className="hero-lead">
                            For utilities, program administrators, and implementers.
                        </p>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Program inquiry"
                title="Tell us about your program"
                subtitle="We typically respond within 1–2 business days."
            >
                <div style={{ marginBottom: 18 }}>
                    <HomeownerNotice />
                </div>

                <div className="grid-2">
                    <div className="panel">
                        <h3 className="h3">Program inquiry</h3>
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form-row">
                                <div className="field">
                                    <label>Full Name*</label>
                                    <input name="name" placeholder="Your name" required />
                                </div>
                                <div className="field">
                                    <label>Work Email*</label>
                                    <input name="email" type="email" placeholder="you@organization.com" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="field">
                                    <label>Organization*</label>
                                    <input name="organization" placeholder="Utility or company name" required />
                                </div>
                                <div className="field">
                                    <label>Your Role</label>
                                    <input name="role" placeholder="e.g. Program Manager" />
                                </div>
                            </div>

                            <div className="field">
                                <label>Organization Type*</label>
                                <select
                                    name="orgType"
                                    required
                                    value={orgType}
                                    onChange={(e) => setOrgType(e.target.value)}
                                >
                                    <option value="">Select…</option>
                                    <option>Utility</option>
                                    <option>Program implementer / administrator</option>
                                    <option>Retailer or bulk partner</option>
                                    <option>Other organization</option>
                                    <option>{HOMEOWNER}</option>
                                </select>
                            </div>

                            {isHomeowner ? (
                                <div className="recycle-note" role="alert">
                                    <p className="muted" style={{ margin: 0 }}>{HOMEOWNER_NOTICE_TEXT}</p>
                                </div>
                            ) : (
                                <>
                                    <div className="form-row">
                                        <div className="field">
                                            <label>States / Service Territory</label>
                                            <input name="territory" placeholder="e.g. Pennsylvania, Ohio" />
                                        </div>
                                        <div className="field">
                                            <label>Estimated Annual Volume</label>
                                            <select name="volume" defaultValue="">
                                                <option value="">Select…</option>
                                                <option>Under 1,000</option>
                                                <option>1,000–10,000</option>
                                                <option>10,000–50,000</option>
                                                <option>50,000+</option>
                                                <option>Not sure</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label>Message*</label>
                                        <textarea name="message" placeholder="Tell us about your program, timeline, and needs." required />
                                    </div>

                                    <div className="form-actions">
                                        <Button type="submit" variant="primary" size="md">Send Inquiry</Button>
                                    </div>
                                </>
                            )}

                            {msg ? <p className="muted" style={{ marginTop: 10 }}>{msg}</p> : null}
                        </form>
                    </div>

                    <div className="panel">
                        <h3 className="h3">Contact details</h3>
                        <p className="muted">
                            Inquiries: Utilities & program partners only
                        </p>

                        <div className="contact-box">
                            <div className="contact-row">
                                <strong>Email</strong>
                                <span>KeyRecyclingLLC@Gmail.com</span>
                            </div>
                            <div className="contact-row">
                                <strong>Phone</strong>
                                <span>+1 (484) 369-1217</span>
                            </div>
                            <div className="contact-row">
                                <strong>Address</strong>
                                <span>1800 Route-13, Bristol, PA 19007</span>
                            </div>
                            <div className="contact-row">
                                <strong>Service</strong>
                                <span>Utility appliance recycling programs</span>
                            </div>
                        </div>

                        {/* MAP */}
                        <div className="contact-map">
                            <iframe
                                title="Key Recycling LLC Location"
                                src="https://www.google.com/maps?q=1800%20Route-13%20Bristol%20PA%2019007&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div style={{ marginTop: 14 }}>
                            <Button
                                href="https://www.google.com/maps/dir/?api=1&destination=1800+Route-13+Bristol+PA+19007"
                                variant="ghost"
                                size="sm"
                            >
                                Get Directions
                            </Button>
                        </div>
                    </div>

                </div>
            </Section>
        </>
    );
}

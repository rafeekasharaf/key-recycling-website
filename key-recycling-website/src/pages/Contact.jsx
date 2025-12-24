import { useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import contactImg from "../assets/images/contact-hero.jpg";

export default function Contact() {
    const [msg, setMsg] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form.entries());

        const subject = encodeURIComponent("Pickup Request - Key Recycling LLC");
        const body = encodeURIComponent(
            `Pickup Request\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\nAppliance: ${data.appliance}\nPreferred Date: ${data.date}\nNotes: ${data.notes}\n`
        );

        window.location.href = `mailto:KeyRecyclingLLC@Gmail.com?subject=${subject}&body=${body}`;
        setMsg("Opening your email app with the pickup request…");
        e.currentTarget.reset();
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
                        <h1 className="h1">Contact & Pickup Requests</h1>
                        <p className="hero-lead">
                            Send a pickup request in under a minute. We’ll confirm scheduling and next steps as quickly as possible.
                        </p>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Request pickup"
                title="Fast, simple pickup request form"
                subtitle="This is a static site, so the form opens email by default. (We can switch to Netlify Forms/Formspree anytime.)"
            >
                <div className="grid-2">
                    <div className="panel">
                        <h3 className="h3">Pickup request</h3>
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form-row">
                                <div className="field">
                                    <label>Full Name</label>
                                    <input name="name" placeholder="Your name" required />
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input name="email" type="email" placeholder="you@email.com" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="field">
                                    <label>Phone</label>
                                    <input name="phone" placeholder="(xxx) xxx-xxxx" />
                                </div>
                                <div className="field">
                                    <label>Appliance</label>
                                    <select name="appliance" required>
                                        <option value="">Select…</option>
                                        <option>Refrigerator</option>
                                        <option>Freezer</option>
                                        <option>Commercial Unit</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label>Pickup Address</label>
                                <input name="address" placeholder="Street, City, State, Zip" required />
                            </div>

                            <div className="form-row">
                                <div className="field">
                                    <label>Preferred Date</label>
                                    <input name="date" type="date" />
                                </div>
                                <div className="field">
                                    <label>Notes</label>
                                    <input name="notes" placeholder="Stairs, gate code, access notes…" />
                                </div>
                            </div>

                            <div className="form-actions">
                                <Button type="submit" variant="primary" size="md">Send Request</Button>
                                <Button href="tel:+14843691217" variant="secondary" size="md">Call Now</Button>
                            </div>

                            {msg ? <p className="muted" style={{ marginTop: 10 }}>{msg}</p> : null}
                        </form>
                    </div>

                    <div className="panel">
                        <h3 className="h3">Contact details</h3>
                        <p className="">
                            Update these details before pushing live:
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
                                <span>38 Green Street, Souderton,Pa 18964</span>
                            </div>
                            <div className="contact-row">
                                <strong>Service</strong>
                                <span>Refrigerator & Freezer Recycling</span>
                            </div>
                        </div>


                    </div>
                </div>
            </Section>
        </>
    );
}

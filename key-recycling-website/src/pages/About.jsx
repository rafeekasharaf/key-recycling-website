import Section from "../components/Section";
import Button from "../components/Button";
import aboutImg from "../assets/images/about-hero.png";

export default function About() {
    return (
        <>
            <section className="page-hero page-hero--short">
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(9,20,35,.75), rgba(9,20,35,.55)), url(${aboutImg})`,
                    }}
                />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <h1 className="h1">About Key Recycling LLC</h1>
                        <p className="hero-lead">
                            We’re built around one goal: make refrigerator and freezer recycling simple for customers, while keeping the process
                            safe and responsibility-minded.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Request Pickup</Button>
                            <Button to="/services" variant="secondary" size="lg">Our Services</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Our story"
                title="Modern recycling service with a clear mission"
                subtitle="We focus on clarity, professionalism, and a smooth pickup experience. We dedicated to protecting the environment and preserving the earth's valuable resources through the art of responsible appliance recycling."
            >
                <p>
                    Started over twenty years ago in Souderton, PA, KeyRecyclingLLC has grown to become one of the largest recyclers of household appliances in the United States. Currently, we providing appliance recycling services to local and regional utilities in 5 states across the country and recycles over 400,000 units each year. The demand for responsible appliance recycling is projected to grow and we expect to double the number of units we recycle within the next ten years. Through a proven combination of proprietary and non-proprietary equipment and processes, we ensures that over 95% of the components and materials of the discarded appliance are either recycled for beneficial uses or eliminated in an environmentally responsible way. The remaining 5% can then be productively used as “fluff” to facilitate the decomposition of biodegradable landfill material.
                </p>
                <div className="grid-2">
                    <div className="panel">
                        <h3 className="h3">Mission</h3>
                        <p className="">
                            Our mission is to help communities recycle refrigerators and freezers responsibly. These units can contain refrigerants
                            and components that should be handled carefully. We aim to reduce environmental impact while making the customer
                            experience simple and fast.
                        </p>
                        <p className="">
                            We combine clear scheduling, professional handling, and a clean workflow so customers feel confident at every step.
                        </p>
                    </div>

                    <div className="panel">
                        <h3 className="h3">What we stand for</h3>
                        <ul className="list-check">
                            <li>Clear communication and quick responses</li>
                            <li>Professional pickup experience</li>
                            <li>Responsibility-minded recycling workflow</li>
                            <li>Trustworthy service for homes and businesses</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section
                tone="soft"
                eyebrow="How we work"
                title="A straightforward experience from request to recycling"
                subtitle="A process customers understand — and businesses can plan around."
            >
                <p>
                    We removes the old refrigerator or freezer from the consumer’s home and transports it to our local recycling plant. There, we totally deconstruct the unit and safely dispose of any toxins and ozone-depleting chlorofluoro-carbon gases, called CFC-11, found in the foam insulation. <br /> <br />
                    Through a proven combination of proprietary and non-proprietary equipment and processes,   we  ensures that over 95% of the components and materials of the discarded appliance are either recycled for beneficial uses or eliminated in an environmentally responsible way. The remaining 5% can then be productively used as “fluff” to facilitate the decomposition of biodegradable landfill material.
                </p>
                <div className="timeline-steps timeline-steps--stack">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div>
                            <div className="step-title">Request details</div>
                            <div className="">
                                We ask for appliance type, location, and access notes so pickup can be smooth and predictable.
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-num">2</div>
                        <div>
                            <div className="step-title">Confirm scheduling</div>
                            <div className="">
                                We coordinate a time window, confirm expectations, and prepare for any special handling needs.
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-num">3</div>
                        <div>
                            <div className="step-title">Recycle responsibly</div>
                            <div className="">
                                Units are processed with safety and environmental awareness in mind, with emphasis on responsible outcomes.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-row">
                    <Button to="/how-it-works" variant="secondary" size="md">See full process</Button>
                    <Button to="/contact" variant="primary" size="md">Request pickup</Button>
                </div>
            </Section>
        </>
    );
}

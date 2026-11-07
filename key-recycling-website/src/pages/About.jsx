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
                            For more than twenty years, Key Recycling has been a recycling partner to utility energy-efficiency programs —
                            collecting and responsibly recycling hundreds of thousands of refrigerators and freezers every year.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">Partner With Us</Button>
                            <Button to="/services" variant="secondary" size="lg">Our Services</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Section
                tone="plain"
                eyebrow="Our story"
                title="A long-standing partner with a clear mission"
                subtitle="We focus on reliability, compliance, and dependable program delivery. We are dedicated to protecting the environment and preserving the earth's valuable resources through the art of responsible appliance recycling."
            >
                <p>
                    Started over twenty years ago in Souderton, PA, KeyRecyclingLLC has grown to become one of the largest recyclers of household appliances in the United States. Currently, we provide appliance recycling services to local and regional utilities in 5 states across the country and recycle over 400,000 units each year. The demand for responsible appliance recycling is projected to grow and we expect to double the number of units we recycle within the next ten years. Through a proven combination of proprietary and non-proprietary equipment and processes, we ensure that over 95% of the components and materials of the discarded appliance are either recycled for beneficial uses or eliminated in an environmentally responsible way. The remaining 5% can then be productively used as “fluff” to facilitate the decomposition of biodegradable landfill material.
                </p>
                <div className="grid-2">
                    <div className="panel">
                        <h3 className="h3">Mission</h3>
                        <p className="">
                            Our mission is to help utilities deliver measurable energy savings and environmental outcomes through their appliance
                            recycling programs. Removing older, inefficient refrigerators and freezers from the grid reduces energy demand, and
                            recycling them responsibly keeps refrigerants and foam blowing agents out of the atmosphere.
                        </p>
                        <p className="">
                            We combine dependable collection, compliance-focused processing, and accurate reporting so program teams can count on
                            results at every step.
                        </p>
                    </div>

                    <div className="panel">
                        <h3 className="h3">What we stand for</h3>
                        <ul className="list-check">
                            <li>Clear, consistent communication with program partners</li>
                            <li>Professional collection for program participants</li>
                            <li>Compliance-focused recycling and recovery</li>
                            <li>A dependable partner for utility programs</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section
                tone="soft"
                eyebrow="How we work"
                title="From program enrollment to recovered materials"
                subtitle="A proven process that utility programs can plan around."
            >
                <p>
                    We remove the old refrigerator or freezer from the program participant’s home and transport it to our local recycling plant. There, we totally deconstruct the unit and safely dispose of any toxins and ozone-depleting chlorofluorocarbon gases, called CFC-11, found in the foam insulation. <br /> <br />
                    Through a proven combination of proprietary and non-proprietary equipment and processes, we ensure that over 95% of the components and materials of the discarded appliance are either recycled for beneficial uses or eliminated in an environmentally responsible way. The remaining 5% can then be productively used as “fluff” to facilitate the decomposition of biodegradable landfill material.
                </p>
                <div className="timeline-steps timeline-steps--stack">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div>
                            <div className="step-title">Customer enrolls with the utility</div>
                            <div className="">
                                The program enrolls the participant and sends us the order.
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-num">2</div>
                        <div>
                            <div className="step-title">We collect</div>
                            <div className="">
                                Our crews collect the unit and confirm it in program records.
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-num">3</div>
                        <div>
                            <div className="step-title">We recycle & report</div>
                            <div className="">
                                The unit is processed at our plant with materials recovery and reporting back to the program.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-row">
                    <Button to="/how-it-works" variant="secondary" size="md">See full process</Button>
                    <Button to="/contact" variant="primary" size="md">Partner With Us</Button>
                </div>
            </Section>
        </>
    );
}

import { useEffect, useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import whyImg from "../assets/images/home-hero.png";
import powerImg from "../assets/images/why-energy-power.png";
import actionImg from "../assets/images/why-energy-action.jpg";
import moneyImg from "../assets/images/why-save-money.jpg";
import planetImg1 from "../assets/images/why-protect-planet-1.jpg";
import planetImg2 from "../assets/images/why-protect-planet-2.jpg";

export default function WhyRecycle() {
    const [active, setActive] = useState("energy");

    useEffect(() => {
        const ids = ["energy", "money", "planet"];
        const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            {
                threshold: 0.25,
                rootMargin: "-20% 0px -55% 0px",
            }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const goTo = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;

        // offset for sticky header + sticky subnav
        const offset = window.innerWidth <= 980 ? 190 : 180;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <>
            {/* HERO */}
            <section className="page-hero page-hero--short">
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(6,33,22,.72), rgba(10,18,35,.55)), url(${whyImg})`,
                    }}
                />
                <div className="container page-hero-inner">
                    <div className="hero-copy">
                        <div className="hero-badges">
                            <span className="pill pill--glass">Save energy</span>
                            <span className="pill pill--glass">Save money</span>
                            <span className="pill pill--glass">Protect the planet</span>
                        </div>

                        <h1 className="h1">
                            Why Recycling Old Appliances Matters
                            <span className="accent"> (A Lot)</span>
                        </h1>

                        <p className="hero-lead">
                            Old refrigerators and freezers can be energy-hungry and may contain materials that should never end up in a landfill.
                            Responsible recycling helps lower energy use, reduce waste, and keep harmful components out of the environment.
                        </p>

                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="lg">
                                Request Pickup
                            </Button>

                        </div>
                    </div>
                </div>
            </section>

            {/* STICKY SUBNAV */}
            <div className="sticky-subnav">
                <div className="container sticky-subnav-inner">
                    <a
                        href="#energy"
                        onClick={goTo("energy")}
                        className={`subnav-link ${active === "energy" ? "is-active" : ""}`}
                    >
                        Save Energy
                    </a>

                    <a
                        href="#money"
                        onClick={goTo("money")}
                        className={`subnav-link ${active === "money" ? "is-active" : ""}`}
                    >
                        Save Money
                    </a>

                    <a
                        href="#planet"
                        onClick={goTo("planet")}
                        className={`subnav-link ${active === "planet" ? "is-active" : ""}`}
                    >
                        Protect the Planet
                    </a>

                    <div className="subnav-spacer" />

                    <Button to="/contact" variant="primary" size="sm">
                        Request Pickup
                    </Button>
                </div>
            </div>

            {/* OVERVIEW */}
            <Section
                tone="plain"
                eyebrow="Big picture"
                title="Three reasons customers recycle"
                subtitle="A simple, easy-to-understand breakdown of the benefits."
            >
                <div className="recycle-grid">
                    <div className="recycle-card">
                        <div className="recycle-top">
                            <span className="recycle-label">Reason #1</span>
                            <span className="recycle-tag">Energy</span>
                        </div>
                        <h3 className="h3">Old units waste electricity</h3>
                        <p className="">
                            Many older refrigerators and freezers consume significantly more electricity than newer efficient models.
                            That extra power adds up month after month.
                        </p>
                        <ul className="recycle-list">
                            <li>Older units often run longer and cycle more</li>
                            <li>Garages/basements can increase energy usage</li>
                            <li>Second fridges can quietly raise your bill</li>
                        </ul>
                    </div>

                    <div className="recycle-card">
                        <div className="recycle-top">
                            <span className="recycle-label">Reason #2</span>
                            <span className="recycle-tag">Money</span>
                        </div>
                        <h3 className="h3">Lower monthly costs</h3>
                        <p className="">
                            Recycling an inefficient appliance removes an “always-on” energy drain. In many areas, rebate programs can add
                            even more value.
                        </p>
                        <ul className="recycle-list">
                            <li>Cut electricity used by outdated appliances</li>
                            <li>Avoid the hassle of hauling or dumping</li>
                            <li>Possible rebates depending on your area</li>
                        </ul>
                    </div>

                    <div className="recycle-card">
                        <div className="recycle-top">
                            <span className="recycle-label">Reason #3</span>
                            <span className="recycle-tag">Environment</span>
                        </div>
                        <h3 className="h3">Keep harmful materials out of landfills</h3>
                        <p className="">
                            Older appliances may contain refrigerants, foams, and components that must be handled carefully. Responsible recycling
                            helps protect air, soil, and water.
                        </p>
                        <ul className="recycle-list">
                            <li>Helps prevent harmful releases</li>
                            <li>Supports material recovery and reuse</li>
                            <li>Reduces landfill waste</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SAVE ENERGY */}
            <Section
                tone="soft"
                eyebrow="Save energy"
                title="Responsible recycling saves energy"
                subtitle="Recycling an old refrigerator or freezer is one of the most effective steps a household can take to conserve energy."
            >
                <div id="energy" className="energy-block energy-block--premium">
                    <div className="energy-grid energy-grid--premium">
                        {/* LEFT: Visual + key stats */}
                        <div className="energy-visual">
                            <div className="energy-visual-card">
                                <div className="energy-visual-top">
                                    <div>
                                        <div className="energy-kicker">Energy impact</div>
                                        <h3 className="h3" style={{ margin: "6px 0 0" }}>
                                            Why old appliances raise your usage
                                        </h3>

                                    </div>
                                    <div className="energy-badge">
                                        <div className="energy-badge-big">4×</div>
                                        <div className="energy-badge-sub">Possible energy use vs newer models</div>
                                    </div>
                                </div>

                                <div className="energy-visual-row">
                                    <div className="energy-media energy-media--hero">
                                        <img
                                            src={powerImg}
                                            alt="Power gauge showing energy use"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="energy-media energy-media--text">
                                        <p className="" >
                                            Many homes keep a second fridge or freezer (often in a garage or basement). These extra units can consume a large share of
                                            household electricity, especially when they’re older or not kept full.
                                        </p>
                                    </div>


                                </div>

                                {/* <div className="energy-media energy-media--hero">
                                    <img src={powerImg} alt="Power gauge showing energy use" loading="lazy" />
                                </div> */}

                                <div className="energy-stats">
                                    <div className="energy-stat">
                                        <div className="energy-stat-num">20%+</div>
                                        <div className="">Potential share of household energy when running two fridges</div>
                                    </div>
                                    <div className="energy-stat">
                                        <div className="energy-stat-num">24/7</div>
                                        <div className="">Old units draw power all day, even when barely used</div>
                                    </div>
                                    <div className="energy-stat">
                                        <div className="energy-stat-num">Garage</div>
                                        <div className="">Hot spaces can increase energy consumption</div>
                                    </div>
                                </div>

                                <ul className="energy-bullets">
                                    <li>Two refrigerators can account for <strong>more than 20%</strong> of household energy use.</li>
                                    <li>Older refrigerators and freezers can use <strong>up to 4× more energy</strong> than newer ENERGY STAR® models.</li>
                                    <li>Second units used infrequently (or not kept full) can be less efficient.</li>
                                    <li>Recycling 1,000 older refrigerators or freezers will save enough energy to provide all the power needed for 999 households for one year.</li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT: Structured benefits + recommendations */}
                        <div className="energy-content">
                            <div className="energy-card energy-card--clean">
                                <div className="energy-content-head">
                                    <div>
                                        <h3 className="h3">How recycling helps (3 ways)</h3>
                                        <p className="" style={{ marginTop: 8 }}>
                                            Appliance recycling supports energy conservation by reducing the need for new raw material production, removing inefficient
                                            older units, and avoiding greenhouse gas emissions tied to energy generation and disposal.
                                        </p>
                                    </div>

                                    {/* Small supporting image (not dominating) */}
                                    <div className="energy-media energy-media--side">
                                        <img src={actionImg} alt="Take action" loading="lazy" />
                                    </div>
                                </div>

                                <div className="energy-points energy-points--grid">
                                    <div className="energy-point energy-point--premium">
                                        <div className="energy-point-num">1</div>
                                        <div>
                                            <div className="energy-point-title">Material recovery</div>
                                            <div className="">Recovered materials reduce the energy required to produce new raw materials.</div>
                                        </div>
                                    </div>

                                    <div className="energy-point energy-point--premium">
                                        <div className="energy-point-num">2</div>
                                        <div>
                                            <div className="energy-point-title">Replace inefficient units</div>
                                            <div className="">Newer energy-efficient models use significantly less electricity than old units.</div>
                                        </div>
                                    </div>

                                    <div className="energy-point energy-point--premium">
                                        <div className="energy-point-num">3</div>
                                        <div>
                                            <div className="energy-point-title">Avoid emissions</div>
                                            <div className="">Lower energy demand helps reduce emissions tied to electricity production.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="energy-tip energy-tip--premium">
                                    <div className="energy-tip-title">Smart recommendations</div>
                                    <ul className="energy-rec">
                                        <li><strong>Recycle secondary units</strong> and consider not replacing them (often the biggest energy win).</li>
                                        <li>If replacing a unit, choose an <strong>ENERGY STAR® certified</strong> appliance (often ~<strong>20% more efficient</strong> than non-certified).</li>
                                        <li>Recycle old appliances responsibly instead of disposing of them.</li>
                                    </ul>

                                    <div className="energy-actions">
                                        <Button to="/contact" variant="primary" size="sm">Request Pickup</Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>




            {/* SAVE MONEY */}
            {/* SAVE MONEY (Premium) */}
            <Section
                tone="plain"
                eyebrow="Save money"
                title="Responsible recycling saves money"
                subtitle="Old appliances can quietly increase your monthly costs. Recycling can reduce energy waste, avoid hauling fees, and in some areas even unlock rebates."
            >
                <div id="money" className="money-block money-block--premium">
                    <div className="money-grid money-grid--premium">
                        {/* LEFT: visual + key savings */}
                        <div className="money-visual">
                            <div className="money-card money-card--visual">
                                <div className="money-visual-head">
                                    <div>
                                        <div className="money-kicker">Savings snapshot</div>
                                        <h3 className="h3" style={{ marginTop: 8 }}>It pays to recycle old appliances</h3>
                                        {/* <p>
                                            Older refrigerators and freezers often cost more to operate than people expect.
                                            When you remove the "always-on" power draw, the savings can add up year after year.
                                        </p> */}
                                    </div>

                                    <div className="money-badge">
                                        <div className="money-badge-big">$100–$200</div>
                                        <div className="money-badge-sub">Possible annual savings when replacing 70s/80s fridges with ENERGY STAR® models</div>
                                    </div>
                                </div>

                                <div className="money-media-row">
                                    <div className="money-media">
                                        <img
                                            src={moneyImg}
                                            alt="Money savings visual"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="money-media-text">
                                        <p >
                                            Older refrigerators and freezers often cost more to operate than people expect.
                                            When you remove the <strong>always-on</strong> power draw, the savings can add up
                                            month after month — and year after year.
                                        </p>
                                    </div>
                                </div>


                                {/* <div className="money-media">
                                    <img src={moneyImg} alt="Money savings visual" loading="lazy" />
                                </div> */}

                                <div className="money-highlights">
                                    <div className="money-highlight">
                                        <div className="money-highlight-title">Lower electric bill</div>
                                        <div className="">Replace inefficient units and reduce monthly energy costs. </div>
                                    </div>
                                    <div className="money-highlight">
                                        <div className="money-highlight-title">Possible rebates</div>
                                        <div className="">Many utilities offer cash rebates for appliance recycling.</div>
                                    </div>
                                    <div className="money-highlight">
                                        <div className="money-highlight-title">Avoid hauling fees</div>
                                        <div className="">Pickup programs can save hauling and disposal charges. </div>
                                    </div>
                                </div>

                                <div className="money-mini-note">
                                    <span className="">
                                        Tip: If you’re replacing a unit, ENERGY STAR® provides a savings calculator to estimate your numbers.
                                    </span>
                                    <a
                                        className="money-link"
                                        href="https://www.energystar.gov/products/heating_cooling/guide/savings-calculator/standalone"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Open savings calculator
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: actions + “how to maximize savings” */}
                        <div className="money-content">
                            <div className="money-card money-card--clean">
                                <div className="money-content-head">
                                    <div>
                                        <h3 className="h3">How to maximize your savings</h3>
                                        <p className="" style={{ marginTop: 8 }}>
                                            The biggest savings usually come from removing older or secondary units that run all day,
                                            especially those stored in garages or basements. Here's the simplest approach.
                                        </p>
                                    </div>


                                </div>

                                <div className="money-steps">
                                    <div className="money-step">
                                        <div className="money-step-num">1</div>
                                        <div>
                                            <div className="money-step-title">Identify the biggest “bill drivers”</div>
                                            <div className="">Older fridges/freezers and extra units usually cost the most to operate.</div>
                                        </div>
                                    </div>

                                    <div className="money-step">
                                        <div className="money-step-num">2</div>
                                        <div>
                                            <div className="money-step-title">Recycle instead of storing “just in case”</div>
                                            <div className="">Unused appliances still draw power — removing them is an immediate win.</div>
                                        </div>
                                    </div>

                                    <div className="money-step">
                                        <div className="money-step-num">3</div>
                                        <div>
                                            <div className="money-step-title">Ask about rebates (if available)</div>
                                            <div className="">Some utility programs offer incentives for recycling older appliances. </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="money-tip">
                                    <div>
                                        <div className="money-tip-title">Make it effortless</div>
                                        <div className="">
                                            Our pickup request flow is designed to be simple: request pickup, confirm access details, and we handle the rest.
                                            Pickup helps you avoid hauling and disposal hassle.
                                        </div>
                                    </div>

                                    <div className="money-actions">
                                        <Button to="/contact" variant="primary" size="sm">Request Pickup</Button>
                                        <Button to="/services" variant="ghost" size="sm">View Services</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>


            {/* PROTECT THE PLANET */}
            {/* PROTECT THE PLANET (Premium) */}
            <Section
                tone="gradient"
                eyebrow="Protect the environment"
                title="Responsible recycling protects the planet"
                subtitle="Old refrigerators and freezers can contain hazardous components — proper recycling keeps them out of landfills."
            >
                <div id="planet" className="planet-block planet-block--premium">
                    <div className="planet-grid planet-grid--premium">

                        {/* LEFT: hazards + recovery */}
                        <div className="planet-card planet-card--visual">
                            <div className="planet-head">
                                <div>
                                    <div className="planet-kicker">Why it matters</div>
                                    <h3 className="h3" style={{ marginTop: 8 }}>Landfill disposal is risky</h3>
                                    {/* <p >
                                        Older appliances can include refrigerants and other materials that should be recovered and handled responsibly.
                                        Proper recycling helps safeguard the environment and reduces what enters the waste stream.
                                    </p> */}
                                </div>

                                <div className="planet-badge">
                                    <div className="planet-badge-big">~95%</div>
                                    <div className="planet-badge-sub">of each appliance can be recycled (materials recovery). </div>
                                </div>
                            </div>

                            <div className="planet-media-text-row">
                                <div className="planet-media">
                                    <img
                                        src={planetImg1}
                                        alt="Nature landscape representing environmental protection"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="planet-text-card">
                                    <p>
                                        Older appliances can include refrigerants and other materials that should be
                                        recovered and handled responsibly. Proper recycling helps safeguard the
                                        environment and reduces what enters the waste stream.
                                    </p>
                                </div>
                            </div>


                            <div className="planet-hazard-wrapper">
                                <div className="planet-hazard-card">
                                    <div className="planet-hazard-title">Refrigerants</div>
                                    <p>
                                        Older appliances may contain ozone-depleting refrigerants and powerful
                                        greenhouse gases that must be captured safely.
                                    </p>
                                </div>

                                <div className="planet-hazard-card">
                                    <div className="planet-hazard-title">Insulation foams</div>
                                    <p>
                                        Pre-1995 units often used blowing agents that contribute to climate damage
                                        if released improperly.
                                    </p>
                                </div>

                                <div className="planet-hazard-card">
                                    <div className="planet-hazard-title">PCBs</div>
                                    <p>
                                        Some older electrical components may contain PCBs, which require controlled
                                        handling and disposal.
                                    </p>
                                </div>

                                <div className="planet-hazard-card">
                                    <div className="planet-hazard-title">Mercury</div>
                                    <p>
                                        Certain thermostats and switches contain mercury, which can contaminate soil
                                        and water if dumped.
                                    </p>
                                </div>
                            </div>


                            <div className="planet-foot">
                                <div className="planet-foot-item">
                                    <div className="planet-foot-title">Cleaner communities</div>
                                    <div className="">Less landfill risk, safer recovery, and more material reuse. </div>
                                </div>
                                <div className="planet-foot-item">
                                    <div className="planet-foot-title">Less waste</div>
                                    <div className="">Recovered materials reduce waste stream impact. </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: carbon impact + action */}
                        <div className="planet-card planet-card--clean">
                            <div className="planet-content-head">
                                <div>
                                    <h3 className="h3">Reduce your carbon footprint in a big way</h3>
                                    <p className="" style={{ marginTop: 10 }}>
                                        The referenced material states that recycling one refrigerator or freezer can prevent <strong>up to 10 tons of CO₂/CO₂e</strong>
                                        from entering the atmosphere — described as equivalent to taking <strong>two cars</strong> off the road for one year.
                                    </p>
                                </div>


                            </div>

                            <div className="planet-impact">
                                <div className="planet-impact-big">Up to 10 tons</div>
                                <div className="planet-impact-sub">CO₂ / CO₂e avoided (per referenced claim). </div>
                            </div>

                            <div className="planet-media planet-media--wide">
                                <img src={planetImg2} alt="Roadway image representing reduced emissions" loading="lazy" />
                            </div>

                            <div className="planet-tip">
                                <div>
                                    <div className="planet-tip-title">Best next step</div>
                                    <div className="">
                                        If you have an older unit (especially a second fridge/freezer), recycling it responsibly is one of the simplest ways
                                        to reduce waste and improve your household efficiency.
                                    </div>
                                </div>

                                <div className="planet-actions">
                                    <Button to="/how-it-works" variant="secondary" size="sm">See our recycling process</Button>
                                    <Button to="/contact" variant="primary" size="sm">Request Pickup</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>


            {/* CTA */}
            <section className="cta-band">
                <div className="container cta-band-inner">
                    <div>
                        <h2 className="h2">Ready to recycle responsibly?</h2>
                        <p className="lead">
                            Send your pickup request and we’ll confirm details quickly — simple scheduling and professional handling.
                        </p>
                    </div>
                    <div className="cta-actions">
                        <Button to="/contact" variant="primary" size="lg">
                            Request Pickup
                        </Button>
                        <Button to="/services" variant="secondary" size="lg">
                            View Services
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

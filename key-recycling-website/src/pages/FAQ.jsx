import Section from "../components/Section";
import Button from "../components/Button";
import { HOMEOWNER_NOTICE_TEXT } from "../components/HomeownerNotice";

function FAQItem({ q, a }) {
    return (
        <div className="faq-item">
            <div className="faq-q">{q}</div>
            <div className="muted">{a}</div>
        </div>
    );
}

export default function FAQ() {
    const items = [
        {
            q: "What appliances do you process?",
            a: "We specialize in refrigerators and freezers collected through utility appliance recycling programs, and also process units from retail and bulk partners.",
        },
        {
            q: "What states and territories do you serve?",
            a: "We currently support utility programs in 5 states. Contact us with your service territory and we’ll discuss coverage.",
        },
        {
            q: "How is collection scheduled?",
            a: "Scheduling is handled through the program. Participants enroll with their utility, the program sends us the order, and our crews collect the unit.",
        },
        {
            q: "What reporting do you provide?",
            a: "We provide unit-level records from collection through processing to support program verification and savings reporting.",
        },
        {
            q: "Can I schedule a pickup directly as a homeowner?",
            a: HOMEOWNER_NOTICE_TEXT,
        },
    ];

    return (
        <>
            <Section
                tone="plain"
                eyebrow="FAQ"
                title="Common questions"
                subtitle="Answers for utilities, program administrators, and implementers."
            >
                <div className="panel">
                    {items.map((x) => (
                        <FAQItem key={x.q} q={x.q} a={x.a} />
                    ))}

                    <div className="center-row" style={{ marginTop: 16 }}>
                        <Button to="/contact" variant="primary" size="md">Partner With Us</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}

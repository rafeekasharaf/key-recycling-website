import Section from "../components/Section";
import Button from "../components/Button";

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
            q: "What appliances do you accept?",
            a: "We focus on refrigerators and freezers, including many commercial units. Submit a request with details and we’ll confirm.",
        },
        {
            q: "Do you offer pickup?",
            a: "Yes. Pickup availability depends on your location and scheduling. Use the request form for the fastest response.",
        },
        {
            q: "Why is refrigerator recycling important?",
            a: "Refrigerators may contain refrigerants and materials that should be handled responsibly. Proper recycling helps reduce environmental impact and recovers reusable materials.",
        },
        {
            q: "How quickly do you respond?",
            a: "Typically within 24–48 hours. For urgent requests, call directly.",
        },
    ];

    return (
        <>
            <Section
                tone="plain"
                eyebrow="FAQ"
                title="Common questions"
                subtitle="Clear answers help customers feel confident before they request pickup."
            >
                <div className="panel">
                    {items.map((x) => (
                        <FAQItem key={x.q} q={x.q} a={x.a} />
                    ))}

                    <div className="center-row" style={{ marginTop: 16 }}>
                        <Button to="/contact" variant="primary" size="md">Request Pickup</Button>
                        <Button to="/services" variant="secondary" size="md">Services</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}

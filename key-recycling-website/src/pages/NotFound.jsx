import Button from "../components/Button";
import Section from "../components/Section";

export default function NotFound() {
    return (
        <Section tone="plain" eyebrow="404" title="Page not found" subtitle="The page you’re looking for doesn’t exist.">
            <div className="center-row">
                <Button to="/" variant="primary" size="md">Back to Home</Button>
                <Button to="/contact" variant="secondary" size="md">Contact</Button>
            </div>
        </Section>
    );
}

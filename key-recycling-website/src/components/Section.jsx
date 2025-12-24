import Container from "./Container";
import useReveal from "./useReveal";

export default function Section({
    eyebrow,
    title,
    subtitle,
    children,
    tone = "plain", // plain | soft | gradient
    id,
}) {
    const ref = useReveal();

    return (
        <section id={id} className={`section section--${tone}`}>
            <div ref={ref} className="reveal">
                <Container>
                    {(eyebrow || title || subtitle) && (
                        <div className="section-head">
                            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
                            {title ? <h2 className="h2">{title}</h2> : null}
                            {subtitle ? <p className="lead">{subtitle}</p> : null}
                        </div>
                    )}
                    {children}
                </Container>
            </div>
        </section>
    );
}

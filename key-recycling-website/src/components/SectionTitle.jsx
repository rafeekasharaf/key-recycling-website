export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
    return (
        <div className={`section-title align-${align}`}>
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            <h2>{title}</h2>
            {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
    );
}

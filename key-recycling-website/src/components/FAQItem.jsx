import { useState } from "react";

export default function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`faq-item ${open ? "open" : ""}`}>
            <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span>{q}</span>
                <span className="faq-icon" aria-hidden="true">{open ? "–" : "+"}</span>
            </button>
            <div className="faq-a" style={{ display: open ? "block" : "none" }}>
                <p className="muted">{a}</p>
            </div>
        </div>
    );
}

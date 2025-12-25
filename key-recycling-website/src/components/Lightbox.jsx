import { useEffect, useMemo, useRef } from "react";

export default function Lightbox({
    open,
    images = [],
    index = 0,
    onClose,
    onPrev,
    onNext,
    title = "Image preview",
}) {
    const dialogRef = useRef(null);

    // swipe state (refs so it doesn't re-render)
    const startX = useRef(0);
    const startY = useRef(0);
    const dragging = useRef(false);

    const current = useMemo(() => images[index] || null, [images, index]);

    useEffect(() => {
        if (!open) return;

        // lock background scroll
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
            if (e.key === "ArrowLeft") onPrev?.();
            if (e.key === "ArrowRight") onNext?.();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onClose, onPrev, onNext]);

    const onPointerDown = (e) => {
        // only left click OR touch/pen
        if (e.pointerType === "mouse" && e.button !== 0) return;
        dragging.current = true;
        startX.current = e.clientX;
        startY.current = e.clientY;

        // capture pointer so move/up events still fire
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
            // ignore (older browsers)
        }
    };

    const onPointerUp = (e) => {
        if (!dragging.current) return;
        dragging.current = false;

        const dx = e.clientX - startX.current;
        const dy = e.clientY - startY.current;

        // If the gesture is mostly horizontal, treat as swipe
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);

        // thresholds tuned for mobile + desktop
        const SWIPE_MIN = 50;
        const SWIPE_DOMINANCE = 1.2;

        if (absX >= SWIPE_MIN && absX > absY * SWIPE_DOMINANCE) {
            if (dx < 0) onNext?.(); // swipe left => next
            else onPrev?.();        // swipe right => prev
        }
    };

    if (!open || !current) return null;

    return (
        <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onMouseDown={(e) => {
                // close when clicking backdrop
                if (e.target === e.currentTarget) onClose?.();
            }}
        >
            <button className="lightbox-close" onClick={onClose} aria-label="Close">
                ✕
            </button>

            {/* Pointer handlers attached here so swipe works over image area */}
            <div
                className="lightbox-inner"
                ref={dialogRef}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
            >
                <button
                    className="lightbox-nav lightbox-nav--left"
                    onClick={onPrev}
                    aria-label="Previous image"
                    type="button"
                >
                    ‹
                </button>

                <figure className="lightbox-figure">
                    <img
                        src={current.src}
                        alt={current.alt || "Gallery image"}
                        className="lightbox-img"
                        draggable="false"
                    />
                    {(current.caption || current.alt) && (
                        <figcaption className="lightbox-caption">
                            {current.caption || current.alt}
                        </figcaption>
                    )}
                </figure>

                <button
                    className="lightbox-nav lightbox-nav--right"
                    onClick={onNext}
                    aria-label="Next image"
                    type="button"
                >
                    ›
                </button>
            </div>

            <div className="lightbox-count" aria-hidden="true">
                {index + 1} / {images.length}
            </div>
        </div>
    );
}

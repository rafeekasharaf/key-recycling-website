import { useEffect, useMemo, useRef, useState } from "react";

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

    const wrapRef = useRef(null);
    const canvasRef = useRef(null);
    const [wrapSize, setWrapSize] = useState({ w: 0, h: 0 });

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

    // Measure available space for canvas so it scales nicely
    useEffect(() => {
        if (!open) return;
        const el = wrapRef.current;
        if (!el) return;

        const update = () => {
            const rect = el.getBoundingClientRect();
            setWrapSize({
                w: Math.max(1, Math.floor(rect.width)),
                h: Math.max(1, Math.floor(rect.height)),
            });
        };

        update();

        // ResizeObserver for responsive sizing
        let ro;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(update);
            ro.observe(el);
        } else {
            window.addEventListener("resize", update);
        }

        return () => {
            if (ro) ro.disconnect();
            else window.removeEventListener("resize", update);
        };
    }, [open]);

    // Draw image + watermark onto canvas (no <img src> in DOM)
    useEffect(() => {
        if (!open || !current?.src) return;

        const canvas = canvasRef.current;
        const wrap = wrapRef.current;
        if (!canvas || !wrap) return;

        let cancelled = false;

        const drawToCanvas = async () => {
            try {
                // Fetch as blob so we don't keep a direct <img src="..."> node in the DOM
                const res = await fetch(current.src, { cache: "force-cache" });
                const blob = await res.blob();
                const objUrl = URL.createObjectURL(blob);

                const img = new Image();
                img.decoding = "async";

                img.onload = () => {
                    if (cancelled) {
                        URL.revokeObjectURL(objUrl);
                        return;
                    }

                    const dpr = Math.min(2, window.devicePixelRatio || 1);

                    // canvas pixel size
                    const W = Math.max(1, Math.floor((wrapSize.w || wrap.clientWidth || 1) * dpr));
                    const H = Math.max(1, Math.floor((wrapSize.h || wrap.clientHeight || 1) * dpr));

                    canvas.width = W;
                    canvas.height = H;

                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        URL.revokeObjectURL(objUrl);
                        return;
                    }

                    ctx.clearRect(0, 0, W, H);

                    // Fit image "contain" inside the canvas
                    const iw = img.naturalWidth || 1;
                    const ih = img.naturalHeight || 1;
                    const scale = Math.min(W / iw, H / ih);

                    const dw = Math.floor(iw * scale);
                    const dh = Math.floor(ih * scale);
                    const dx = Math.floor((W - dw) / 2);
                    const dy = Math.floor((H - dh) / 2);

                    ctx.drawImage(img, dx, dy, dw, dh);

                    // ===== Watermark: bottom-right =====
                    const wmText = "Key Recycling LLC";
                    ctx.save();
                    ctx.globalAlpha = 0.72;
                    ctx.fillStyle = "#fff";
                    ctx.shadowColor = "rgba(0,0,0,0.65)";
                    ctx.shadowBlur = 10 * dpr;
                    ctx.shadowOffsetY = 2 * dpr;

                    const fontSize = Math.max(12, Math.round(14 * dpr));
                    ctx.font = `600 ${fontSize}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
                    ctx.textAlign = "right";
                    ctx.textBaseline = "bottom";
                    ctx.fillText(wmText, W - 18 * dpr, H - 14 * dpr);
                    ctx.restore();

                    URL.revokeObjectURL(objUrl);
                };

                img.onerror = () => {
                    URL.revokeObjectURL(objUrl);
                };

                img.src = objUrl;
            } catch {
                // ignore
            }
        };

        drawToCanvas();
        return () => {
            cancelled = true;
        };
    }, [open, current?.src, wrapSize.w, wrapSize.h]);

    const onPointerDown = (e) => {
        // Ignore swipes when interacting with controls
        if (e.target?.closest?.("button")) return;

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
                    <div className="lightbox-canvas-wrap" ref={wrapRef}>
                        <canvas
                            ref={canvasRef}
                            className="lightbox-img"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>

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
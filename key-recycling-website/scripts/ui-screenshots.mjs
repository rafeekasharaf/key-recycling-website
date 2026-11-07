// Responsive UI QA screenshots.
// Usage: node scripts/ui-screenshots.mjs <before|after> [baseUrl]
// Requires the dev server running (npm run dev).
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const label = process.argv[2] || "before";
const BASE = process.argv[3] || "http://localhost:5173";
const OUT = path.join("screenshots", label);

const WIDTHS = [360, 390, 768, 1024, 1280, 1440];
const ROUTES = [
    ["home", "/"],
    ["about", "/about"],
    ["services", "/services"],
    ["how-it-works", "/how-it-works"],
    ["why-recycle", "/why-recycle"],
    ["contact", "/contact"],
    ["faq", "/faq"],
    ["404", "/this-page-does-not-exist"],
];

async function settle(page) {
    // Reveal scroll-animated sections and trigger lazy images.
    await page.evaluate(async () => {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-revealed"));
        const step = window.innerHeight;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.waitForTimeout(400);
}

async function overflow(page) {
    return page.evaluate(() => {
        const de = document.documentElement;
        const cw = de.clientWidth;
        const offenders = [];
        if (de.scrollWidth > cw) {
            document.querySelectorAll("body *").forEach((el) => {
                const r = el.getBoundingClientRect();
                if (r.width && r.right > cw + 1) {
                    const id = el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : "");
                    offenders.push(`${id} (right=${Math.round(r.right)})`);
                }
            });
        }
        return { scrollWidth: de.scrollWidth, clientWidth: cw, overflow: de.scrollWidth > cw, offenders: offenders.slice(0, 8) };
    });
}

const browser = await chromium.launch();
await mkdir(OUT, { recursive: true });
const report = {};

for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const [name, route] of ROUTES) {
        await page.goto(BASE + route, { waitUntil: "networkidle" });
        await settle(page);
        report[`${name}-${w}`] = await overflow(page);
        await page.screenshot({ path: path.join(OUT, `${name}-${w}.png`), fullPage: true });
    }
    await ctx.close();
}

// States
async function withPage(w, fn, h = 900) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    try { await fn(page); } finally { await ctx.close(); }
}

await withPage(390, async (page) => {
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.click(".burger");
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT, "state-nav-open-390.png") });
    await page.click(".nav-links a[href='/about']");
    await page.waitForTimeout(500);
    report["state-nav-closes-on-click-390"] = await page.evaluate(() => ({
        url: location.pathname,
        navOpen: !!document.querySelector(".nav--open"),
    }));
});

for (const w of [390, 1280]) {
    await withPage(w, async (page) => {
        await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
        await settle(page);
        await page.selectOption("select[name=orgType]", { index: 5 });
        await page.waitForTimeout(300);
        const form = page.locator("form.form");
        await form.scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(OUT, `state-contact-homeowner-${w}.png`), fullPage: true });
    });
}

for (const w of [390, 1280]) {
    await withPage(w, async (page) => {
        await page.goto(BASE + "/why-recycle", { waitUntil: "networkidle" });
        await settle(page);
        await page.locator(".hero-actions a[href='#find-program']").click();
        await page.waitForTimeout(1500);
        report[`state-find-program-${w}`] = await page.evaluate(() => {
            const t = document.getElementById("find-program").getBoundingClientRect().top;
            const header = document.querySelector(".header")?.getBoundingClientRect().bottom ?? 0;
            const sub = document.querySelector(".sticky-subnav")?.getBoundingClientRect().bottom ?? 0;
            return { targetTop: Math.round(t), headerBottom: Math.round(header), subnavBottom: Math.round(sub), hidden: t < Math.max(header, sub) - 1 };
        });
        await page.screenshot({ path: path.join(OUT, `state-find-program-${w}.png`) });
    });
}

for (const w of [390, 1280]) {
    await withPage(w, async (page) => {
        await page.goto(BASE + "/", { waitUntil: "networkidle" });
        await settle(page);
        await page.locator(".plant-item").first().click();
        await page.waitForTimeout(600);
        await page.screenshot({ path: path.join(OUT, `state-lightbox-${w}.png`) });
    });
}

await browser.close();
await writeFile(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));

const bad = Object.entries(report).filter(([, v]) => v.overflow || v.hidden || v.navOpen);
console.log(`Saved to ${OUT}. Flagged: ${bad.length}`);
for (const [k, v] of bad) console.log(k, JSON.stringify(v));

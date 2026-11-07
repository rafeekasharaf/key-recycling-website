export const HOMEOWNER_NOTICE_TEXT =
    "Have a refrigerator or freezer to recycle at home? Key Recycling works through utility energy-efficiency programs and does not schedule pickups directly with homeowners. Contact your electric utility — many offer free pickup and a cash rebate through their appliance recycling program.";

export default function HomeownerNotice({ compact = false, className = "" }) {
    if (compact) {
        return (
            <p className={`muted homeowner-notice homeowner-notice--compact ${className}`.trim()} style={{ margin: 0, fontSize: 13 }}>
                <strong>Homeowners:</strong> {HOMEOWNER_NOTICE_TEXT}
            </p>
        );
    }

    return (
        <div className={`recycle-note homeowner-notice ${className}`.trim()} role="note">
            <div>
                <div className="h3">For homeowners</div>
                <p className="muted mt-8" style={{ marginBottom: 0 }}>{HOMEOWNER_NOTICE_TEXT}</p>
            </div>
        </div>
    );
}

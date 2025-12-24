export default function IconCard({ icon, title, text }) {
    return (
        <div className="icon-card">
            <div className="icon">{icon}</div>
            <div>
                <h3 className="h3">{title}</h3>
                <p className="">{text}</p>
            </div>
        </div>
    );
}

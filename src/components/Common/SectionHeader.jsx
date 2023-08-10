import "./Common.css";

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h3 className="section-title">{title}</h3>
      <h1 className="section-subtitle">{subtitle}</h1>
    </div>
  );
}

export default SectionHeader;

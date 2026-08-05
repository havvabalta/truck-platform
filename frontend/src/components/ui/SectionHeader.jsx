export default function SectionHeader({ title, subtitle }) {
  if (!title) return null;

  return (
    <div className="section-title">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

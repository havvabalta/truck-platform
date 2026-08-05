import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Features({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="features" className="features">
      <div className="container">
        <SectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="features-grid">
          {data.items.map((item, index) => (
            <Card key={index} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

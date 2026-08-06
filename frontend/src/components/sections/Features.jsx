import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Features({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="features" className="features">
      <div className="container">
        <Reveal>
          <SectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

        <div className="features-grid">
          {data.items.map((item, index) => (
            <Reveal key={index} delay={(index % 4) + 1}>
              <Card className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

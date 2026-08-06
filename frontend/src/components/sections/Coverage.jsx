import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Coverage({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="coverage" className="coverage">
      <div className="container">
        <Reveal>
          <SectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

        <div className="coverage-grid adaptive-grid" data-layout={data.items.length >= 6 ? "three-columns" : "auto"}>
          {data.items.map((item, index) => (
            <Reveal key={index} delay={(index % 4) + 1}>
              <Card className="coverage-card">
                📍 {item.city}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

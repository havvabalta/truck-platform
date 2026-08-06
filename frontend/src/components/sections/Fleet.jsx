import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Fleet({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="fleet" className="fleet">
      <div className="container">
        <Reveal>
          <SectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

        <div className="fleet-grid">
          {data.items.map((item, index) => (
            <Reveal key={index} delay={(index % 3) + 1}>
              <Card className="fleet-card">
                <div className="fleet-icon">🚛</div>
                <h3>{item.title}</h3>
                <div className="fleet-details">
                  <p>
                    <strong>Hacim:</strong> {item.capacity}
                  </p>
                  <p>
 
                    <strong>Kapasite:</strong> {item.payload}
                  </p>
                </div>
                {item.description && <p className="fleet-desc">{item.description}</p>}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

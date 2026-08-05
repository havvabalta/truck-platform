import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Fleet({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="fleet" className="fleet">
      <div className="container">
        <SectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="fleet-grid">
          {data.items.map((item, index) => (
            <Card key={index} className="fleet-card">
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
          ))}
        </div>
      </div>
    </section>
  );
}

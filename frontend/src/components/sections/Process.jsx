import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Process({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="process" className="process">
      <div className="container">
        <SectionHeader 
          badge={data.badge} 
          title={data.title} 
          subtitle={data.subtitle} 
        />

<div className="process-grid">
          {data.items.map((item, index) => (
            <Card key={index} className="process-card">
              <span className="process-step-badge">
                {item.step || `0${index + 1}`}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
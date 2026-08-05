import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Coverage({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="coverage" className="coverage">
      <div className="container">
        <SectionHeader 
          badge={data.badge} 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        <div className="coverage-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {data.items.map((item, index) => (
            <Card key={index} className="coverage-card" style={{ textAlign: 'center', fontWeight: 600 }}>
              📍 {item.city}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
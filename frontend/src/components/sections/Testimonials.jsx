import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Testimonials({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <SectionHeader 
          badge={data.badge} 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        <div className="testimonials-grid">
          {data.items.map((item, index) => (
            <Card key={index} className="testimonial-card">
              <div style={{ marginBottom: '1rem' }}>
                {"⭐".repeat(item.rating || 5)}
              </div>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "{item.comment}"
              </p>
              <div>
                <strong style={{ color: 'var(--secondary-color)', display: 'block' }}>{item.name}</strong>
                {item.company && <small style={{ color: 'var(--text-muted)' }}>{item.company}</small>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Testimonials({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <Reveal>
          <SectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

<div className="testimonials-grid">
          {data.items.map((item, index) => (
            <Reveal key={index} delay={index + 1}>
              <Card className="testimonial-card">
                <div className="testimonial-stars">
                  {"⭐".repeat(item.rating || 5)}
                </div>
                <p className="testimonial-quote">
                  "{item.comment}"
                </p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  {item.company && <small>{item.company}</small>}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
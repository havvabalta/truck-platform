import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function FAQ({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="faq" className="faq">
      <div className="container">
        <SectionHeader 
          badge={data.badge} 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        <div className="faq-list">
          {data.items.map((item, index) => (
            <Card key={index} className="faq-card-wrapper">
              <details className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
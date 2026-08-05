import Button from "../ui/Button";
import Icon from "../ui/Icons";

export default function CTA({ data }) {
  if (!data) return null;

  return (
    <section className="cta">
      <div className="container">
        <div className="section-title">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
          <div style={{ marginTop: '2rem' }}>
            <Button href="#contact" variant="primary" icon={<Icon name="quote" />}>
              {data.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

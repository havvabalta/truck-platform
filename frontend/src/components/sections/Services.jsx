import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Services({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <SectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

<div className="services-grid">
          {data.items.map((item, index) => (
            <Reveal key={index} delay={(index % 3) + 1}>
              <Card
                className={`service-card ${item.image ? "has-image" : ""}`}
              >
                {item.image ? (
                  <div className="service-card-inner">
                    <img
                      className="service-card-bg"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="service-card-overlay" />
                    <div className="service-card-content">

                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="service-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

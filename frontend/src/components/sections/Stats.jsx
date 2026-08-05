import Card from "../ui/Card";

export default function Stats({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid-custom">
          {data.items.map((item, index) => (
            <Card key={index} className="stat-card-custom">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

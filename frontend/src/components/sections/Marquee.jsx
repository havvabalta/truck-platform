/*
 * Varsayılan kullanım: ["Hizmet", "Teslimat", ...]
 * Siteye özel kullanım: { items: [...], variant: "city-delivery", speed: "30s" }
 */
export default function Marquee({ data }) {
  const items = Array.isArray(data) ? data : data?.items;
  if (!items?.length) return null;

  const separator = (Array.isArray(data) ? null : data?.separator) || "•";
  const speed = (Array.isArray(data) ? null : data?.speed) || "22s";
  const variant = Array.isArray(data) ? "default" : data?.variant || "default";

  return (
    <div
      className="marquee-bar"
      data-marquee-variant={variant}
      aria-hidden="true"
    >
      <div className="marquee-track" style={{ animationDuration: speed }}>
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {item}
            <i className="marquee-sep">{separator}</i>
          </span>
        ))}
      </div>
    </div>
  );
}

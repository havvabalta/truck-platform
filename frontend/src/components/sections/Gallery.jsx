import { useEffect, useRef, useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import placeholder from "../../assets/images/hero.jpg";

export default function Gallery({ data }) {
  const images = (data?.gallery || []).map((img) => ({
    src: img.src || img || placeholder,
    title: img.title || "",
  }));
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const total = images.length;

  useEffect(() => {
    if (total < 2) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timerRef.current);
  }, [total]);

  if (total < 1) return null;

  const goTo = (i) => setIndex(((i % total) + total) % total);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
<SectionHeader
          badge={data.badge || "Galeri"}
       // title={data.title || "Çalışmalarımızdan Görseller"}
          subtitle={data.subtitle || "Hizmetlerimizden kareler."}
        />

        <div className="gallery-slider">
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div className="gallery-slide" key={i}>
                <img src={img.src} alt={img.title || `Görsel ${i + 1}`} />
                {img.title && (
                  <div className="gallery-caption">{img.title}</div>
                )}
              </div>
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                className="gallery-nav gallery-prev"
                onClick={() => goTo(index - 1)}
                aria-label="Önceki görsel"
              >
                ‹
              </button>
              <button
                className="gallery-nav gallery-next"
                onClick={() => goTo(index + 1)}
                aria-label="Sonraki görsel"
              >
                ›
              </button>

              <div className="gallery-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`gallery-dot ${i === index ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Görsel ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

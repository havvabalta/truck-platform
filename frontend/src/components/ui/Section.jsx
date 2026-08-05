import Container from "./Container";

export default function Section({
  id,
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`section ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}
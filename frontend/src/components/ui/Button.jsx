export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  className = "",
  type = "button",
}) {
  const variantClass =
    {
      primary: "primary-btn",
      secondary: "secondary-btn",
      whatsapp: "whatsapp-btn",
    }[variant] || "primary-btn";

  const classes = ["btn", variantClass, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}


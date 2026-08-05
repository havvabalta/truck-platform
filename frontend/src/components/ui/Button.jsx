export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  icon = null,
  type = "button",
}) {
  let baseClass = "primary-btn";
  if (variant === "secondary") baseClass = "secondary-btn";
  if (variant === "whatsapp") baseClass = "whatsapp-btn";

  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClass} ${className}`.trim()}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`.trim()}
    >
      {content}
    </button>
  );
}

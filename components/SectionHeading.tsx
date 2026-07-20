import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <p
        className={`text-[0.68rem] font-medium uppercase tracking-[0.3em] ${
          tone === "light" ? "text-ivory/60" : "text-wood"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`kr mt-5 text-3xl font-light leading-[1.32] tracking-[-0.02em] sm:text-[2.6rem] ${
          tone === "light" ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`kr mt-6 max-w-xl text-[0.97rem] leading-relaxed sm:text-base ${
            centered ? "mx-auto" : ""
          } ${tone === "light" ? "text-ivory/75" : "text-ink-soft"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

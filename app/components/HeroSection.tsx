import CTAButton from "./CTAButton";

interface HeroSectionProps {
  imageUrl: string;
  headline: string;
  subhead: string;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary";
}

export default function HeroSection({
  imageUrl,
  headline,
  subhead,
  ctaText,
  ctaHref,
  ctaVariant = "primary",
}: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
          {subhead}
        </p>
        {ctaText && ctaHref && (
          <CTAButton href={ctaHref} variant={ctaVariant} size="lg">
            {ctaText}
          </CTAButton>
        )}
      </div>
    </section>
  );
}

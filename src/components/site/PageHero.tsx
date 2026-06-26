import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-white">
        <nav className="text-xs uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{eyebrow}</span>
        </nav>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl animate-fade-in-up">
          {title}
        </h1>
        <p
          className="mt-5 text-lg text-white/85 max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}

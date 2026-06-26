const clients = [
  "Apex Auto",
  "Northstar Logistics",
  "Bharat Steelworks",
  "Vega Pharma",
  "Crescent Electronics",
  "Meridian Mills",
  "Atlas Engineering",
  "Zenith Foods",
];

export function ClientsMarquee() {
  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold reveal">
          Trusted by 100+ industrial clients
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {clients.map((c) => (
            <div
              key={c}
              className="reveal text-center font-display font-bold text-muted-foreground text-sm tracking-wide hover:text-foreground transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

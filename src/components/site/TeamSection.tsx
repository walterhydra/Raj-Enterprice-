const team = [
  {
    name: "Mr. Raj Kumar",
    role: "Founder & Managing Director",
    bio: "Founded Raj Enterprise in 2008 with a mission to bring discipline and reliability to industrial manpower.",
    initials: "RK",
  },
  {
    name: "Mr. Suresh Verma",
    role: "Head of Operations",
    bio: "Leads workforce deployment and on-site supervision across 100+ industrial clients.",
    initials: "SV",
  },
  {
    name: "Mr. Anil Joshi",
    role: "Security Operations Lead",
    bio: "Oversees training, posting and rotation of trained security personnel across sites.",
    initials: "AJ",
  },
  {
    name: "Ms. Priya Nair",
    role: "Compliance & HR",
    bio: "Manages statutory compliance, payroll and worker welfare end-to-end.",
    initials: "PN",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Leadership
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold leading-tight">
            People who run the people business.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="reveal rounded-3xl bg-card border border-border p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-navy text-white font-display font-extrabold text-xl shadow-elegant">
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{m.name}</h3>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mt-1">
                {m.role}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

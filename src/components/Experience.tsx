const EXPERIENCES = [
  {
    role: "Chief Operating Officer",
    company: "PT Pilar Agrosinergi Nusantara",
    period: "May 2025 – Present",
    description:
      "Directing comprehensive import strategies and overseeing broad, day-to-day company operations. Championing high-level management approaches to optimize internal workflows, manage resources efficiently, and ensure cross-functional alignment across the organization.",
    highlights: [
      "Directed comprehensive import strategies and cross-functional alignment",
      "Optimized internal workflows and resource management at the organizational level",
      "Championed high-level management approaches across all company operations",
    ],
  },
  {
    role: "Co-Founder",
    company: "PT Citra Arnawa Jaya (CARYA)",
    period: "Jul 2024 – Present",
    description:
      "Established and scaled core export operations and administrative frameworks in Bandung. Built agile business structures designed to streamline international trade logistics and adapt to modern operational demands.",
    highlights: [
      "Established and scaled core export operations and administrative frameworks",
      "Built agile business structures to streamline international trade logistics",
      "Designed operational systems adaptable to modern trade demands",
    ],
  },
  {
    role: "Trading & Business Ventures",
    company: "Various Commercial Operations",
    period: "Ongoing",
    description:
      "Involved in various trading business ventures, bridging the gap between technical analytical thinking and real-world commercial operations. Applied data-driven decision-making to optimize performance across multiple business domains.",
    highlights: [
      "Applied quantitative analysis to business decision-making",
      "Bridged technical expertise with commercial strategy",
      "Managed operations across multiple trading ventures",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      {/* Subtle separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            02. Experience
          </span>
          <span className="flex-1 h-px bg-zinc-800" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-14 leading-snug">
          Professional{" "}
          <span className="text-emerald-400">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 hidden sm:block ml-[7px]" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="sm:pl-10 relative">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-500 bg-zinc-950 hidden sm:block" />

                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-0.5">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    number: "01",
    title: "AlphaFold 2 Ligand Discovery",
    description:
      "A deep learning project utilizing AlphaFold 2 to identify and determine new ligands for post-chemotherapy applications. Combines state-of-the-art protein structure prediction with computational drug discovery.",
    tags: ["AlphaFold 2", "Deep Learning", "Bioinformatics", "Python"],
    color: "from-emerald-500/20 to-cyan-500/10",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    number: "02",
    title: "Health Insurance Predictive Model",
    description:
      "An advanced data science project focused on predicting health insurance claim frequency and severity through rigorous feature engineering and ensemble modeling techniques.",
    tags: ["Python", "Scikit-learn", "Feature Engineering", "XGBoost"],
    color: "from-blue-500/20 to-indigo-500/10",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    number: "03",
    title: "Tuberculosis Diagnostic AI",
    description:
      "A comprehensive research project developing a Convolutional Neural Network (CNN) for tuberculosis diagnostics, accompanied by an analysis of social perception and technical performance.",
    tags: ["CNN", "TensorFlow", "Medical AI", "Data Analysis"],
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            03. Projects
          </span>
          <span className="flex-1 h-px bg-zinc-800" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-14 leading-snug">
          Featured{" "}
          <span className="text-emerald-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className={`group relative p-6 rounded-2xl bg-zinc-900 border ${project.border} hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col`}
            >
              {/* Gradient glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Number */}
                <span className={`text-xs font-mono font-semibold ${project.accent} mb-4 tracking-widest`}>
                  {project.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-100 mb-3 leading-snug group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

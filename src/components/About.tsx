const SKILLS = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn",
  "Pandas", "NumPy", "SQL", "Next.js",
  "Data Visualization", "Feature Engineering", "CNNs", "Bioinformatics",
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            01. About
          </span>
          <span className="flex-1 h-px bg-zinc-800" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photo.JPG`}
              alt="Rafi Azmi Zafarani"
              className="w-full max-w-xs rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/10 mb-8"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-6 leading-snug">
              Turning data into{" "}
              <span className="text-emerald-400">meaningful impact</span>
            </h2>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m currently studying{" "}
                <span className="text-zinc-200 font-medium">
                  Sistem dan Teknologi Informasi
                </span>{" "}
                at{" "}
                <span className="text-zinc-200 font-medium">
                  Institut Teknologi Bandung (ITB)
                </span>
                , one of Indonesia&apos;s leading technical universities.
              </p>
              <p>
                I am{" "}
                <span className="text-zinc-200 font-medium">
                  deeply passionate about technology
                </span>
                , with a core focus on harnessing data, machine learning, and
                deep learning to build impactful solutions. My work spans from
                applied ML research to real-world predictive systems.
              </p>
              <p>
                When I&apos;m not building models, I&apos;m exploring how
                analytical thinking bridges the gap between technical rigor
                and tangible outcomes in the real world.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
              Technologies &amp; Tools
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Projects" },
                { value: "ITB", label: "University" },
                { value: "ML/DL", label: "Focus" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center"
                >
                  <p className="text-xl font-bold text-emerald-400">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

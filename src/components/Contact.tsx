const LINKS = [
  {
    label: "GitHub",
    handle: "@Azmisynth",
    href: "https://github.com/Azmisynth",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    description: "View my open-source work",
    color: "hover:border-zinc-500",
    accent: "group-hover:text-zinc-100",
  },
  {
    label: "LinkedIn",
    handle: "rafiazmizafarani",
    href: "http://linkedin.com/in/rafiazmizafarani",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    description: "Connect professionally",
    color: "hover:border-blue-500/40",
    accent: "group-hover:text-blue-400",
  },
  {
    label: "Email",
    handle: "rafiazmizafarani@gmail.com",
    href: "mailto:rafiazmizafarani@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    description: "Send me a message",
    color: "hover:border-emerald-500/40",
    accent: "group-hover:text-emerald-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            04. Contact
          </span>
          <span className="flex-1 h-px bg-zinc-800" />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
            Get In{" "}
            <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about tech. Reach out through
            any of the channels below.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 ${link.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col items-center text-center gap-3`}
            >
              <div className={`text-zinc-400 ${link.accent} transition-colors duration-200`}>
                {link.icon}
              </div>
              <div>
                <p className="font-semibold text-zinc-200 text-sm">{link.label}</p>
                <p className="text-xs text-zinc-500 mt-0.5 break-all">{link.handle}</p>
              </div>
              <p className="text-xs text-zinc-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CaseStudyModals } from "./components/case-study-modals";
import { HologramOperatorPanel } from "./components/hologram-operator-panel";

type IconName =
  | "arrow"
  | "briefcase"
  | "code"
  | "layers"
  | "play"
  | "spark"
  | "target";

const capabilities: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Business Operations",
    description:
      "Turning ambitious goals into focused operating plans, clear ownership, and measurable progress.",
    icon: "target",
  },
  {
    title: "Program & Project Management",
    description:
      "Building the systems, rhythms, and accountability that keep complex initiatives moving.",
    icon: "layers",
  },
  {
    title: "Startup Execution",
    description:
      "Moving comfortably from strategy to the details that get an early-stage business off the ground.",
    icon: "spark",
  },
  {
    title: "Product / Creative Building",
    description:
      "Shaping rough concepts into useful products, thoughtful experiences, and tangible creative work.",
    icon: "code",
  },
];

const selectedWork: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Website & Product Mockups",
    description: "Interfaces and prototypes that make early ideas feel tangible.",
    icon: "layers",
  },
  {
    title: "AI / Vibe Coding Projects",
    description: "Fast, useful experiments built with modern AI workflows.",
    icon: "code",
  },
  {
    title: "Drone Footage / Creative Work",
    description: "Visual storytelling, aerial footage, and hands-on creative production.",
    icon: "play",
  },
  {
    title: "Systems / SOPs / Process Design",
    description: "Clear operating infrastructure that helps teams do their best work.",
    icon: "briefcase",
  },
];

const experience = [
  {
    company: "CourseCareers",
    location: "Atlanta",
    role: "Program Manager",
    dates: "February 2023 - March 2026",
    period: "Most Recent",
    highlights: [
      "Conducted market research to identify and oversee the creation and optimization of 20 online courses.",
      "Led a team of 2 employees, 20 high-level contracted instructors, and over 50 third-party tutors.",
      "Led ideation and cross-functional execution of student-facing product features.",
      "Analyzed internal data to improve course offerings and student outcomes while increasing company revenue by roughly 10%.",
    ],
  },
  {
    company: "JL Sponsorships",
    location: "Las Vegas",
    role: "COO",
    dates: "August 2022 - December 2022",
    period: "Previous",
    highlights: [
      "Managed daily operations including market research, creator and business outreach, contract negotiation, and content creation.",
      "Generated over $60,000 in sponsorships and increased revenue by roughly 20%.",
      "Designed the company website, marketing assets, SOPs, and contract templates, contributing to a 50% increase in creator partnerships.",
      "Successfully negotiated and closed 70% of partnership proposals offered to our creators.",
    ],
  },
  {
    company: "Hungry Bull",
    location: "Las Vegas",
    role: "Co-Founder / COO",
    dates: "December 2020 - August 2022",
    period: "Venture",
    highlights: [
      "Co-founded and operated the Hungry Bull app with influencers Graham Stephan and Financial Education Jeremy.",
      "Grew the mobile app to over 100,000 downloads.",
      "Wrote a daily newsletter serving more than 5,000 readers.",
      "Managed a team of 5 employees and contractors across daily operations, marketing, and software development.",
    ],
  },
  {
    company: "Financial Fortress",
    location: "Las Vegas",
    role: "Project Manager",
    dates: "March 2020 - December 2020",
    period: "Earlier",
    highlights: [
      "Managed a community of over 2,000 investors by providing support, creating value, and nurturing a healthy community.",
      "Assisted in creating and managing a coaching program that generated $5,000,000 in sales.",
      "Managed a team of 3 employees and 6 high-level coaches.",
      "Created a personal finance course and company SOPs, and built a reporting system to track and optimize business operations.",
    ],
  },
];

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    briefcase: (
      <>
        <rect width="18" height="13" x="3" y="7" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    play: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="3" />
        <path d="m10 8 6 4-6 4V8Z" />
      </>
    ),
    spark: (
      <path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9L12 3Zm-6 14-.8 2.2L3 20l2.2.8L6 23l.8-2.2L9 20l-2.2-.8L6 17Z" />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  );
}

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return <Icon name="arrow" className={className} />;
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={
        variant === "primary"
          ? "button-primary group"
          : "button-secondary group"
      }
      href={href}
    >
      {children}
      <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-9 flex flex-col gap-4 lg:mb-11 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-md text-sm leading-6 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  const navItems = [
    ["Home", "#home"],
    ["Case Studies", "#case-studies"],
    ["Resume", "#experience"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050912]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <a className="group flex items-center gap-3" href="#home">
          <span className="flex size-8 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/[0.08] font-mono text-xs font-semibold text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
            CK
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em] text-white transition-colors group-hover:text-cyan-200 sm:text-[15px]">
            Cole Kirkpatrick
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a
              className="text-[13px] font-medium text-slate-400 transition-colors hover:text-white"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="group flex h-9 items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] px-4 text-xs font-semibold text-cyan-100 transition-all hover:border-cyan-300/60 hover:bg-cyan-300/[0.14]"
          href="#contact"
        >
          Let&apos;s Talk
          <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="home" className="overflow-hidden">
      <Header />

      <section className="relative border-b border-white/[0.06] pt-16">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute left-[15%] top-0 h-[420px] w-[420px] rounded-full bg-blue-600/[0.09] blur-[130px]" />
        <div className="absolute right-[8%] top-20 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

        <div className="section-shell relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_#22d3ee]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200">
                Operator · Builder · Creative
              </span>
            </div>
            <h1 className="max-w-[700px] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-[4.25rem]">
              I turn messy ideas into{" "}
              <span className="text-gradient">organized execution.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              I build the systems, teams, and products that move ambitious ideas
              from whiteboard to real-world results.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#case-studies">View Case Studies</Button>
              <Button href="#experience" variant="secondary">
                View Resume
              </Button>
            </div>
          </div>
          <HologramOperatorPanel />
        </div>
      </section>

      <section className="section-shell section-space" id="about">
        <SectionHeading
          eyebrow="What I Do"
          title="From strategy to the work that makes it real."
          description="I work across functions to bring structure to ambiguity and momentum to ideas that matter."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <article className="capability-card group" key={capability.title}>
              <div className="capability-grid" />
              <div className="capability-scan" />
              <span className="capability-corner capability-corner-top" />
              <span className="capability-corner capability-corner-bottom" />
              <span className="capability-notch" />

              <div className="relative z-10 flex items-start justify-between">
                <span className="capability-icon">
                  <Icon name={capability.icon} />
                </span>
                <span className="capability-number">
                  0{index + 1}
                </span>
              </div>
              <div className="relative z-10 mt-9">
                <span className="capability-signal" />
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {capability.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-studies-section border-y border-white/[0.06]" id="case-studies">
        <div className="case-section-grid" />
        <div className="section-shell section-space relative">
          <SectionHeading
            eyebrow="Featured Case Studies"
            title="Selected outcomes, not just outputs."
            description="A closer look at the strategy, systems, and execution behind a few defining projects."
          />
          <CaseStudyModals />
        </div>
      </section>

      <section className="section-shell section-space">
        <SectionHeading
          eyebrow="Selected Work"
          title="Always building something."
          description="Explorations, experiments, and useful things made across product, technology, media, and operations."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {selectedWork.map((work) => (
            <a className="work-card group" href="#" key={work.title}>
              <div className="flex items-center justify-between">
                <span className="icon-box">
                  <Icon name={work.icon} />
                </span>
                <ArrowIcon className="size-4 -rotate-45 text-slate-600 transition-all group-hover:rotate-0 group-hover:text-cyan-300" />
              </div>
              <div className="mt-10">
                <h3 className="text-base font-semibold leading-6 text-white">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {work.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#060b14]" id="experience">
        <div className="section-shell section-space">
          <SectionHeading
            eyebrow="Experience Snapshot"
            title="Built through doing."
            description="A career shaped by operating inside growing teams, building from zero, and owning the outcome."
          />
          <div className="relative">
            <div className="absolute bottom-4 left-[6px] top-4 w-px bg-gradient-to-b from-cyan-300/50 via-blue-400/20 to-transparent md:left-[250px]" />
            {experience.map((item, index) => (
              <article
                className="relative grid gap-4 py-9 pl-9 first:pt-2 last:pb-2 md:grid-cols-[215px_1fr] md:gap-20 md:pl-0"
                key={item.company}
              >
                <span className="absolute left-0 top-[43px] z-10 flex size-[13px] items-center justify-center rounded-full border border-cyan-300/50 bg-[#060b14] first:top-[7px] md:left-[244px] md:first:top-[7px]">
                  <span className="size-[5px] rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
                    {item.period} · 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{item.location}</p>
                </div>
                <div className="md:pt-0.5">
                  <p className="text-sm font-medium text-cyan-200">{item.role}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-600">
                    {item.dates}
                  </p>
                  <ul className="mt-4 grid max-w-4xl gap-2.5">
                    {item.highlights.map((highlight) => (
                      <li
                        className="relative pl-5 text-sm leading-6 text-slate-400 before:absolute before:left-0 before:top-[0.65rem] before:size-1.5 before:rotate-45 before:border before:border-cyan-300/70 before:bg-cyan-300/10 before:shadow-[0_0_7px_rgba(34,211,238,0.35)]"
                        key={highlight}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24" id="contact">
        <div className="contact-panel relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="contact-grid" />
          <div className="contact-scan" />
          <div className="contact-edge-light" />
          <div className="contact-orbit" aria-hidden="true">
            <span className="contact-orbit-ring contact-orbit-ring-one" />
            <span className="contact-orbit-ring contact-orbit-ring-two" />
            <span className="contact-orbit-core">
              <span>CK</span>
            </span>
            <span className="contact-orbit-node contact-orbit-node-one" />
            <span className="contact-orbit-node contact-orbit-node-two" />
          </div>
          <span className="contact-corner contact-corner-tl" />
          <span className="contact-corner contact-corner-tr" />
          <span className="contact-corner contact-corner-bl" />
          <span className="contact-corner contact-corner-br" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Start A Conversation</p>
                <span className="contact-availability">
                  <span className="contact-availability-dot" />
                  Available for the right project
                </span>
              </div>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Have an ambitious idea, a messy system, or a useful thing worth
                building? Let&apos;s turn it into forward motion.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                <a className="link-underline hover:text-cyan-200" href="mailto:hello@colekirkpatrick.com">
                  hello@colekirkpatrick.com
                </a>
                <a className="link-underline hover:text-cyan-200" href="#">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="contact-actions flex flex-col gap-3 sm:flex-row">
              <Button href="#experience" variant="secondary">
                View Resume
              </Button>
              <Button href="mailto:hello@colekirkpatrick.com">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="section-shell flex flex-col gap-3 py-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cole Kirkpatrick. Built with intention.</p>
          <p className="font-mono uppercase tracking-[0.12em]">Operator · Builder · Creative</p>
        </div>
      </footer>
    </main>
  );
}

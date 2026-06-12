"use client";

import { useEffect, useRef, useState } from "react";

type CaseStudy = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  number: string;
  snapshot?: {
    role?: string;
    timeline?: string;
    team?: string;
    scope?: string;
  };
  sections?: {
    label: string;
    title: string;
    body?: string;
    bullets?: string[];
  }[];
  outcomes?: {
    value: string;
    label: string;
  }[];
  outcomeTitle?: string;
  outcomeDetails?: string[];
  skills?: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "CourseCareers",
    category: "Education Technology",
    description:
      "Scaling the systems, people, and programs behind a fast-growing career education platform.",
    tags: ["Operations", "Programs", "Growth"],
    number: "01",
    snapshot: {
      role: "Program Manager",
      team: "2 employees · 20+ instructors · 50+ tutors/coaches",
      scope: "Course creation, management, audits, and optimization",
    },
    sections: [
      {
        label: "Context",
        title: "Building the operating system for course expansion.",
        body:
          "CourseCareers had gained strong traction with its original career courses and wanted to expand into more programs. The company needed better systems for creating, managing, auditing, and improving online courses at scale.",
      },
      {
        label: "The Problem",
        title: "Expansion needed to become repeatable without losing quality.",
        bullets: [
          "Course expansion had previously depended heavily on founder bandwidth.",
          "There was limited structure around instructor sourcing, course creation, audits, and post-launch improvements.",
          "Finding credible instructors for new career paths was difficult.",
          "Quality needed to stay consistent across programs.",
          "The company needed stronger systems for coaching, tutors, student feedback, and ongoing optimization.",
        ],
      },
      {
        label: "My Role",
        title: "Program management across the full education lifecycle.",
        body:
          "I researched new course opportunities, sourced instructors, coordinated course launches, built instructor workflows, managed audits, reviewed student feedback, and improved education programs after launch.",
      },
      {
        label: "What I Did",
        title: "Created structure around people, process, and improvement.",
        bullets: [
          "Helped oversee the creation and optimization of 20+ online courses.",
          "Managed 2 internal employees, 20+ contracted instructors, and 50+ tutors and coaches.",
          "Built and improved course creation, course management, and audit processes.",
          "Created SOPs and repeatable workflows for instructors and internal teams.",
          "Helped support and improve the coaching and tutor ecosystem.",
          "Used internal data and student feedback to improve course offerings and outcomes.",
          "Helped execute student-facing product and experience improvements.",
        ],
      },
    ],
    outcomes: [
      { value: "20+", label: "Courses launched or optimized" },
      { value: "50+", label: "Tutors and coaches supported" },
      { value: "Millions", label: "Education product revenue supported" },
    ],
    outcomeTitle: "Stronger programs, economics, and execution.",
    outcomeDetails: [
      "Net income per course sale improved through contract and compensation model improvements.",
      "Graduation and progression rates improved through course quality, coaching, and student experience initiatives.",
      "Course production, audits, instructor management, and ongoing optimization gained stronger operational structure.",
    ],
    skills: [
      "Program Management",
      "Business Operations",
      "Process Building",
      "SOP Creation",
      "Instructor Management",
      "Contractor Management",
      "Cross-Functional Execution",
      "Online Education",
      "Student Experience",
      "Data-Informed Optimization",
    ],
  },
  {
    title: "Hungry Bull",
    category: "Consumer Startup",
    description:
      "Building a mobile-first stock market media product for a younger generation of investors.",
    tags: ["Startup", "Fintech", "Product"],
    number: "02",
    snapshot: {
      role: "Co-Founder / COO",
      team: "Creators · writers · designers · developers · contractors",
      scope: "Product, content, marketing, and day-to-day operations",
    },
    sections: [
      {
        label: "Context",
        title: "Turning creator authority into a direct-to-audience product.",
        body:
          "While working with Financial Education Jeremy, a prominent finance YouTuber with a large investing audience, I saw an opportunity to build a stock-market-focused media product inspired by the daily newsletter model but designed more directly for a younger investing audience. Instead of competing for attention through email alone, the idea was to create a mobile app and daily market newsletter that could meet users where they already spent time.",
      },
      {
        label: "The Opportunity",
        title: "A mobile-first relationship with younger investors.",
        bullets: [
          "Jeremy had a large audience and strong brand authority in the investing space.",
          "There was demand for simple, digestible stock market content.",
          "Most finance newsletters competed inside crowded email inboxes.",
          "A mobile app could create a more direct relationship with younger investors.",
          "The business needed a brand, product concept, content system, and operating structure built from scratch.",
        ],
      },
      {
        label: "My Role",
        title: "Co-founder and operator responsible for making the idea real.",
        body:
          "As Co-Founder and COO, I turned the original concept into a real product and operating business. I handled day-to-day operations, product coordination, content systems, marketing execution, team management, and leadership updates.",
      },
      {
        label: "What I Did",
        title: "Built the product, brand, team, and operating rhythm from zero.",
        bullets: [
          "Proposed the original concept and helped pitch the opportunity to leadership.",
          "Helped bring Graham Stephan, Erika Kullberg, and Matthew Huo into the project.",
          "Named the company and helped create the initial brand, logo direction, color scheme, and early app concepts.",
          "Worked directly with the software development team to guide product direction and app execution.",
          "Wrote the daily stock market newsletter and managed another writer.",
          "Managed designers, virtual assistants, and contractors across app design, marketing, research, image creation, and video.",
          "Ran social media marketing campaigns and coordinated day-to-day execution across content, product, and marketing.",
          "Reported updates to leadership, discussed strategy, and helped turn strategic decisions into execution.",
        ],
      },
    ],
    outcomes: [
      { value: "100K+", label: "Mobile app downloads" },
      { value: "~8K", label: "Daily newsletter readers at peak" },
      { value: "0 → 1", label: "Consumer fintech product built" },
    ],
    outcomeTitle: "A real audience, product, and operating business.",
    outcomeDetails: [
      "Built Hungry Bull from zero into a real consumer fintech and media product.",
      "Created the brand, content system, operating rhythm, and product foundation from the ground up.",
      "Managed cross-functional execution across creators, writers, designers, developers, assistants, and leadership.",
    ],
    skills: [
      "Startup Operations",
      "Product Management",
      "Project Management",
      "Business Strategy",
      "Content Strategy",
      "Newsletter Writing",
      "Team Management",
      "Creator Economy",
      "Fintech / Investing",
      "Cross-Functional Execution",
      "App Development Coordination",
    ],
  },
  {
    title: "iCard Collection",
    category: "Digital Product",
    description:
      "Building a centralized platform for organizing, sharing, and trading hockey cards.",
    tags: ["Product", "Community", "AI Build"],
    number: "03",
    snapshot: {
      role: "Founder",
      team: "Founder-led · community and creator partners",
      scope: "Product, brand, community, marketing, and development",
    },
    sections: [
      {
        label: "Context",
        title: "Reimagining a lifelong hobby as a modern digital product.",
        body:
          "I grew up collecting hockey cards and recently returned to the hobby after watching hockey card content on YouTube and seeing how much the market had changed. Hockey cards had evolved from being mostly a collectible hobby into something closer to an asset class, but the collector experience remained fragmented across Facebook groups, Instagram, Reddit, eBay, MyCardPost, and other disconnected platforms.",
      },
      {
        label: "The Opportunity",
        title: "Bring community, organization, and trading into one platform.",
        bullets: [
          "Hockey is one of the smaller markets within the major sports card world, so it often receives less attention from larger hobby platforms.",
          "Collectors had no centralized place built specifically around the hockey card community.",
          "Collections were getting larger and more valuable but remained difficult to organize, display, share, and track.",
          "Social media trading already existed, but the process was messy, repetitive, and hard to verify.",
          "There was an opportunity to combine the community side of collecting with better tools for organization, trading, reputation, and card value tracking.",
        ],
      },
      {
        label: "My Role",
        title: "Founder-led execution from rough idea to live product.",
        body:
          "I built the platform from the ground up across product strategy, branding, website structure, community development, marketing, user feedback, and AI-assisted development. Along the way, I taught myself how to use AI coding tools and worked through the process of turning an early concept into a functioning product.",
      },
      {
        label: "What I Did",
        title: "Built the product experience and community foundation.",
        bullets: [
          "Created the brand, positioning, and product direction for a hockey card community platform.",
          "Built a system for users to upload, organize, and share their hockey card collections.",
          "Created trade-listing functionality so users can display available cards with photos, pricing, and card details in one place.",
          "Built tools that let collectors share cards without repeatedly sending the same photos and information back and forth.",
          "Started building card value tracking features inspired by stock market charts to show whether player and card values are rising or falling.",
          "Created community features including chat rooms, live events, giveaways, and box break concepts.",
          "Ran organic social media marketing campaigns and created content around hockey card collecting.",
          "Worked with hockey card YouTubers and influencers to grow awareness and build credibility.",
          "Used AI-assisted coding and rapid product iteration to build and improve the platform quickly.",
        ],
      },
    ],
    outcomes: [
      { value: "~200", label: "Users in the first few months" },
      { value: "1,000+", label: "Cards uploaded to the platform" },
      { value: "Live", label: "Community product launched" },
    ],
    outcomeTitle: "A functioning platform with an active early community.",
    outcomeDetails: [
      "Collectors are using the platform to connect, share collections, and coordinate trades.",
      "Early power users have provided strong positive feedback on the product and direction.",
      "Created a more organized, community-driven alternative to scattered social media trading.",
    ],
    skills: [
      "Founder-Led Execution",
      "Product Strategy",
      "AI-Assisted Development",
      "Community Building",
      "Marketplace Thinking",
      "Sports Collectibles",
      "Branding",
      "Product Management",
      "User Feedback",
      "Social Media Marketing",
      "Influencer Outreach",
      "Startup Operations",
      "Vibe Coding",
      "Customer Discovery",
    ],
  },
  {
    title: "Signature Swings",
    category: "Ecommerce & B2C",
    description:
      "Creating a clearer direct-to-consumer experience for customized golf products.",
    tags: ["Ecommerce", "B2C", "AI Build"],
    number: "04",
    snapshot: {
      role: "B2C Strategy & Ecommerce Lead",
      team: "Founder partnership · AI-assisted development",
      scope: "Website, product structure, customization, and sales strategy",
    },
    sections: [
      {
        label: "Context",
        title: "Extending a strong B2B business into direct-to-consumer growth.",
        body:
          "Signature Swings is a custom golf apparel and accessories company with a strong B2B business. The company wanted to expand into B2C to grow the brand, sell directly to consumers, and create a stronger ecommerce experience. The founders had deep golf and custom-product expertise but limited B2C ecommerce and direct-to-consumer marketing experience, so they brought me in to improve the website, product strategy, customization experience, and growth plan.",
      },
      {
        label: "The Problem",
        title: "The product and buying experience needed a clearer system.",
        bullets: [
          "The existing website was built by offshore developers and felt unpolished, clunky, and difficult to optimize.",
          "The product line was messy and lacked a clear B2C strategy.",
          "Some products needed to be removed, replaced, or repositioned.",
          "The company needed a better system for selling customized products online.",
          "Customers needed an easier way to understand what they were buying and preview customized products before purchase.",
          "The business needed clearer flagship products, bundles, upsells, and a more structured sales strategy.",
        ],
      },
      {
        label: "My Role",
        title: "Leading the B2C strategy and ecommerce rebuild.",
        body:
          "I was responsible for improving the website, product structure, customization flow, sales strategy, and AI-assisted development of a more optimized direct-to-consumer experience.",
      },
      {
        label: "What I Did",
        title: "Rebuilt the experience around clarity, customization, and conversion.",
        bullets: [
          "Built a fully custom-coded ecommerce website optimized for customized golf products.",
          "Created a customization flow where customers can enter product details and preview what their final product may look like.",
          "Designed the system so customer customization details are easier for the fulfillment team to receive and execute.",
          "Helped clean up and restructure the product line by removing weaker products and recommending better-fit additions.",
          "Helped create bundle and upsell opportunities to increase order value.",
          "Repositioned the sales strategy around flagship products that are easier for buyers to understand.",
          "Helped simplify the buying experience for gift-givers who may not know much about golf.",
          "Used AI-assisted coding and product strategy to move faster without relying on a traditional development team.",
        ],
      },
    ],
    outcomes: [
      { value: "Custom", label: "Ecommerce experience built" },
      { value: "B2C", label: "Sales generated before full launch" },
      { value: "↑", label: "Revenue above prior baseline" },
    ],
    outcomeTitle: "A stronger foundation for direct-to-consumer growth.",
    outcomeDetails: [
      "Created a stronger customization and product preview experience for buyers and fulfillment.",
      "Improved the product structure, sales flow, flagship-product strategy, and upsell opportunities.",
      "Established a more scalable foundation for B2C marketing, product launches, and future growth.",
    ],
    skills: [
      "Ecommerce Strategy",
      "B2C Growth",
      "AI-Assisted Development",
      "Product Strategy",
      "Website Development",
      "Product Operations",
      "Customization Workflows",
      "Sales Strategy",
      "Upsell Strategy",
      "Brand Positioning",
      "Customer Journey",
      "Golf Market",
      "Startup Execution",
    ],
  },
];

function ArrowIcon({ className = "size-4" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function CaseStudyModals() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const snapshotDetails = selectedStudy?.snapshot
    ? [
        ["Role", selectedStudy.snapshot.role],
        ["Timeline", selectedStudy.snapshot.timeline],
        ["Team", selectedStudy.snapshot.team],
        ["Scope", selectedStudy.snapshot.scope],
      ].filter((detail): detail is [string, string] => Boolean(detail[1]))
    : [];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedStudy || !dialog || dialog.open) return;

    dialog.showModal();
  }, [selectedStudy]);

  useEffect(() => {
    if (!selectedStudy) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedStudy]);

  function closeModal() {
    dialogRef.current?.close();
  }

  function selectAdjacentStudy(direction: -1 | 1) {
    if (!selectedStudy) return;

    const currentIndex = caseStudies.findIndex(
      (study) => study.title === selectedStudy.title,
    );
    const nextIndex =
      (currentIndex + direction + caseStudies.length) % caseStudies.length;
    setSelectedStudy(caseStudies[nextIndex]);
    document.querySelector(".case-modal-scroll")?.scrollTo({ top: 0 });
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {caseStudies.map((study) => (
          <button
            aria-controls="case-study-modal"
            aria-haspopup="dialog"
            className="case-card group"
            key={study.title}
            onClick={() => setSelectedStudy(study)}
            type="button"
          >
            <div className="case-data-field" />
            <div className="case-data-sweep" />
            <span className="case-corner case-corner-tl" />
            <span className="case-corner case-corner-tr" />
            <span className="case-corner case-corner-bl" />
            <span className="case-corner case-corner-br" />
            <span className="case-rail case-rail-top" />
            <span className="case-rail case-rail-bottom" />

            <span className="case-number">{study.number}</span>
            <span className="relative z-10 block">
              <span className="flex items-start justify-between gap-4">
                <span className="case-category">{study.category}</span>
                <span className="case-arrow">
                  <ArrowIcon className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </span>
              </span>
              <span className="case-title mt-11 block text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[1.7rem]">
                {study.title}
              </span>
              <span className="case-description mt-3 block max-w-md text-sm leading-6 text-slate-400">
                {study.description}
              </span>
              <span className="mt-7 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span className="case-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </span>
              <span className="case-link mt-8">
                View Case Study
                <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        aria-labelledby="case-modal-title"
        className="case-modal"
        id="case-study-modal"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        onClose={() => setSelectedStudy(null)}
        ref={dialogRef}
      >
        {selectedStudy ? (
          <div className="case-modal-frame">
            <div className="case-modal-grid" />
            <div className="case-modal-scan" />
            <span className="case-modal-corner case-modal-corner-tl" />
            <span className="case-modal-corner case-modal-corner-tr" />
            <span className="case-modal-corner case-modal-corner-bl" />
            <span className="case-modal-corner case-modal-corner-br" />

            <div className="case-modal-toolbar">
              <div className="flex items-center gap-3">
                <span className="case-modal-status-dot" />
                <span>Project transmission received</span>
              </div>
              <button
                aria-label="Close case study"
                className="case-modal-close"
                onClick={closeModal}
                type="button"
              >
                <span className="hidden sm:inline">Close</span>
                <CloseIcon />
              </button>
            </div>

            <div className="case-modal-scroll">
              <header className="case-modal-header">
                <div className="case-modal-intro">
                  <p className="case-modal-kicker">
                    Case Study // {selectedStudy.number}
                  </p>
                  <p className="case-modal-category">{selectedStudy.category}</p>
                  <h2
                    className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl"
                    id="case-modal-title"
                  >
                    {selectedStudy.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                    {selectedStudy.description}
                  </p>
                </div>
                <div className="case-modal-record">
                  <div className="case-modal-record-heading">
                    <div>
                      <span>Record</span>
                      <strong>{selectedStudy.number}</strong>
                    </div>
                    <span>Status // Active</span>
                  </div>
                  {snapshotDetails.length > 0 ? (
                    <div className="case-modal-snapshot">
                      <p className="case-modal-section-label">
                        Project Snapshot
                      </p>
                      {snapshotDetails.map(([label, value]) => (
                        <div className="case-modal-detail" key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </header>

              <div className="case-modal-tags">
                {selectedStudy.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="case-modal-layout">
                <div className="case-modal-content">
                  {selectedStudy.sections?.map((section, index) => (
                    <section className="case-modal-section" key={section.label}>
                      <div className="case-modal-section-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <p className="case-modal-section-label">
                          {section.label}
                        </p>
                        <h3>{section.title}</h3>
                        {section.body ? <p>{section.body}</p> : null}
                        {section.bullets ? (
                          <ul className="case-modal-list">
                            {section.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </section>
                  ))}

                  {selectedStudy.outcomes ? (
                    <section className="case-modal-outcomes">
                      <div className="case-modal-outcomes-heading">
                        <p className="case-modal-section-label">
                          Outcomes & Impact
                        </p>
                        <h3>{selectedStudy.outcomeTitle}</h3>
                      </div>
                      <div className="case-modal-outcome-grid">
                        {selectedStudy.outcomes.map((outcome, index) => (
                          <div className="case-modal-outcome" key={outcome.label}>
                            <span>0{index + 1}</span>
                            <strong>{outcome.value}</strong>
                            <p>{outcome.label}</p>
                          </div>
                        ))}
                      </div>
                      {selectedStudy.outcomeDetails ? (
                        <ul className="case-modal-list case-modal-outcome-list">
                          {selectedStudy.outcomeDetails.map((outcome) => (
                            <li key={outcome}>{outcome}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ) : null}

                  {selectedStudy.skills ? (
                    <section className="case-modal-skills">
                      <p className="case-modal-section-label">Skills Applied</p>
                      <div>
                        {selectedStudy.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  {!selectedStudy.sections ? (
                    <div className="case-modal-empty">
                      <span className="case-modal-status-dot" />
                      Case study content awaiting transmission
                    </div>
                  ) : null}
                </div>
              </div>

              <footer className="case-modal-footer">
                <button
                  onClick={() => selectAdjacentStudy(-1)}
                  type="button"
                >
                  <ArrowIcon className="size-4 rotate-180" />
                  Previous record
                </button>
                <span>
                  {selectedStudy.number} / 0{caseStudies.length}
                </span>
                <button onClick={() => selectAdjacentStudy(1)} type="button">
                  Next record
                  <ArrowIcon className="size-4" />
                </button>
              </footer>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

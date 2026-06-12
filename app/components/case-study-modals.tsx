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
      "Taking a consumer brand from an early idea to an organized, launch-ready business.",
    tags: ["Startup", "Brand", "Execution"],
    number: "02",
  },
  {
    title: "iCard Collection",
    category: "Digital Product",
    description:
      "Designing a modern product concept that makes collecting feel intuitive, social, and alive.",
    tags: ["Product", "UX", "Strategy"],
    number: "03",
  },
  {
    title: "Signature Swings",
    category: "Creative Project",
    description:
      "Building a distinct content concept at the intersection of sports, storytelling, and design.",
    tags: ["Creative", "Media", "Build"],
    number: "04",
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
              <span className="mt-11 block text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[1.7rem]">
                {study.title}
              </span>
              <span className="mt-3 block max-w-md text-sm leading-6 text-slate-400">
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
                        <h3>Stronger programs, economics, and execution.</h3>
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

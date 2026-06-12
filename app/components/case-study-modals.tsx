"use client";

import { useEffect, useRef, useState } from "react";

type CaseStudy = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  number: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "CourseCareers",
    category: "Education Technology",
    description:
      "Scaling the systems, people, and programs behind a fast-growing career education platform.",
    tags: ["Operations", "Programs", "Growth"],
    number: "01",
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
                <div>
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
                  <span>Record</span>
                  <strong>{selectedStudy.number}</strong>
                  <span>Status // Draft</span>
                </div>
              </header>

              <div className="case-modal-tags">
                {selectedStudy.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="case-modal-layout">
                <aside className="case-modal-snapshot">
                  <p className="case-modal-section-label">Project Snapshot</p>
                  {[
                    ["Role", "Add role"],
                    ["Timeline", "Add timeline"],
                    ["Team", "Add team"],
                    ["Scope", "Add scope"],
                  ].map(([label, value]) => (
                    <div className="case-modal-detail" key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                  <div className="case-modal-transmission">
                    <span className="case-modal-status-dot" />
                    Content framework ready
                  </div>
                </aside>

                <div className="case-modal-content">
                  <section className="case-modal-section">
                    <div className="case-modal-section-number">01</div>
                    <div>
                      <p className="case-modal-section-label">Overview</p>
                      <h3>The project in one clear narrative.</h3>
                      <p>
                        Add a concise overview explaining what the project was,
                        why it mattered, and the context needed to understand the
                        work.
                      </p>
                    </div>
                  </section>

                  <section className="case-modal-section">
                    <div className="case-modal-section-number">02</div>
                    <div>
                      <p className="case-modal-section-label">The Challenge</p>
                      <h3>What needed to change or become possible.</h3>
                      <p>
                        Describe the core problem, constraints, stakes, and the
                        conditions that made this project worth solving.
                      </p>
                    </div>
                  </section>

                  <section className="case-modal-section">
                    <div className="case-modal-section-number">03</div>
                    <div>
                      <p className="case-modal-section-label">
                        My Role & Contribution
                      </p>
                      <h3>What you owned and how you moved it forward.</h3>
                      <p>
                        Clarify your responsibilities, decisions, leadership,
                        collaboration, and direct contribution to the outcome.
                      </p>
                    </div>
                  </section>

                  <section className="case-modal-section">
                    <div className="case-modal-section-number">04</div>
                    <div>
                      <p className="case-modal-section-label">The Approach</p>
                      <h3>The systems, strategy, and execution.</h3>
                      <p>
                        Walk through the major phases of the work, including the
                        choices, operating principles, and turning points that
                        shaped the result.
                      </p>
                    </div>
                  </section>

                  <section className="case-modal-outcomes">
                    <div className="case-modal-outcomes-heading">
                      <p className="case-modal-section-label">Outcomes & Impact</p>
                      <h3>Make the result measurable.</h3>
                    </div>
                    <div className="case-modal-outcome-grid">
                      {["Primary result", "Business impact", "Key learning"].map(
                        (label, index) => (
                          <div className="case-modal-outcome" key={label}>
                            <span>0{index + 1}</span>
                            <strong>Add metric</strong>
                            <p>{label}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </section>
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

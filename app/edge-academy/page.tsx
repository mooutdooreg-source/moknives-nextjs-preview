import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const asset = (path: string) => `/assets/${path}`;

export const metadata: Metadata = {
  title: "Edge Academy | Mo Knives",
  description:
    "A field-grounded knowledge archive on steel, heat treatment, geometry, sharpening, and the real principles behind blade performance.",
};

const contactHref = (subject: string, message: string) => {
  const params = new URLSearchParams({
    autostart: "1",
    subject,
    message,
  });

  return `/contact?${params.toString()}`;
};

const tabs = [
  ["Dossier", "#band-featured"],
  ["Steel", "#band-steel"],
  ["Heat Treatment", "#band-heat-treatment"],
  ["Field Notes", "#field-notes"],
  ["Geometry", "#band-geometry"],
  ["Sharpening", "#band-sharpening"],
  ["Maintenance", "#band-maintenance"],
];

const quickReference = [
  {
    title: "Most Asked",
    text: "Why my knife dulls quickly, what heat treatment really changes, and how geometry affects effort in the cut.",
    href: "#band-maintenance",
  },
  {
    title: "Essential Reading",
    text: "Same steel, same chemistry, different performance. Iron vs steel vs stainless. Full tang vs hidden tang.",
    href: "#band-heat-treatment",
  },
  {
    title: "Start Here",
    text: "Read steel, then heat treatment, then geometry. Only after that does sharpening advice become useful.",
    href: "#band-steel",
  },
];

const knowledgeSections = [
  {
    id: "band-steel",
    label: "Steel",
    intro:
      "Composition matters, but only in relation to application, heat treatment, and the job expected of the blade.",
    briefs: [
      {
        meta: "Steel / Core Brief",
        title: "Iron vs Steel vs Stainless Steel: What Actually Matters in a Knife",
        text: "The useful difference is not in the label alone. Carbon range, alloy additions, corrosion resistance, toughness, and intended use define what the material can become.",
        status: "Foundational",
        subject: "Edge Academy: Iron vs Steel vs Stainless Steel",
        message:
          "I want to talk about the material differences between iron, steel, and stainless in the context of my own knife use.",
      },
      {
        meta: "Steel / Selection Logic",
        title: "Knife Steels by Use: Choosing the Right Steel for the Right Job",
        text: "The right steel is contextual. Coastal use, kitchen humidity, hard board contact, fine slicing, or rugged field work each demand a different balance.",
        status: "Use Specific",
        subject: "Edge Academy: Knife Steels by Use",
        message: "I want help choosing the right steel for my actual use case.",
      },
    ],
  },
  {
    id: "band-heat-treatment",
    label: "Heat Treatment",
    intro: "Steel is only potential until heat treatment turns chemistry into usable structure.",
    briefs: [
      {
        meta: "Heat Treatment / Essential Brief",
        title: "Same Steel, Same Chemistry, Different Performance: Why Heat Treatment Changes Everything",
        text: "Hardness, toughness, grain refinement, retained austenite, and temper choices reshape how the same alloy performs in contact, under stress, and across repeated maintenance cycles.",
        status: "Critical Variable",
        subject: "Edge Academy: Same Steel, Same Chemistry, Different Performance",
        message:
          "I want to understand how heat treatment changes performance in practice for my use case.",
      },
    ],
    note: {
      title: "Read This Alongside Performance",
      text: "The edge does not fail in theory. It fails in use. Heat treatment only matters because it governs how the apex behaves when resistance, torsion, impact, and repeated maintenance show up together.",
      kicker: "Cross-reference: Featured Dossier + Field Notes",
    },
  },
  {
    id: "band-geometry",
    label: "Geometry",
    intro:
      "Shape, thickness, grind, and tang logic determine whether a blade merely looks convincing or actually behaves well in use.",
    briefs: [
      {
        meta: "Geometry / Cutting Logic",
        title: "A Knife vs the Shape of a Knife: Why Form Alone Means Nothing",
        text: "Silhouette can imitate purpose without delivering it. Distal taper, stock thickness, edge relationship, and grind execution are what turn form into function.",
        status: "Geometry First",
        subject: "Edge Academy: A Knife vs the Shape of a Knife",
        message: "I want to talk about how geometry and shape affect performance in the cut.",
      },
      {
        meta: "Geometry / Structure",
        title: "Full Tang vs Hidden Tang: What Really Matters",
        text: "Tang design is not a slogan. Strength, balance, intended load path, handle architecture, and the knife's actual task are what decide whether one solution fits better.",
        status: "Structure",
        subject: "Edge Academy: Full Tang vs Hidden Tang",
        message: "I want to discuss tang structure, balance, and which approach fits my knife use.",
      },
    ],
  },
  {
    id: "band-sharpening",
    label: "Sharpening",
    intro: "Sharpening should preserve a blade's working geometry, not casually erase it.",
    briefs: [
      {
        meta: "Sharpening / Maintenance Strategy",
        title: "Why Edge Maintenance Is Better Than Full Resharpening",
        text: "Consistent light maintenance protects cutting geometry, reduces steel loss, and keeps the apex in working order without waiting for full dullness and aggressive correction.",
        status: "Workflow",
        subject: "Edge Academy: Why Edge Maintenance Is Better Than Full Resharpening",
        message:
          "I want to build a maintenance workflow that protects cutting geometry instead of over-grinding the knife.",
      },
      {
        meta: "Sharpening / Risk Control",
        title: "Why Commercial Sharpening Shops Can Ruin a Good Knife",
        text: "Speed, belt heat, poor angle control, and generic treatment of complex grinds can destroy the very geometry and heat treatment decisions that make a knife worth owning.",
        status: "Use Caution",
        subject: "Edge Academy: Why Commercial Sharpening Shops Can Ruin a Good Knife",
        message:
          "I want to avoid sharpening damage and understand what to watch for when handing a knife to someone else.",
      },
    ],
  },
  {
    id: "band-maintenance",
    label: "Maintenance / Use",
    intro:
      "Real ownership is long-term. Edge loss, corrosion, board contact, and the economics of premium knives all belong in the same conversation.",
    briefs: [
      {
        meta: "Maintenance / Edge Loss",
        title: "Why My Knife Dulls Quickly: The Real Causes of Edge Loss",
        text: "Board hardness, contact style, pressure, lateral torque, abrasive contamination, storage, and maintenance habits all shape how fast an edge seems to disappear.",
        status: "Diagnostics",
        subject: "Edge Academy: Why My Knife Dulls Quickly",
        message: "I want help diagnosing the real causes of edge loss in my use case.",
      },
      {
        meta: "Use / Value",
        title: "Why Japanese Knives Are Expensive: What You're Really Paying For",
        text: "Cost reflects steel choice, treatment precision, grind quality, finish work, intended cutting feel, and the discipline needed to preserve those traits through use and maintenance.",
        status: "Perspective",
        subject: "Edge Academy: Why Japanese Knives Are Expensive",
        message:
          "I want to understand what the cost of a premium Japanese-style knife actually reflects in use.",
      },
    ],
  },
];

function SectionHeading({ label, children }: { label: string; children: string }) {
  return (
    <div className="academy-section-heading">
      <div>
        <div className="academy-section-label">{label}</div>
        <p className="academy-section-kicker">{children}</p>
      </div>
    </div>
  );
}

function BriefCard({
  brief,
}: {
  brief: {
    meta: string;
    title: string;
    text: string;
    status: string;
    subject: string;
    message: string;
  };
}) {
  return (
    <a className="academy-brief-card" href={contactHref(brief.subject, brief.message)}>
      <div className="academy-brief-strip" aria-hidden="true" />
      <div className="academy-brief-meta">{brief.meta}</div>
      <h3 className="academy-brief-title">{brief.title}</h3>
      <p>{brief.text}</p>
      <div className="academy-brief-footer">
        <span>{brief.status}</span>
        <strong>
          Open Brief <ArrowRight aria-hidden="true" size={16} />
        </strong>
      </div>
    </a>
  );
}

export default function EdgeAcademyPage() {
  return (
    <main className="edge-academy-page">
      <section className="academy-hero">
        <div className="academy-container">
          <div className="academy-hero-panel">
            <div className="academy-hero-rule">Dossier / Academy Archive / Field-Grounded Knowledge</div>
            <div className="academy-eyebrow">Edge Academy</div>
            <h1 className="academy-hero-title">
              <span>Science</span>
              <span>Behind the Edge</span>
            </h1>
            <p className="academy-hero-copy">
              A field-grounded knowledge archive on steel, heat treatment, geometry, sharpening, and the real
              principles behind blade performance.
            </p>
            <div className="academy-actions">
              <a href="#band-featured" className="academy-button academy-button-primary">
                Enter the Dossier
              </a>
              <a href="/contact" className="academy-button academy-button-secondary">
                Ask Mo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-shell">
        <div className="academy-container">
          <nav className="academy-discipline-index" aria-label="Edge Academy disciplines">
            {tabs.map(([label, href], index) => (
              <a className={`academy-tab${index === 0 ? " is-active" : ""}`} href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>

          <section id="band-featured" className="academy-section">
            <SectionHeading label="Featured Dossier">
              A lead brief that sets the tone for the academy: performance is never a single metric. The edge only
              makes sense when hardness, geometry, resistance, and use are read together.
            </SectionHeading>

            <div className="academy-featured-grid">
              <article className="academy-dossier-feature">
                <div className="academy-dossier-media">
                  <img
                    src={asset("media/pages/edge-academy/hero/edge-academy-hero-bg-desktop-v1.avif")}
                    alt="Blade performance and edge study board"
                  />
                </div>
                <div className="academy-feature-content">
                  <div className="academy-brief-meta">Performance / Essential Reading</div>
                  <h2 className="academy-feature-title">Why Sharp Doesn't Always Cut Well</h2>
                  <p>
                    A knife can feel aggressive on the stone yet disappoint in use. Cutting behavior is shaped by edge
                    geometry, blade thickness, hardness, finish, and the resistance of the material being cut - not by
                    sharpness alone.
                  </p>
                  <div className="academy-pill-row">
                    <span>Edge Geometry</span>
                    <span>Hardness</span>
                    <span>Cutting Resistance</span>
                  </div>
                  <div className="academy-actions">
                    <a href="#field-notes" className="academy-button academy-button-primary">
                      Read the Brief
                    </a>
                    <a
                      href={contactHref(
                        "Edge Academy: Start Here",
                        "I want to start with the essential Edge Academy logic and apply it to my own use case.",
                      )}
                      className="academy-button academy-button-secondary"
                    >
                      Start Here
                    </a>
                  </div>
                </div>
              </article>

              <aside className="academy-reference-panel">
                <div className="academy-section-label">Quick Reference</div>
                <p>A concise entry path for visitors who want the essential logic first.</p>
                <div className="academy-reference-list">
                  {quickReference.map((item) => (
                    <a className="academy-reference-row" href={item.href} key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
                <a
                  href={contactHref(
                    "Edge Academy: Use Case",
                    "I want to ask about my own use case and what steel, heat treatment, or geometry choices matter most.",
                  )}
                  className="academy-button academy-button-secondary academy-full-button"
                >
                  Ask Mo About Your Use Case
                </a>
              </aside>
            </div>
          </section>

          {knowledgeSections.slice(0, 2).map((section) => (
            <section id={section.id} className="academy-section" key={section.id}>
              <SectionHeading label={section.label}>{section.intro}</SectionHeading>
              <div className="academy-knowledge-band">
                <div className="academy-band-grid">
                  {section.briefs.map((brief) => (
                    <BriefCard brief={brief} key={brief.title} />
                  ))}
                  {section.note ? (
                    <div className="academy-brief-note">
                      <strong>{section.note.title}</strong>
                      <p>{section.note.text}</p>
                      <span>{section.note.kicker}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ))}

          <section id="field-notes" className="academy-section">
            <div className="academy-field-notes">
              <div className="academy-field-copy">
                <div className="academy-section-label">Field Notes</div>
                <div className="academy-brief-meta">Theory vs Reality</div>
                <h2>What matters in theory must survive reality.</h2>
                <p>
                  Steel, heat treatment, and geometry only matter when performance confirms them. Honest cutting
                  behavior under contact reveals more than polished claims ever will.
                </p>
                <div className="academy-field-rail">
                  <span>Performance proof should show contact, resistance, and control - not staged drama.</span>
                  <span>
                    The value of geometry is visible in how material parts, not in how sharp the edge sounds in
                    description.
                  </span>
                  <span>The bench, the stone, and the cut all have to agree before a theory earns trust.</span>
                </div>
              </div>

              <div className="academy-field-media">
                <video autoPlay muted loop playsInline preload="metadata" aria-label="Performance proof cutting test">
                  <source
                    src={asset("media/pages/edge-academy/media/edge-academy-media-proof-desktop-v1.mp4")}
                    type="video/mp4"
                  />
                </video>
                <div className="academy-field-overlay">
                  <strong>Performance Proof</strong>
                  <p>Real cutting response under practical contact. Performance shown, not claimed.</p>
                  <span>Muted loop / observed in use / no cosmetic staging</span>
                </div>
              </div>
            </div>
          </section>

          {knowledgeSections.slice(2).map((section) => (
            <section id={section.id} className="academy-section" key={section.id}>
              <SectionHeading label={section.label}>{section.intro}</SectionHeading>
              <div className="academy-knowledge-band">
                <div className="academy-band-grid">
                  {section.briefs.map((brief) => (
                    <BriefCard brief={brief} key={brief.title} />
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="academy-cta">
            <div>
              <div className="academy-section-label">Close the Dossier</div>
              <h2>Ask a Better Question. Get a Better Knife.</h2>
              <p>
                Have a question about steel, geometry, sharpening, or edge behavior? Start with the use case, the
                constraints, and the reality of the work. That is where better knives begin.
              </p>
            </div>
            <div className="academy-actions">
              <a href="/contact" className="academy-button academy-button-secondary">
                Share the Knowledge
              </a>
              <a href="/contact" className="academy-button academy-button-primary">
                Ask Mo
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

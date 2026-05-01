const asset = (path: string) => `/assets/${path}`;

const features = [
  ['01', 'Field-Carry Control', 'Geometry shaped for confident camp work, carry, and repeated field use.'],
  ['02', 'Weather and Endurance', 'Built around changing conditions, grip security, and long-route reliability.'],
  ['03', 'Camp Performance', 'A working blade system designed for utility, control, and trust in hand.'],
];

const featuredPieces = [
  {
    title: 'Built for the field.',
    note: 'Wood surface / hero object',
    src: 'media/pages/expedition/records/expedition-featured-grid-1-desktop-v1.png',
  },
  {
    title: 'Carry. Weather. Trust.',
    note: 'Leather surface / sheath-forward',
    src: 'media/pages/expedition/records/expedition-process-card-2-desktop-v1.png',
  },
  {
    title: 'Made to endure.',
    note: 'Rugged surface / field-oriented carry',
    src: 'media/pages/expedition/records/expedition-stack-1-desktop-v1.png',
  },
];

const records = [
  {
    badge: 'Record 017',
    name: 'Expedition Utility Blade',
    note: 'Carry, weather, and repeat field use. Exact measurements stay out until verified.',
    copyTitle: 'Inside the record',
    copy: 'Click through for the assigned gallery only. Fullscreen viewing stays inside the record page so the world page stays disciplined.',
    mediaNote: '3 stills in stack',
  },
  {
    badge: 'Record 021',
    name: 'Camp Utility Pattern',
    note: 'Camp, lake, and working carry. Built around documented use rather than catalog polish.',
    copyTitle: 'Why this works',
    copy: 'The preview stays strong with a compact specs card and a stacked visual, then the fuller image sequence opens only after entering the piece.',
    mediaNote: '3 stills in stack',
  },
];

const processItems = [
  ['Lead Image', 'Handle / Fit', 'media/pages/expedition/records/expedition-process-card-2-desktop-v1.png'],
  ['01', 'Forging', 'media/pages/expedition/records/expedition-record-3-detail-2-desktop-v1.png'],
  ['02', 'Grinding', 'media/pages/expedition/records/expedition-intro-detail-crop-desktop-v1.png'],
  ['03', 'Finishing', 'media/pages/expedition/records/expedition-featured-grid-1-desktop-v1.png'],
];

export default function ExpeditionPage() {
  return (
    <main className="world-page">
      <div className="world-frame">
        <section className="world-hero">
          <video className="world-media" autoPlay muted loop playsInline preload="metadata">
            <source src={asset('media/pages/expedition/hero/expedition-hero-bg-desktop-v1.mp4')} type="video/mp4" />
          </video>
          <div className="world-copy">
            <p className="world-eyebrow">Expedition</p>
            <h1 className="world-title">
              <span>For the ground</span>
              <span>beneath you,</span>
              <span className="gold">The fire beside you,</span>
              <span>And the long return</span>
              <span>ahead.</span>
            </h1>
            <p>Blades shaped for camp, catch, carry, and the realities of the field.</p>
            <div className="world-features" aria-label="Expedition key principles">
              {features.map(([number, title, text]) => (
                <div className="world-feature" key={title}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="world-actions">
              <a className="world-link primary" href="/request-a-blade">START THE CONVERSATION →</a>
              <a className="world-link" href="#featured">Explore Expedition</a>
            </div>
          </div>
        </section>

        <section className="world-split">
          <div className="world-panel">
            <p className="world-eyebrow">World Statement</p>
            <h2 className="world-section-title">What <span className="gold">Expedition Demands</span></h2>
            <p>Expedition belongs to those who live beyond controlled conditions. In the field, variables multiply, comfort disappears, and confidence in your edge matters more with every mile. These blades are shaped for carry, weather, repeated use, and the long trust that only real conditions can build.</p>
          </div>
          <div className="world-panel">
            <p className="world-eyebrow">FIELD DETAIL</p>
            <h2 className="world-section-title">Spine / thickness / <span className="gold">carry-first build</span></h2>
          </div>
        </section>

        <section id="featured" className="world-record-list">
          <p className="world-eyebrow">Featured Pieces</p>
          <h2 className="world-section-title">Selected for the <span className="gold">Field</span></h2>
          <p>A curated selection shaped by carry, weather, and repeated real-world use.</p>
          <div className="world-grid">
            {featuredPieces.map((piece) => (
              <article className="world-card" key={piece.title}>
                <img className="world-card-media" src={asset(piece.src)} alt={piece.title} />
                <div className="world-card-content"><strong>{piece.title}</strong><span>{piece.note}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="world-record-list">
          <p className="world-eyebrow">Documentation</p>
          <h2 className="world-section-title">Field <span className="gold">Records</span></h2>
          <p>Moments of use, carry, and performance recorded beyond controlled conditions.</p>
          {records.map((record) => (
            <article className="world-record" key={record.name}>
              <p className="world-eyebrow">{record.badge}</p>
              <h3>{record.name}</h3>
              <p>{record.note}</p>
              <div className="world-record-rows"><div><span>World</span><strong>Expedition</strong></div><div><span>Status</span><strong>Archived / Sold</strong></div><div><span>Archive note</span><strong>Dimensions not verified</strong></div></div>
              <div className="world-note"><strong>{record.copyTitle}</strong><br />{record.copy}<br />{record.mediaNote}</div>
            </article>
          ))}
        </section>

        <section className="world-record-list">
          <p className="world-eyebrow">Making</p>
          <h2 className="world-section-title">From Forge to <span className="gold">Field</span></h2>
          <p>What begins at the forge is shaped toward carry, control, and real reliance in hand.</p>
          <div className="world-grid">
            {processItems.map(([kicker, title, src]) => (
              <article className="world-card" key={title}>
                <img className="world-card-media" src={asset(src)} alt={title} />
                <div className="world-card-content"><span>{kicker}</span><strong>{title}</strong></div>
              </article>
            ))}
          </div>
        </section>

        <section className="world-split">
          <div className="world-panel">
            <p className="world-eyebrow">Archive</p>
            <h2 className="world-section-title">Documented <span className="gold">Legacy</span></h2>
            <p>A deeper record of earlier pieces, field documentation, and the work that shaped the lineage.</p>
            <div className="world-actions"><a className="world-link" href="/the-vault">Explore earlier records</a></div>
          </div>
          <img className="world-media" src={asset('media/pages/expedition/records/expedition-record-2-main-desktop-v1.avif')} alt="Documented Legacy" />
        </section>

        <section className="world-cta">
          <p className="world-eyebrow">Start here</p>
          <h2>The right blade starts with The right conversation.</h2>
          <p>Whether you want to begin from a piece you’ve seen or shape something more specific to your use, the next step is the conversation.</p>
          <div className="world-actions"><a className="world-link primary" href="/request-a-blade">Start the Conversation</a></div>
        </section>
      </div>
    </main>
  );
}

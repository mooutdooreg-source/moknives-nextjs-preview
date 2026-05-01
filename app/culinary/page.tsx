const asset = (path: string) => `/assets/${path}`;

const features = [
  ['01', 'Board-First Control', 'Geometry shaped for confident prep, slicing, and repeated service.'],
  ['02', 'Heat and Rhythm', 'Built around timing, movement, open-fire work, and steady hand feel.'],
  ['03', 'Service Performance', 'A working blade system designed for balance, retention, and focus.'],
];

const featuredPieces = [
  {
    title: 'Built for the board.',
    note: 'Board-ready / controlled heat',
    src: 'media/pages/culinary/records/culinary-record-1-main-desktop-v1.avif',
  },
  {
    title: 'Precision. Heat. Rhythm.',
    note: 'Leather / protein prep / control',
    src: 'media/pages/culinary/records/culinary-record-2-main-desktop-v1.avif',
  },
  {
    title: 'Made for repeated service.',
    note: 'Carry / sheath / open-fire readiness',
    src: 'media/pages/culinary/records/culinary-record-3-main-desktop-v1.avif',
  },
];

const records = [
  {
    badge: 'Record 032',
    name: 'Fireline Chef Pattern',
    note: 'Heat, rhythm, and cutting authority. Size stays out until confirmed against the archive.',
    copyTitle: 'Inside the record',
    copy: 'Once opened, the record page carries the stills fullscreen from that piece only instead of firing a gallery from the world page.',
    mediaNote: '3 stills in stack',
  },
  {
    badge: 'Record 034',
    name: 'Service Carver',
    note: 'Documented presence for a blade made to move with confidence through prep and service.',
    copyTitle: 'Archive-first presentation',
    copy: 'This keeps the public layer selective while still proving that the record holds more than a single hero frame.',
    mediaNote: '3 stills in stack',
  },
];

const processItems = [
  ['Lead Image', 'Handle / Fit', 'media/pages/culinary/records/culinary-record-4-main-desktop-v1.avif'],
  ['01', 'Forging', 'media/pages/culinary/records/culinary-record-5-main-desktop-v1.avif'],
  ['02', 'Grinding', 'media/pages/culinary/records/culinary-record-6-main-desktop-v1.avif'],
  ['03', 'Finishing', 'media/pages/culinary/records/culinary-detail-crop-desktop-v1.avif'],
];

export default function CulinaryPage() {
  return (
    <main className="world-page">
      <div className="world-frame">
        <section className="world-hero">
          <video className="world-media" autoPlay muted loop playsInline preload="metadata">
            <source src={asset('media/pages/culinary/hero/culinary-hero-bg-desktop-v1.mp4')} type="video/mp4" />
          </video>
          <div className="world-copy">
            <p className="world-eyebrow">Culinary</p>
            <h1 className="world-title">
              <span>For the flame,</span>
              <span className="gold">The board,</span>
              <span>And the rhythm</span>
              <span>that leaves no room</span>
              <span>for hesitation.</span>
            </h1>
            <p>Blades shaped for fire, meat, timing, and controlled performance in hand.</p>
            <div className="world-features" aria-label="Culinary key principles">
              {features.map(([number, title, text]) => (
                <div className="world-feature" key={title}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </div>
              ))}
            </div>
            <div className="world-actions"><a className="world-link primary" href="/request-a-blade">START THE CONVERSATION →</a><a className="world-link" href="#featured">Explore Culinary</a></div>
          </div>
        </section>

        <section className="world-split">
          <div className="world-panel">
            <p className="world-eyebrow">World Statement</p>
            <h2 className="world-section-title">What <span className="gold">Culinary Demands</span></h2>
            <p>Culinary belongs to work measured in timing, control, heat, and repetition. At the board and over the fire, precision is not decorative; it is the difference between confidence and compromise. These blades are shaped for protein work, edge control, balance in hand, and the steady rhythm of real service and open-fire preparation.</p>
          </div>
          <div className="world-panel"><p className="world-eyebrow">CUTTING DETAIL</p><h2 className="world-section-title">Profile / grind / <span className="gold">board-first control</span></h2></div>
        </section>

        <section id="featured" className="world-record-list">
          <p className="world-eyebrow">Featured Pieces</p>
          <h2 className="world-section-title">Selected for the <span className="gold">Board</span></h2>
          <p>A curated selection shaped by heat, protein prep, edge control, and repeated work in hand.</p>
          <div className="world-grid">
            {featuredPieces.map((piece) => (
              <article className="world-card" key={piece.title}><img className="world-card-media" src={asset(piece.src)} alt={piece.title} /><div className="world-card-content"><strong>{piece.title}</strong><span>{piece.note}</span></div></article>
            ))}
          </div>
        </section>

        <section className="world-record-list">
          <p className="world-eyebrow">Documentation</p>
          <h2 className="world-section-title">Service <span className="gold">Records</span></h2>
          <p>Moments of prep, carry, heat, and edge performance recorded where timing and control matter.</p>
          {records.map((record) => (
            <article className="world-record" key={record.name}>
              <p className="world-eyebrow">{record.badge}</p><h3>{record.name}</h3><p>{record.note}</p>
              <div className="world-record-rows"><div><span>World</span><strong>Culinary</strong></div><div><span>Status</span><strong>Archived / Sold</strong></div><div><span>Archive note</span><strong>Dimensions not verified</strong></div></div>
              <div className="world-note"><strong>{record.copyTitle}</strong><br />{record.copy}<br />{record.mediaNote}</div>
            </article>
          ))}
        </section>

        <section className="world-record-list">
          <p className="world-eyebrow">Making</p>
          <h2 className="world-section-title">From Forge to <span className="gold">Fire</span></h2>
          <p>What begins at the forge is shaped toward edge control, balance, and confident work through heat and repetition.</p>
          <div className="world-grid">{processItems.map(([kicker, title, src]) => <article className="world-card" key={title}><img className="world-card-media" src={asset(src)} alt={title} /><div className="world-card-content"><span>{kicker}</span><strong>{title}</strong></div></article>)}</div>
        </section>

        <section className="world-split">
          <div className="world-panel"><p className="world-eyebrow">Archive</p><h2 className="world-section-title">Documented <span className="gold">Legacy</span></h2><p>A deeper record of earlier pieces, field documentation, and the work that shaped the lineage.</p><div className="world-actions"><a className="world-link" href="/the-vault">Explore earlier records</a></div></div>
          <img className="world-media" src={asset('media/pages/culinary/records/culinary-record-4-main-desktop-v1.avif')} alt="Documented Legacy" />
        </section>

        <section className="world-cta"><p className="world-eyebrow">START HERE</p><h2>The Right Blade Starts With Absolute Clarity.</h2><p>Whether you want to begin from a piece you’ve seen, or shape something more specific to your board, heat, timing, and service flow—the next step is the conversation.</p><div className="world-note"><strong>Culinary Brief</strong><br />Start from the work: prep style, edge preference, board rhythm, service context, and the kind of control you need in hand.</div><div className="world-actions"><a className="world-link primary" href="/request-a-blade">Start The Conversation</a></div></section>
      </div>
    </main>
  );
}

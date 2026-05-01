const asset = (path: string) => `/assets/${path}`;

const features = [
  ['01', 'Disciplined Design', 'Purpose-built blades for real-world readiness.'],
  ['02', 'Confidence in the Dark', 'Low-light performance you can rely on.'],
  ['03', 'Performance Under Pressure', 'Engineered for control when it matters most.'],
];

const featuredPieces = [
  ['Built for disciplined carry.', 'Duty / readiness / control', 'media/pages/vanguard/records/vanguard_record_1.avif'],
  ['Retention. Grip. Confidence.', 'Profile / carry system / precision', 'media/pages/vanguard/records/vanguard_record_1.avif'],
  ['Made for immediate trust.', 'Sheath / access / dependable geometry', 'media/pages/vanguard/records/vanguard_record_1.avif'],
];

const records = [
  ['Operational Record 01', 'Readiness Pattern', 'Restricted-access world. Public preview remains controlled and the next step routes to review, not general entry.', 'Restricted flow', 'The stack opens the record page. From there, the call to action moves into review and qualification instead of the public request path.'],
  ['Operational Record 03', 'Controlled Carry Build', 'Professional context first. The record page can show fuller images while the action still routes into qualification.', 'Public restraint', 'Vanguard keeps the same record logic as the rest of the site, but the route beyond the record remains restricted and reviewed.'],
];

const processItems = [
  ['Lead Image', 'Handle / Retention Fit', 'media/pages/vanguard/records/vanguard-archive-preview-desktop-v1.avif'],
  ['01', 'Forging', 'media/pages/vanguard/records/vanguard-archive-preview-desktop-v1.avif'],
  ['02', 'Grinding', 'media/pages/vanguard/records/vanguard-archive-preview-desktop-v1.avif'],
  ['03', 'Finishing', 'media/pages/vanguard/records/vanguard-archive-preview-desktop-v1.avif'],
];

export default function VanguardPage() {
  return (
    <main className="world-page">
      <div className="world-frame">
        <section className="world-hero">
          <video className="world-media" autoPlay muted loop playsInline preload="metadata">
            <source src={asset('media/pages/vanguard/hero/vanguard-hero-bg-desktop-v1.mp4')} type="video/mp4" />
          </video>
          <div className="world-copy">
            <p className="world-eyebrow">Vanguard</p>
            <h1 className="world-title"><span>For the carry</span><span>that must</span><span className="gold">Answer</span><span>Without</span><span>Hesitation.</span></h1>
            <p>Blades shaped for disciplined carry, low-light confidence, and performance under pressure.</p>
            <div className="world-note">Vanguard is not publicly available. Access is limited to government entities, security professionals, and verified law enforcement personnel, subject to review and applicable regulations.</div>
            <div className="world-features" aria-label="Vanguard key principles">{features.map(([number, title, text]) => <div className="world-feature" key={title}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div>
            <div className="world-actions"><a className="world-link primary" href="/vanguard-request">ARE YOU QUALIFIED? →</a><a className="world-link" href="#featured">Explore Vanguard</a></div>
          </div>
        </section>

        <section className="world-split">
          <div className="world-panel"><p className="world-eyebrow">World Statement</p><h2 className="world-section-title">What <span className="gold">Vanguard Demands</span></h2><p>Vanguard belongs to environments where uncertainty is constant and hesitation carries a cost. When readiness matters, confidence in the blade is not abstract; it is something earned through retention, control, deployment, and absolute trust in hand. These pieces are shaped for disciplined carry, dependable geometry, and the kind of performance that stays clear under pressure.</p><div className="world-note">Vanguard is not publicly available. Access is limited to government entities, security professionals, and verified law enforcement personnel, subject to review and applicable regulations.</div></div>
          <img className="world-media" src={asset('media/pages/vanguard/records/vanguard_record_1.avif')} alt="Blade, grind, and build detail of the knife" />
        </section>

        <section id="featured" className="world-record-list"><p className="world-eyebrow">Featured Pieces</p><h2 className="world-section-title">Selected for <span className="gold">Readiness</span></h2><p>A curated selection shaped by control, retention, disciplined carry, and repeatable performance.</p><div className="world-grid">{featuredPieces.map(([title, note, src]) => <article className="world-card" key={title}><img className="world-card-media" src={asset(src)} alt={title} /><div className="world-card-content"><strong>{title}</strong><span>{note}</span></div></article>)}</div></section>

        <section className="world-record-list"><p className="world-eyebrow">Documentation</p><h2 className="world-section-title">Operational <span className="gold">Records</span></h2><p>Moments of carry, access, grip, and performance recorded where readiness matters.</p>{records.map(([badge, name, note, copyTitle, copy]) => <article className="world-record" key={name}><p className="world-eyebrow">{badge}</p><h3>{name}</h3><p>{note}</p><div className="world-record-rows"><div><span>World</span><strong>Vanguard</strong></div><div><span>Status</span><strong>Restricted archive</strong></div><div><span>Archive note</span><strong>Not publicly disclosed</strong></div></div><div className="world-note"><strong>{copyTitle}</strong><br />{copy}<br />3 stills in stack</div></article>)}</section>

        <section className="world-record-list"><p className="world-eyebrow">Making</p><h2 className="world-section-title">From Forge to <span className="gold">Readiness</span></h2><p>What begins at the forge is shaped toward control, retention, confidence, and reliable performance in hand.</p><div className="world-grid">{processItems.map(([kicker, title, src]) => <article className="world-card" key={title}><img className="world-card-media" src={asset(src)} alt={title} /><div className="world-card-content"><span>{kicker}</span><strong>{title}</strong></div></article>)}</div></section>

        <section className="world-split"><div className="world-panel"><p className="world-eyebrow">Archive</p><h2 className="world-section-title">Documented <span className="gold">Legacy</span></h2><p>A deeper record of earlier pieces, operational documentation, and the work that shaped the lineage.</p><div className="world-actions"><a className="world-link" href="/the-vault">Explore earlier records</a></div></div><img className="world-media" src={asset('media/pages/vanguard/records/vanguard-archive-preview-desktop-v1.avif')} alt="Documented Legacy" /></section>

        <section className="world-cta"><p className="world-eyebrow">START HERE</p><h2>The Right Tool Starts With Absolute Clarity.</h2><p>Whether you want to begin from a piece you’ve seen, or shape something more specific to your role, context, and carry—the next step is qualification.</p><div className="world-note"><strong>Restricted Access:<br />Vanguard</strong><br />This tier is not publicly available.<br />Access is strictly limited to:<ul><li>Government Entities</li><li>Security Professionals</li><li>Verified Law Enforcement Personnel</li></ul><em>&gt; Subject to review and applicable regulations.</em></div><div className="world-actions"><a className="world-link primary" href="/request-a-blade">Are You Qualified? | Begin Qualification</a></div></section>
      </div>
    </main>
  );
}

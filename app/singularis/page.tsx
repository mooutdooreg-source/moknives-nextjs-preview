const asset = (path: string) => `/assets/${path}`;

const features = [
  ['01', 'One-of-One Presence', 'Designed around singular material, line, and collector intent.'],
  ['02', 'Material Depth', 'Finished for detail, contrast, controlled drama, and a long second look.'],
  ['03', 'Heirloom Identity', 'Built as an object with a clear point of view and unmistakable ownership.'],
];

const featuredPieces = [
  ['Made to exist once.', 'Presence / sculptural balance', 'media/pages/singularis/hero/singularis-hero-feature-1-desktop-v1.avif'],
  ['Detail. Material. Identity.', 'Finish / line / unmistakable form', 'media/pages/singularis/records/singularis-feature-2-desktop-v1.avif'],
  ['Built as a legacy object.', 'Sheath / artifact / one-of-one', 'media/pages/singularis/records/singularis-feature-3-desktop-v1.avif'],
];

const records = [
  ['Record 041', 'Harpoon Utility', 'A one-of-one record should feel collected, not catalogued. The stack hints at depth without flooding the page.', 'Inside the record', 'The gallery opens only inside the piece page, preserving the sense of rarity while still allowing fuller inspection.'],
  ['Record 044', 'One-of-One Presence', 'Rarity first. The note stays small, the visual stack does the invitation, and the detail page keeps the atmosphere intact.', 'Selective reveal', 'The public preview stays elegant, then the detail page takes over with fullscreen stills from the assigned set only.'],
];

const processItems = [
  ['Lead Image', 'Detail / Material Fit', 'media/pages/singularis/records/singularis-process-1-desktop-v1.avif'],
  ['01', 'Forging', 'media/pages/singularis/records/singularis-process-2-desktop-v1.avif'],
  ['02', 'Grinding', 'media/pages/singularis/records/singularis-process-3-desktop-v1.avif'],
  ['03', 'Finishing', 'media/pages/singularis/records/singularis-process-4-desktop-v1.avif'],
];

export default function SingularisPage() {
  return (
    <main className="world-page">
      <div className="world-frame">
        <section className="world-hero">
          <video className="world-media" autoPlay muted loop playsInline preload="metadata">
            <source src={asset('media/pages/singularis/hero/singularis-hero-bg-desktop-v1.mp4')} type="video/mp4" />
          </video>
          <div className="world-copy">
            <p className="world-eyebrow">Singularis</p>
            <h1 className="world-title"><span>For the piece that</span><span>should</span><span className="gold">Never</span><span>be made twice.</span></h1>
            <p>One-of-one blades shaped for singular presence, unmistakable detail, and heirloom-grade identity.</p>
            <div className="world-features" aria-label="Singularis key principles">{features.map(([number, title, text]) => <div className="world-feature" key={title}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div>
            <div className="world-actions"><a className="world-link primary" href="/request-a-blade">START THE CONVERSATION →</a><a className="world-link" href="#featured">Explore Singularis</a></div>
          </div>
        </section>

        <section className="world-split"><div className="world-panel"><p className="world-eyebrow">World Statement</p><h2 className="world-section-title">What <span className="gold">Singularis Demands</span></h2><p>Singularis belongs to the rare commission, where repetition is the wrong outcome. Here, the blade is not selected from a category but shaped into a presence that cannot be mistaken for anything else. These pieces are built for distinction, material depth, controlled drama, and the kind of detail that rewards a long second look.</p></div><div className="world-panel"><p className="world-eyebrow">MAKER DETAIL</p><h2 className="world-section-title">Form / line / <span className="gold">singular finish</span></h2></div></section>

        <section id="featured" className="world-record-list"><p className="world-eyebrow">Featured Pieces</p><h2 className="world-section-title">Selected as <span className="gold">One-of-one</span></h2><p>A curated selection shaped by singular presence, sculptural detail, and collector-grade intent.</p><div className="world-grid">{featuredPieces.map(([title, note, src]) => <article className="world-card" key={title}><img className="world-card-media" src={asset(src)} alt={title} /><div className="world-card-content"><strong>{title}</strong><span>{note}</span></div></article>)}</div></section>

        <section className="world-record-list"><p className="world-eyebrow">Documentation</p><h2 className="world-section-title">Commission <span className="gold">Records</span></h2><p>Moments of detail, finish, presence, and ownership recorded beyond repeatable work.</p>{records.map(([badge, name, note, copyTitle, copy]) => <article className="world-record" key={name}><p className="world-eyebrow">{badge}</p><h3>{name}</h3><p>{note}</p><div className="world-record-rows"><div><span>World</span><strong>Singularis</strong></div><div><span>Status</span><strong>Archived / Sold</strong></div><div><span>Archive note</span><strong>Dimensions not verified</strong></div></div><div className="world-note"><strong>{copyTitle}</strong><br />{copy}<br />3 stills in stack</div></article>)}</section>

        <section className="world-record-list"><p className="world-eyebrow">Making</p><h2 className="world-section-title">From Vision to <span className="gold">One-of-One</span></h2><p>What begins as material and intent is shaped toward singular identity, controlled detail, and heirloom presence.</p><div className="world-grid">{processItems.map(([kicker, title, src]) => <article className="world-card" key={title}><img className="world-card-media" src={asset(src)} alt={title} /><div className="world-card-content"><span>{kicker}</span><strong>{title}</strong></div></article>)}</div></section>

        <section className="world-split"><div className="world-panel"><p className="world-eyebrow">Archive</p><h2 className="world-section-title">Documented <span className="gold">Legacy</span></h2><p>A deeper record of earlier one-of-one pieces, material studies, and the work that shaped the lineage.</p><div className="world-actions"><a className="world-link" href="/the-vault">Explore earlier records</a></div></div><img className="world-media" src={asset('media/pages/singularis/records/singularis-record-5-main-desktop-v1.avif')} alt="Documented Legacy" /></section>

        <section className="world-cta"><p className="world-eyebrow">START HERE</p><h2>The Right One-of-One Starts With Absolute Clarity.</h2><p>Whether you want to begin from a piece you’ve seen, or define something unmistakably your own, the next step is a clear commission conversation.</p><div className="world-note"><strong>Singularis Brief</strong><br />Start from the identity: materials, presence, finish, intended ownership, and the point of view this piece needs to hold.</div><div className="world-actions"><a className="world-link primary" href="/request-a-blade">Start The Conversation</a></div></section>
      </div>
    </main>
  );
}

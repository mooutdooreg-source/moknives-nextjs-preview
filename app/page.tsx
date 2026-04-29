const asset = (path: string) => `/assets/${path}`;

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'The Vault', href: '#vault' },
  { label: 'Why Mo', href: '#why-mo' },
  { label: 'Limited Drop', href: '#limited-drop' },
  { label: 'Edge Academy', href: '#edge-academy' },
  { label: 'Mo Gear', href: '#mo-gear' },
  { label: 'Contact', href: '#contact' },
];

const proofItems = [
  { label: 'Field-first design logic', icon: 'field' },
  { label: 'Thermal refinement for real use', icon: 'fire' },
  { label: 'Geometry tuned for contact', icon: 'geometry' },
  { label: 'Proof before presentation', icon: 'proof' },
] as const;

const proofLoop = [...proofItems, ...proofItems, ...proofItems];

type ProofIconName = typeof proofItems[number]['icon'];

function ProofIcon({ name }: { name: ProofIconName }) {
  if (name === 'field') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 45c9-10 20-15 36-16" />
        <path d="M18 35c7-5 15-8 27-9" />
        <path d="M32 14v36" />
        <path d="M20 50l12-24 12 24" />
        <circle cx="32" cy="14" r="4" />
      </svg>
    );
  }

  if (name === 'fire') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M34 56c11-5 17-13 17-23 0-8-4-15-11-23 1 9-4 14-10 18 0-8-3-14-9-20 1 14-8 20-8 31 0 10 8 17 21 17z" />
        <path d="M33 52c5-3 8-7 8-12 0-4-2-8-6-12 0 5-3 8-7 10 0-4-2-8-5-11 0 8-4 11-4 17 0 5 5 8 14 8z" />
      </svg>
    );
  }

  if (name === 'geometry') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <circle cx="32" cy="32" r="22" />
        <path d="M32 8v12" />
        <path d="M32 44v12" />
        <path d="M8 32h12" />
        <path d="M44 32h12" />
        <path d="M18 43c11-17 22-25 35-30-5 13-14 25-31 34" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <path d="M32 8l21 9v15c0 13-8 22-21 28-13-6-21-15-21-28V17l21-9z" />
      <path d="M22 33l8 8 16-19" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="announcement-bar">
          <div className="announcement-track">
            <div className="announcement-copy">Mo Knives — Hand Forged Since 2015</div>
            <div className="announcement-copy">Field Proven. No Theater.</div>
            <div className="announcement-copy">Built for Real Use</div>
          </div>
        </div>

        <div className="header-row">
          <a className="brand-lockup" href="/" aria-label="Mo Knives home">
            <img className="brand-logo" src={asset('media/shared/brand/logo.svg')} alt="Mo Knives logo" />
            <span className="brand-name">Mo Knives</span>
          </a>

          <nav className="header-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>

          <a href="#request" className="request-button">Request Entry</a>
        </div>
      </header>

      <section className="hero media-hero">
        <img
          className="hero-bg"
          src={asset('media/pages/home/hero/home-hero-bg-desktop-v1.avif')}
          alt="Mo Knives forge hero scene"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow badge-row">
            <img src={asset('media/shared/brand/abs-member-badge.svg')} alt="American Bladesmith Society Member badge" />
            American Bladesmith Society Member
          </p>
          <h1 className="hero-title">
            Forging Your <span>Future History</span>
          </h1>
          <p className="hero-copy">
            Functional legacies. Built for the wild, the mission, and the fire.
          </p>

          <div className="hero-actions">
            <a href="#request" className="button-primary">Request Entry</a>
            <a href="#vault" className="button-secondary">Enter The Vault</a>
          </div>
        </div>
      </section>

      <section className="proof-strip proof-marquee" aria-label="Mo Knives proof points">
        <div className="proof-marquee-track">
          {proofLoop.map((item, index) => (
            <span className="proof-marquee-item" key={`${item.label}-${index}`}>
              <span className="proof-icon"><ProofIcon name={item.icon} /></span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>
      </section>

      <section id="why-mo" className="section">
        <div className="container split">
          <div>
            <p className="section-label">Field Foundation</p>
            <h2 className="section-title">Before the Forge, There Was the Field</h2>
            <p className="section-copy">
              My work did not begin at the anvil. It began in the field — as a hunter, angler, and open-fire cook — shaped by the demanding reality of use.
            </p>
            <p className="section-copy">
              Mo Knives exists where raw durability, disciplined craftsmanship, and purpose meet without pretense.
            </p>
          </div>

          <figure className="media-card tall">
            <img src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="Why Mo atmosphere and workshop origin" />
          </figure>
        </div>
      </section>

      <section className="section alt" id="edge-academy">
        <div className="container split reverse">
          <figure className="media-card">
            <video autoPlay muted loop playsInline preload="metadata" poster={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-poster-desktop-v1.jpg')}>
              <source src={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-desktop-v1.mp4')} type="video/mp4" />
            </video>
          </figure>

          <div>
            <p className="section-label">Performance Proof</p>
            <h2 className="section-title">No Theater. Only Performance.</h2>
            <p className="section-copy">
              Steel, heat treatment, and geometry only matter when performance confirms them. The bench, the stone, and the cut all have to agree before a theory earns trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container section-heading-center">
          <p className="section-label">Process Proof</p>
          <h2 className="section-title">Built in Stages, Proven in Contact</h2>
          <p className="section-copy centered-copy">
            Forging, grinding, heat treatment, sharpening, and testing are not decorative chapters. They are the controlled sequence that turns material into a dependable tool.
          </p>
        </div>
        <div className="container process-gallery">
          <figure className="media-card process-card">
            <img src={asset('media/pages/why-mo/process/why-mo-process-grinding-desktop-v1.png')} alt="Grinding and process proof inside the Mo workshop" />
          </figure>
          <figure className="media-card process-card">
            <img src={asset('media/pages/why-mo/process/why-mo-process-heat-treatment-desktop-v1.avif')} alt="Precision heat treatment detail" />
          </figure>
        </div>
      </section>

      <section id="vault" className="section vault-section">
        <div className="container split">
          <div>
            <p className="section-label">The Vault</p>
            <h2 className="section-title">A Living Record of Functional Legacies</h2>
            <p className="section-copy">
              The Vault shows the real work that came out of this standard — the blades, the worlds they belong to, and the proof behind them.
            </p>
            <a href="#request" className="button-primary section-cta">Request Entry</a>
          </div>

          <figure className="media-card wide">
            <img src={asset('media/pages/the-vault/hero/vault-hero-main-desktop-v1.avif')} alt="Mo Knives vault hero" />
          </figure>
        </div>
      </section>

      <section id="limited-drop" className="section alt compact-section">
        <div className="container compact-grid">
          <div>
            <p className="section-label">Limited Drop</p>
            <h2 className="section-title">Small Batch. Clear Purpose.</h2>
          </div>
          <div id="mo-gear" className="compact-note">Mo Gear and future drops will be expanded in the next migration pass.</div>
        </div>
      </section>

      <section id="request" className="request-panel">
        <div className="container request-inner">
          <p className="section-label">Next Step</p>
          <h2 className="section-title">Request Entry</h2>
          <p className="section-copy centered-copy">A tighter request flow and dedicated form route will be migrated next.</p>
          <a href="mailto:hello@moknives.com" className="button-primary">Contact Mo Knives</a>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Mo Knives</span>
          <span>Hand-Forged. Field-Proven.</span>
        </div>
      </footer>
    </main>
  );
}

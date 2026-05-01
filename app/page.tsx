const asset = (path: string) => `/assets/${path}`;

const proofItems = [
  { label: 'Field-first design logic', icon: 'field' },
  { label: 'Thermal refinement for real use', icon: 'fire' },
  { label: 'Geometry tuned for contact', icon: 'geometry' },
  { label: 'Proof before presentation', icon: 'proof' },
] as const;

const proofLoop = [...proofItems, ...proofItems, ...proofItems];

type ProofIconName = typeof proofItems[number]['icon'];

function ProofIcon({ name }: { name: ProofIconName }) {
  const stroke = '#D6A85A';

  if (name === 'field') {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M32 8l24 14v24L32 60 8 46V22L32 8z" />
        <path d="M16 43l10-15 7 10 6-8 9 13" />
        <path d="M23 43h26" />
      </svg>
    );
  }

  if (name === 'fire') {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M18 54h28" />
        <path d="M18 45h28" />
        <path d="M20 45V26c0-7 5-12 12-12s12 5 12 12v19" />
        <path d="M24 45V27c0-5 3-9 8-9s8 4 8 9v18" />
        <path d="M32 41c5-3 8-7 8-13 0-5-3-9-7-14 0 6-3 9-6 12 0-4-2-8-5-12 0 10-6 14-6 22 0 5 5 8 16 5z" />
      </svg>
    );
  }

  if (name === 'geometry') {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <circle cx="32" cy="32" r="22" />
        <path d="M17 45L48 14" />
        <path d="M24 50l12-31 14-5-5 14-31 12z" />
        <path d="M18 45l11 11" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M32 8l21 9v15c0 13-8 22-21 28-13-6-21-15-21-28V17l21-9z" />
      <path d="M23 33l7 7 15-18" />
      <path d="M23 18v27" opacity="0.5" />
      <path d="M29 15v35" opacity="0.5" />
      <path d="M35 15v35" opacity="0.5" />
      <path d="M41 18v27" opacity="0.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="mk-premium-page">
      <div className="mk-premium-frame">
        <section className="mk-premium-hero">
          <img
            className="mk-premium-hero__bg"
            src={asset('media/pages/home/hero/home-hero-bg-desktop-v1.avif')}
            alt="Mo Knives forge hero scene"
          />
          <div className="mk-premium-hero__shade" />
          <div className="mk-premium-hero__inner">
            <p className="mk-premium-badge-row">
              <img src={asset('media/shared/brand/abs-member-badge.svg')} alt="American Bladesmith Society Member badge" />
              American Bladesmith Society Member
            </p>
            <h1 className="mk-premium-title">
              Forging Your <span>Future History</span>
            </h1>
            <p className="mk-premium-copy">
              Functional legacies. Built for the wild, the mission, and the fire.
            </p>

            <div className="mk-premium-actions">
              <a href="#request" className="button-primary">Request Entry</a>
              <a href="/the-vault" className="button-secondary">Enter The Vault</a>
            </div>
          </div>
        </section>

        <section className="proof-strip proof-marquee mk-premium-proof" aria-label="Mo Knives proof points">
          <div className="proof-marquee-track">
            {proofLoop.map((item, index) => (
              <span className="proof-marquee-item" key={`${item.label}-${index}`}>
                <span className="proof-icon"><ProofIcon name={item.icon} /></span>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </section>

        <section id="why-mo" className="mk-premium-section">
          <div className="mk-premium-card">
            <img className="mk-premium-card__bg" src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="" />
            <div className="mk-premium-card__shade" />
            <div className="mk-premium-card__content">
              <p className="mk-premium-label">Why Mo</p>
              <h2 className="mk-premium-section-title">Before the Forge, There Was the Field</h2>
              <p className="mk-premium-section-copy">
                Enter the origin page — the field-first logic, craft discipline, proof layer, and reason behind the work.
              </p>
              <a href="/why-mo" className="button-primary section-cta">Open Why Mo</a>
            </div>
          </div>
        </section>

        <section id="vault" className="mk-premium-section">
          <div className="mk-premium-card">
            <img className="mk-premium-card__bg" src={asset('media/pages/the-vault/hero/vault-hero-main-desktop-v1.webp')} alt="" />
            <div className="mk-premium-card__shade" />
            <div className="mk-premium-card__content">
              <p className="mk-premium-label">The Vault</p>
              <h2 className="mk-premium-section-title">A Living Record of Functional Legacies</h2>
              <p className="mk-premium-section-copy">
                The Vault shows the real work that came out of this standard — the blades, the worlds they belong to, and the proof behind them.
              </p>
              <a href="/the-vault" className="button-primary section-cta">Enter The Vault</a>
            </div>
          </div>
        </section>

        <section id="limited-drop" className="mk-premium-section">
          <div className="mk-premium-card mk-premium-card--short mk-premium-limited">
            <div className="mk-premium-card__content">
              <p className="mk-premium-label">Limited Drop</p>
              <h2 className="mk-premium-section-title">Small Batch. Clear Purpose.</h2>
              <div id="mo-gear" className="mk-premium-section-copy">Mo Gear and future drops will be expanded in the next migration pass.</div>
            </div>
          </div>
        </section>

        <section id="request" className="mk-premium-section">
          <div className="mk-premium-card mk-premium-card--short">
            <div className="mk-premium-card__content" style={{ margin: '0 auto', textAlign: 'center' }}>
              <p className="mk-premium-label">Next Step</p>
              <h2 className="mk-premium-section-title">Request Entry</h2>
              <p className="mk-premium-section-copy">A tighter request flow and dedicated form route will be migrated next.</p>
              <a href="mailto:hello@moknives.com" className="button-primary section-cta">Contact Mo Knives</a>
            </div>
          </div>
        </section>
      </div>

      <footer id="contact" className="site-footer mk-premium-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Mo Knives</span>
          <span>Hand-Forged. Field-Proven.</span>
        </div>
      </footer>
    </main>
  );
}

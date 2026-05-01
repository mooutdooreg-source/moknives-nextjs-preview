const asset = (path: string) => `/assets/${path}`;

const homeHeroImage = 'data:image/webp;base64,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';

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
            src={homeHeroImage}
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

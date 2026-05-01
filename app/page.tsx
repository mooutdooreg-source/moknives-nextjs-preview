import type { CSSProperties } from 'react';

const asset = (path: string) => `/assets/${path}`;

const proofItems = [
  { label: 'Field-first design logic', icon: 'field' },
  { label: 'Thermal refinement for real use', icon: 'fire' },
  { label: 'Geometry tuned for contact', icon: 'geometry' },
  { label: 'Proof before presentation', icon: 'proof' },
] as const;

const proofLoop = [...proofItems, ...proofItems, ...proofItems];

type ProofIconName = typeof proofItems[number]['icon'];

const homeShellStyle: CSSProperties = {
  maxWidth: '100%',
  overflowX: 'hidden',
  background:
    'radial-gradient(circle at 50% 0%, rgba(240,162,15,0.12), transparent 26%), radial-gradient(circle at 10% 42%, rgba(217,119,6,0.08), transparent 24%), linear-gradient(180deg, #030303 0%, #090604 44%, #030303 100%)',
};

const homeFrameStyle: CSSProperties = {
  width: 'min(1180px, calc(100vw - 28px))',
  margin: 'clamp(18px, 3vw, 34px) auto',
  display: 'grid',
  gap: 'clamp(18px, 3vw, 26px)',
};

const premiumHeroStyle: CSSProperties = {
  position: 'relative',
  minHeight: 'clamp(560px, 78vh, 760px)',
  display: 'grid',
  alignItems: 'center',
  overflow: 'hidden',
  border: '1px solid rgba(240,162,15,0.24)',
  borderRadius: 'clamp(22px, 4vw, 34px)',
  background: '#050505',
  boxShadow: '0 32px 110px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.055)',
};

const heroBgStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  opacity: 0.86,
  filter: 'brightness(0.72) contrast(1.08) saturate(0.94)',
};

const heroOverlayStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.74) 45%, rgba(0,0,0,0.34) 100%), linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.88))',
};

const heroInnerStyle: CSSProperties = {
  position: 'relative',
  zIndex: 2,
  width: 'min(1040px, calc(100% - 40px))',
  margin: '0 auto',
  padding: 'clamp(42px, 8vw, 86px) 0',
};

const badgeRowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 12,
  maxWidth: '100%',
  margin: 0,
  padding: '10px 14px',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 999,
  background: 'rgba(0,0,0,0.34)',
  color: 'rgba(245,245,245,0.94)',
  fontSize: 'clamp(9px, 2vw, 11px)',
  fontWeight: 900,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  backdropFilter: 'blur(8px)',
};

const heroTitleStyle: CSSProperties = {
  maxWidth: 760,
  margin: 'clamp(18px, 4vw, 28px) 0 clamp(16px, 3vw, 24px)',
  fontFamily: 'Cinzel, serif',
  fontSize: 'clamp(48px, 9vw, 96px)',
  lineHeight: 0.96,
  letterSpacing: '-0.045em',
  textTransform: 'uppercase',
  color: 'rgba(255,250,242,0.98)',
  textShadow: '0 1px 0 rgba(255,255,255,0.16), 0 24px 46px rgba(0,0,0,0.62)',
};

const heroCopyStyle: CSSProperties = {
  maxWidth: 560,
  margin: 0,
  color: 'rgba(245,245,245,0.86)',
  fontSize: 'clamp(16px, 3vw, 20px)',
  lineHeight: 1.68,
};

const heroActionsStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  marginTop: 'clamp(24px, 5vw, 34px)',
};

const premiumProofStyle: CSSProperties = {
  overflow: 'hidden',
  border: '1px solid rgba(240,162,15,0.2)',
  borderRadius: 'clamp(16px, 4vw, 26px)',
  background:
    'radial-gradient(circle at 50% 0%, rgba(240,162,15,0.12), transparent 46%), linear-gradient(90deg, rgba(0,0,0,0.96), rgba(24,14,5,0.92))',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.045)',
};

const cardSectionStyle: CSSProperties = {
  padding: 0,
  background: 'transparent',
};

const featureCardStyle: CSSProperties = {
  position: 'relative',
  minHeight: 'clamp(390px, 56vw, 520px)',
  overflow: 'hidden',
  border: '1px solid rgba(240,162,15,0.24)',
  borderRadius: 'clamp(22px, 4vw, 32px)',
  background: '#050505',
  boxShadow: '0 26px 90px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.055)',
};

const featureBgStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  opacity: 0.72,
  filter: 'brightness(0.66) contrast(1.08) saturate(0.92)',
};

const featureShadeStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.72) 48%, rgba(0,0,0,0.22) 100%), linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.86))',
};

const featureContentStyle: CSSProperties = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 620,
  minHeight: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 'clamp(28px, 6vw, 58px)',
};

const labelStyle: CSSProperties = {
  margin: 0,
  color: '#f0a20f',
  fontSize: 'clamp(10px, 2vw, 12px)',
  fontWeight: 900,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
};

const titleStyle: CSSProperties = {
  maxWidth: 650,
  margin: 'clamp(14px, 3vw, 20px) 0 clamp(12px, 3vw, 18px)',
  fontFamily: 'Cinzel, serif',
  fontSize: 'clamp(34px, 7vw, 62px)',
  lineHeight: 1.02,
  letterSpacing: '-0.028em',
  textTransform: 'uppercase',
  color: 'rgba(255,250,242,0.98)',
  textShadow: '0 18px 38px rgba(0,0,0,0.58)',
};

const copyStyle: CSSProperties = {
  maxWidth: 520,
  margin: 0,
  color: 'rgba(245,245,245,0.82)',
  fontSize: 'clamp(15px, 3vw, 18px)',
  lineHeight: 1.72,
};

const limitedCardStyle: CSSProperties = {
  ...featureCardStyle,
  minHeight: 'clamp(320px, 48vw, 440px)',
  background:
    'radial-gradient(circle at 86% 28%, rgba(240,162,15,0.16), transparent 28%), radial-gradient(circle at 18% 82%, rgba(217,119,6,0.13), transparent 28%), linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))',
};

const limitedContentStyle: CSSProperties = {
  ...featureContentStyle,
  maxWidth: 720,
};

const footerStyle: CSSProperties = {
  width: 'min(1180px, calc(100vw - 28px))',
  margin: '0 auto clamp(20px, 4vw, 34px)',
  padding: '20px clamp(18px, 4vw, 32px)',
  border: '1px solid rgba(240,162,15,0.14)',
  borderRadius: '0 0 24px 24px',
  background: 'rgba(0,0,0,0.52)',
};

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
    <main style={homeShellStyle}>
      <div style={homeFrameStyle}>
        <section className="hero media-hero" style={premiumHeroStyle}>
          <img
            className="hero-bg"
            src={asset('media/pages/home/hero/home-hero-bg-desktop-v1.avif')}
            alt="Mo Knives forge hero scene"
            style={heroBgStyle}
          />
          <div className="hero-overlay" style={heroOverlayStyle} />
          <div className="hero-inner" style={heroInnerStyle}>
            <p className="eyebrow badge-row" style={badgeRowStyle}>
              <img src={asset('media/shared/brand/abs-member-badge.svg')} alt="American Bladesmith Society Member badge" style={{ width: 'auto', height: 34, objectFit: 'contain', flex: '0 0 auto' }} />
              American Bladesmith Society Member
            </p>
            <h1 className="hero-title" style={heroTitleStyle}>
              Forging Your <span style={{ display: 'block', color: '#f0a20f' }}>Future History</span>
            </h1>
            <p className="hero-copy" style={heroCopyStyle}>
              Functional legacies. Built for the wild, the mission, and the fire.
            </p>

            <div className="hero-actions" style={heroActionsStyle}>
              <a href="#request" className="button-primary">Request Entry</a>
              <a href="/the-vault" className="button-secondary">Enter The Vault</a>
            </div>
          </div>
        </section>

        <section className="proof-strip proof-marquee" aria-label="Mo Knives proof points" style={premiumProofStyle}>
          <div className="proof-marquee-track">
            {proofLoop.map((item, index) => (
              <span className="proof-marquee-item" key={`${item.label}-${index}`}>
                <span className="proof-icon"><ProofIcon name={item.icon} /></span>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </section>

        <section id="why-mo" className="section vault-section vault-link-section" style={cardSectionStyle}>
          <div className="container vault-link-card" style={featureCardStyle}>
            <img className="vault-link-bg" src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="" style={featureBgStyle} />
            <div style={featureShadeStyle} />
            <div className="vault-link-content" style={featureContentStyle}>
              <p className="section-label" style={labelStyle}>Why Mo</p>
              <h2 className="section-title" style={titleStyle}>Before the Forge, There Was the Field</h2>
              <p className="section-copy" style={copyStyle}>
                Enter the origin page — the field-first logic, craft discipline, proof layer, and reason behind the work.
              </p>
              <a href="/why-mo" className="button-primary section-cta">Open Why Mo</a>
            </div>
          </div>
        </section>

        <section id="vault" className="section vault-section vault-link-section" style={cardSectionStyle}>
          <div className="container vault-link-card" style={featureCardStyle}>
            <img className="vault-link-bg" src={asset('media/pages/the-vault/hero/vault-hero-main-desktop-v1.webp')} alt="" style={{ ...featureBgStyle, objectPosition: 'center' }} />
            <div style={featureShadeStyle} />
            <div className="vault-link-content" style={featureContentStyle}>
              <p className="section-label" style={labelStyle}>The Vault</p>
              <h2 className="section-title" style={titleStyle}>A Living Record of Functional Legacies</h2>
              <p className="section-copy" style={copyStyle}>
                The Vault shows the real work that came out of this standard — the blades, the worlds they belong to, and the proof behind them.
              </p>
              <a href="/the-vault" className="button-primary section-cta">Enter The Vault</a>
            </div>
          </div>
        </section>

        <section id="limited-drop" className="section alt compact-section" style={cardSectionStyle}>
          <div className="container compact-grid" style={limitedCardStyle}>
            <div style={limitedContentStyle}>
              <p className="section-label" style={labelStyle}>Limited Drop</p>
              <h2 className="section-title" style={titleStyle}>Small Batch. Clear Purpose.</h2>
              <div id="mo-gear" className="compact-note" style={{ ...copyStyle, marginTop: 'clamp(6px, 2vw, 12px)' }}>Mo Gear and future drops will be expanded in the next migration pass.</div>
            </div>
          </div>
        </section>

        <section id="request" className="request-panel" style={{ ...cardSectionStyle, textAlign: 'center' }}>
          <div className="container request-inner" style={{ ...featureCardStyle, minHeight: 'auto', padding: 'clamp(32px, 6vw, 58px)' }}>
            <p className="section-label" style={{ ...labelStyle, textAlign: 'center' }}>Next Step</p>
            <h2 className="section-title" style={{ ...titleStyle, marginInline: 'auto', textAlign: 'center' }}>Request Entry</h2>
            <p className="section-copy centered-copy" style={{ ...copyStyle, margin: '0 auto' }}>A tighter request flow and dedicated form route will be migrated next.</p>
            <a href="mailto:hello@moknives.com" className="button-primary" style={{ marginTop: 'clamp(22px, 4vw, 30px)' }}>Contact Mo Knives</a>
          </div>
        </section>
      </div>

      <footer id="contact" className="site-footer" style={footerStyle}>
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Mo Knives</span>
          <span>Hand-Forged. Field-Proven.</span>
        </div>
      </footer>
    </main>
  );
}

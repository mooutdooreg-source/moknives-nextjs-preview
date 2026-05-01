const asset = (path: string) => `/assets/${path}`;

const narrativeSectionStyle = {
  padding: 'clamp(48px, 8vw, 96px) 0',
};

const narrativeWrapStyle = {
  display: 'grid',
  gap: 'clamp(18px, 4vw, 30px)',
  maxWidth: '880px',
};

const narrativeTextStyle = {
  position: 'relative' as const,
  padding: 'clamp(22px, 6vw, 42px)',
  border: '1px solid rgba(217,119,6,0.18)',
  borderRadius: 'clamp(20px, 5vw, 32px)',
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.066), rgba(255,255,255,0.018)), radial-gradient(circle at 0% 0%, rgba(240,162,15,0.11), transparent 42%)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 70px rgba(0,0,0,0.32)',
  overflow: 'hidden',
};

const narrativeCopyStyle = {
  maxWidth: '720px',
  color: 'rgba(245,245,245,0.84)',
  fontSize: 'clamp(16px, 4.15vw, 19px)',
  lineHeight: 1.92,
  margin: 0,
  fontWeight: 400,
  letterSpacing: '0.01em',
};

const narrativeMediaStyle = {
  position: 'relative' as const,
  width: '100%',
  minHeight: 'clamp(330px, 72vw, 620px)',
  borderRadius: 'clamp(22px, 5vw, 34px)',
  overflow: 'hidden',
  border: '1px solid rgba(240,162,15,0.24)',
  background: 'rgba(255,255,255,0.035)',
  boxShadow: '0 30px 86px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.04) inset',
};

const narrativeMediaImageStyle = {
  width: '100%',
  height: '100%',
  minHeight: 'inherit',
  objectFit: 'cover' as const,
};

const narrativeAbsImageStyle = {
  width: '100%',
  height: '100%',
  minHeight: 'inherit',
  objectFit: 'contain' as const,
  padding: 'clamp(34px, 12vw, 86px)',
  background: 'radial-gradient(circle at 50% 42%, rgba(240,162,15,0.16), rgba(255,255,255,0.018) 58%, rgba(0,0,0,0.2))',
};

const firstParagraphAccentStyle = {
  marginTop: 'clamp(18px, 4vw, 26px)',
  paddingTop: 'clamp(18px, 4vw, 24px)',
  borderTop: '1px solid rgba(240,162,15,0.18)',
};

export default function WhyMoPage() {
  return (
    <main className="page-shell">
      <section className="section page-hero-simple">
        <div className="container section-heading-center">
          <figure
            className="why-mo-hero-badge"
            style={{
              width: 'min(170px, 42vw)',
              margin: '0 auto 22px',
              filter: 'drop-shadow(0 18px 34px rgba(0, 0, 0, 0.42)) drop-shadow(0 0 24px rgba(240, 162, 15, 0.14))',
              opacity: 0.96,
            }}
          >
            <img
              src={asset('media/pages/why-mo/hero/why-mo-hero-custom-maker-bladesmith-badge-desktop-v1.png')}
              alt="Custom knife maker and bladesmith badge"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </figure>
          <p className="section-label">WHY MO / ORIGIN</p>
          <h1 className="section-title page-title">WHY MO</h1>
          <p className="section-copy centered-copy">My work did not begin at the anvil. It began in the field — as a hunter, angler, and open-fire cook — shaped by the demanding reality of use.</p>
          <p className="section-copy centered-copy">Not a gallery. Not a marketplace. A living record of functional legacies — built to explain why the work deserves trust before it asks for attention.</p>
        </div>
      </section>

      <section className="section" style={narrativeSectionStyle}>
        <div className="container" style={narrativeWrapStyle}>
          <div style={narrativeTextStyle}>
            <p className="section-label">FIELD FOUNDATION</p>
            <h2 className="section-title">BEFORE THE FORGE,<br />THERE WAS THE FIELD</h2>
            <p style={{ ...narrativeCopyStyle, ...firstParagraphAccentStyle }}>Working under the name Mo since 2015, I built my foundation in the field first — where a knife had to be more than sharp; it had to be dependable.</p>
          </div>
          <figure style={narrativeMediaStyle}>
            <img src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="Why Mo atmosphere and workshop origin" style={narrativeMediaImageStyle} />
          </figure>
          <div style={narrativeTextStyle}>
            <p style={narrativeCopyStyle}>That same standard later found its way into the culinary world through co-founding ECC as Master Bladesmith and designer, creating for renowned chefs and some of the most exacting fine-dining, steakhouse, and Japanese culinary environments. Mo Knives exists where those worlds meet: raw durability, disciplined craftsmanship, and purpose without pretense.</p>
          </div>
        </div>
      </section>

      <section className="section alt" style={narrativeSectionStyle}>
        <div className="container" style={narrativeWrapStyle}>
          <div style={narrativeTextStyle}>
            <p className="section-label">CRAFT LOGIC</p>
            <h2 className="section-title">THE LOGIC OF THE BLADE</h2>
            <p style={{ ...narrativeCopyStyle, ...firstParagraphAccentStyle }}>Thermal refinement is tuned for resilience, retention, and the task the blade is expected to survive. Numbers without context are theater. The meaningful question is whether hardness, toughness, and stability serve the knife’s intended work.</p>
          </div>
          <figure style={narrativeMediaStyle}>
            <img src={asset('media/pages/why-mo/process/why-mo-process-heat-treatment-desktop-v1.avif')} alt="Precision heat treatment and blade logic detail" style={narrativeMediaImageStyle} />
          </figure>
          <div style={narrativeTextStyle}>
            <p style={narrativeCopyStyle}>From edge thickness to grind choice, every line has to justify itself in contact. A knife can be beautifully finished and still feel wrong in the cut. Geometry is what decides resistance, bite, food release, durability, and control.</p>
          </div>
        </div>
      </section>

      <section className="section" style={narrativeSectionStyle}>
        <div className="container" style={narrativeWrapStyle}>
          <div style={narrativeTextStyle}>
            <p className="section-label">PERFORMANCE PROOF</p>
            <h2 className="section-title">NO THEATER. ONLY<br />PERFORMANCE.</h2>
            <p style={{ ...narrativeCopyStyle, ...firstParagraphAccentStyle }}>No cosmetic excess. No empty claims. Only honest construction that earns trust when the blade meets real resistance.</p>
          </div>
          <figure style={narrativeMediaStyle}>
            <video autoPlay muted loop playsInline preload="metadata" poster={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-poster-desktop-v1.jpg')} aria-label="Performance proof cutting test video" style={narrativeMediaImageStyle}>
              <source src={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-desktop-v1.mp4')} type="video/mp4" />
            </video>
          </figure>
          <div style={narrativeTextStyle}>
            <p style={narrativeCopyStyle}>Steel, heat treatment, and geometry only matter when performance confirms them. The bench, the stone, and the cut all have to agree before a theory earns trust.</p>
          </div>
        </div>
      </section>

      <section className="section alt" style={narrativeSectionStyle}>
        <div className="container" style={narrativeWrapStyle}>
          <div style={narrativeTextStyle}>
            <p className="section-label">PROCESS PROOF</p>
            <h2 className="section-title">BUILT IN STAGES,<br />PROVEN IN CONTACT</h2>
            <p style={{ ...narrativeCopyStyle, ...firstParagraphAccentStyle }}>Forging, grinding, heat treatment, sharpening, and testing are not decorative chapters. They are the controlled sequence that turns material into a dependable tool.</p>
          </div>
          <figure style={narrativeMediaStyle}>
            <img src={asset('media/pages/why-mo/process/why-mo-process-grinding-desktop-v1.png')} alt="Grinding and process proof inside the Mo workshop" style={narrativeMediaImageStyle} />
          </figure>
          <div style={narrativeTextStyle}>
            <p style={narrativeCopyStyle}>Each stage has to support the next: the profile must serve the hand, the grind must serve the cut, the heat treatment must serve the steel, and the final edge must serve real use.</p>
          </div>
        </div>
      </section>

      <section className="section" style={narrativeSectionStyle}>
        <div className="container" style={narrativeWrapStyle}>
          <div style={narrativeTextStyle}>
            <p className="section-label">TRUST LAYER</p>
            <h2 className="section-title">FUNCTIONAL LEGACIES,<br />NOT DECORATIVE CLAIMS</h2>
            <p style={{ ...narrativeCopyStyle, ...firstParagraphAccentStyle }}>ABS Member. Forging since 2015 under the name Mo. Building for the wild, the mission, the kitchen, and the long life of an heirloom.</p>
          </div>
          <figure style={narrativeMediaStyle}>
            <img src={asset('media/pages/why-mo/proof/why-mo-proof-abs-member-desktop-v1.svg')} alt="ABS member and trust proof for Mo Knives" style={narrativeAbsImageStyle} />
          </figure>
          <div style={narrativeTextStyle}>
            <p style={narrativeCopyStyle}>The goal is not to make every blade feel dramatic. The goal is to make every detail earn its place through construction, control, and proof.</p>
          </div>
        </div>
      </section>

      <section className="request-panel">
        <div className="container request-inner">
          <p className="section-label">NEXT STEP</p>
          <h2 className="section-title">ENTER THE VAULT</h2>
          <p className="section-copy centered-copy">Now that the reason is clear, enter the record. The Vault shows the real work that came out of this standard — the blades, the worlds they belong to, and the proof behind them.</p>
          <a href="/the-vault" className="button-primary">ENTER THE VAULT</a>
        </div>
      </section>
    </main>
  );
}

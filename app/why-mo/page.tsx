import type { CSSProperties, ReactNode } from 'react';

const asset = (path: string) => `/assets/${path}`;

const pageShellStyle: CSSProperties = {
  background:
    'radial-gradient(circle at 50% 2%, rgba(240,162,15,0.12), transparent 22%), radial-gradient(circle at 8% 24%, rgba(217,119,6,0.08), transparent 24%), linear-gradient(180deg, #050505 0%, #090704 42%, #050505 100%)',
};

const heroSectionStyle: CSSProperties = {
  padding: 'clamp(58px, 9vw, 112px) 0 clamp(46px, 7vw, 84px)',
};

const luxuryPanelStyle: CSSProperties = {
  position: 'relative',
  width: 'min(1120px, calc(100% - 32px))',
  margin: '0 auto',
  padding: 'clamp(30px, 6vw, 70px) clamp(18px, 5vw, 78px)',
  border: '1px solid rgba(240,162,15,0.2)',
  borderRadius: 'clamp(22px, 4vw, 42px)',
  background:
    'radial-gradient(circle at 50% 0%, rgba(240,162,15,0.13), transparent 32%), radial-gradient(circle at 50% 100%, rgba(217,119,6,0.09), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 80px rgba(0,0,0,0.34), 0 30px 90px rgba(0,0,0,0.38)',
  overflow: 'hidden',
  textAlign: 'center',
};

const sectionStyle: CSSProperties = {
  padding: 'clamp(46px, 7vw, 92px) 0',
};

const sectionWrapStyle: CSSProperties = {
  width: 'min(980px, calc(100% - 32px))',
  margin: '0 auto',
  display: 'grid',
  gap: 'clamp(20px, 4vw, 34px)',
};

const textPanelStyle: CSSProperties = {
  position: 'relative',
  padding: 'clamp(24px, 5vw, 50px) clamp(20px, 5vw, 58px)',
  border: '1px solid rgba(240,162,15,0.18)',
  borderRadius: 'clamp(22px, 5vw, 36px)',
  background:
    'radial-gradient(circle at 50% 0%, rgba(240,162,15,0.105), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.052), rgba(255,255,255,0.012))',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -30px 72px rgba(0,0,0,0.16), 0 24px 68px rgba(0,0,0,0.3)',
  overflow: 'hidden',
  textAlign: 'left',
};

const kickerStyle: CSSProperties = {
  margin: 0,
  color: '#f0a20f',
  fontSize: 'clamp(9px, 1.8vw, 12px)',
  fontWeight: 900,
  letterSpacing: '0.26em',
  textTransform: 'uppercase',
};

const heroTitleStyle: CSSProperties = {
  margin: 'clamp(18px, 4vw, 28px) auto clamp(14px, 3vw, 20px)',
  maxWidth: '900px',
  fontFamily: 'Cinzel, serif',
  fontSize: 'clamp(46px, 10vw, 126px)',
  lineHeight: 0.92,
  letterSpacing: '-0.052em',
  textTransform: 'uppercase',
  color: 'rgba(255,250,242,0.98)',
  textShadow: '0 1px 0 rgba(255,255,255,0.18), 0 24px 46px rgba(0,0,0,0.55)',
};

const sectionTitleStyle: CSSProperties = {
  margin: 'clamp(14px, 3vw, 24px) 0 clamp(10px, 2vw, 14px)',
  maxWidth: '760px',
  fontFamily: 'Cinzel, serif',
  fontSize: 'clamp(27px, 6vw, 58px)',
  lineHeight: 1.05,
  letterSpacing: '-0.025em',
  textTransform: 'uppercase',
  color: 'rgba(255,250,242,0.98)',
  textShadow: '0 1px 0 rgba(255,255,255,0.12), 0 16px 34px rgba(0,0,0,0.48)',
};

const copyStyle: CSSProperties = {
  maxWidth: '680px',
  margin: 'clamp(14px, 3vw, 22px) 0 0',
  color: 'rgba(245,245,245,0.83)',
  fontSize: 'clamp(14.5px, 2.8vw, 18px)',
  lineHeight: 1.72,
  letterSpacing: '0.005em',
  fontWeight: 400,
};

const heroCopyStyle: CSSProperties = {
  ...copyStyle,
  maxWidth: '760px',
  margin: 'clamp(16px, 3vw, 24px) auto 0',
  textAlign: 'center',
  fontSize: 'clamp(15px, 2.5vw, 19px)',
  lineHeight: 1.76,
};

const mediaStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: 'clamp(340px, 72vw, 620px)',
  overflow: 'hidden',
  borderRadius: 'clamp(24px, 5vw, 38px)',
  border: '1px solid rgba(240,162,15,0.24)',
  background: 'rgba(255,255,255,0.035)',
  boxShadow: '0 30px 86px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.04) inset',
};

const mediaContentStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: 'inherit',
  objectFit: 'cover',
};

const absBadgeImageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: 'inherit',
  objectFit: 'contain',
  padding: 'clamp(42px, 13vw, 98px)',
  background:
    'radial-gradient(circle at 50% 42%, rgba(240,162,15,0.16), rgba(255,255,255,0.018) 58%, rgba(0,0,0,0.2))',
};

const dividerWrapStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(10px, 3vw, 18px)',
  width: 'min(300px, 72%)',
  margin: 'clamp(14px, 3vw, 22px) 0',
};

const centeredDividerWrapStyle: CSSProperties = {
  ...dividerWrapStyle,
  margin: 'clamp(14px, 3vw, 22px) auto',
};

const dividerLineStyle: CSSProperties = {
  height: '1px',
  flex: 1,
  background: 'linear-gradient(90deg, transparent, rgba(240,162,15,0.72))',
  boxShadow: '0 0 18px rgba(240,162,15,0.18)',
};

const dividerLineRightStyle: CSSProperties = {
  ...dividerLineStyle,
  background: 'linear-gradient(90deg, rgba(240,162,15,0.72), transparent)',
};

const dividerMarkStyle: CSSProperties = {
  width: '7px',
  height: '7px',
  transform: 'rotate(45deg)',
  border: '1px solid rgba(240,162,15,0.78)',
  background: 'rgba(240,162,15,0.28)',
  boxShadow: '0 0 16px rgba(240,162,15,0.36)',
};

function OrnateDivider({ centered = false }: { centered?: boolean }) {
  return (
    <div style={centered ? centeredDividerWrapStyle : dividerWrapStyle} aria-hidden="true">
      <span style={dividerLineStyle} />
      <span style={dividerMarkStyle} />
      <span style={dividerLineRightStyle} />
    </div>
  );
}

function LuxuryText({ label, title, children }: { label: string; title: ReactNode; children: ReactNode }) {
  return (
    <div style={textPanelStyle}>
      <p style={kickerStyle}>{label}</p>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <OrnateDivider />
      <p style={copyStyle}>{children}</p>
    </div>
  );
}

export default function WhyMoPage() {
  return (
    <main className="page-shell" style={pageShellStyle}>
      <section className="section page-hero-simple" style={heroSectionStyle}>
        <div style={luxuryPanelStyle}>
          <figure
            className="why-mo-hero-badge"
            style={{
              width: 'min(170px, 40vw)',
              margin: '0 auto clamp(20px, 4vw, 28px)',
              filter: 'drop-shadow(0 18px 34px rgba(0, 0, 0, 0.42)) drop-shadow(0 0 28px rgba(240, 162, 15, 0.2))',
              opacity: 0.98,
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
          <p style={kickerStyle}>WHY MO / ORIGIN</p>
          <h1 style={heroTitleStyle}>WHY MO</h1>
          <OrnateDivider centered />
          <p style={heroCopyStyle}>My work did not begin at the anvil. It began in the field — as a hunter, angler, and open-fire cook — shaped by the demanding reality of use.</p>
          <p style={heroCopyStyle}>Not a gallery. Not a marketplace. A living record of functional legacies — built to explain why the work deserves trust before it asks for attention.</p>
        </div>
      </section>

      <section className="section" style={sectionStyle}>
        <div className="container" style={sectionWrapStyle}>
          <LuxuryText label="FIELD FOUNDATION" title={<>BEFORE THE FORGE,<br />THERE WAS THE FIELD</>}>
            Working under the name Mo since 2015, I built my foundation in the field first — where a knife had to be more than sharp; it had to be dependable.
          </LuxuryText>
          <figure style={mediaStyle}>
            <img src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="Why Mo atmosphere and workshop origin" style={mediaContentStyle} />
          </figure>
          <LuxuryText label="FIELD STANDARD" title="WHERE THE WORLDS MEET">
            That same standard later found its way into the culinary world through co-founding ECC as Master Bladesmith and designer, creating for renowned chefs and some of the most exacting fine-dining, steakhouse, and Japanese culinary environments. Mo Knives exists where those worlds meet: raw durability, disciplined craftsmanship, and purpose without pretense.
          </LuxuryText>
        </div>
      </section>

      <section className="section alt" style={sectionStyle}>
        <div className="container" style={sectionWrapStyle}>
          <LuxuryText label="CRAFT LOGIC" title="THE LOGIC OF THE BLADE">
            Thermal refinement is tuned for resilience, retention, and the task the blade is expected to survive. Numbers without context are theater. The meaningful question is whether hardness, toughness, and stability serve the knife’s intended work.
          </LuxuryText>
          <figure style={mediaStyle}>
            <img src={asset('media/pages/why-mo/process/why-mo-process-heat-treatment-desktop-v1.avif')} alt="Precision heat treatment and blade logic detail" style={mediaContentStyle} />
          </figure>
          <LuxuryText label="GEOMETRY DECIDES" title="EVERY LINE HAS TO JUSTIFY ITSELF">
            From edge thickness to grind choice, every line has to justify itself in contact. A knife can be beautifully finished and still feel wrong in the cut. Geometry is what decides resistance, bite, food release, durability, and control.
          </LuxuryText>
        </div>
      </section>

      <section className="section" style={sectionStyle}>
        <div className="container" style={sectionWrapStyle}>
          <LuxuryText label="PERFORMANCE PROOF" title={<>NO THEATER. ONLY<br />PERFORMANCE.</>}>
            No cosmetic excess. No empty claims. Only honest construction that earns trust when the blade meets real resistance.
          </LuxuryText>
          <figure style={mediaStyle}>
            <video autoPlay muted loop playsInline preload="metadata" poster={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-poster-desktop-v1.jpg')} aria-label="Performance proof cutting test video" style={mediaContentStyle}>
              <source src={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-desktop-v1.mp4')} type="video/mp4" />
            </video>
          </figure>
          <LuxuryText label="BENCH. STONE. CUT." title="PROOF HAS TO AGREE">
            Steel, heat treatment, and geometry only matter when performance confirms them. The bench, the stone, and the cut all have to agree before a theory earns trust.
          </LuxuryText>
        </div>
      </section>

      <section className="section alt" style={sectionStyle}>
        <div className="container" style={sectionWrapStyle}>
          <LuxuryText label="PROCESS PROOF" title={<>BUILT IN STAGES,<br />PROVEN IN CONTACT</>}>
            Forging, grinding, heat treatment, sharpening, and testing are not decorative chapters. They are the controlled sequence that turns material into a dependable tool.
          </LuxuryText>
          <figure style={mediaStyle}>
            <img src={asset('media/pages/why-mo/process/why-mo-process-grinding-desktop-v1.png')} alt="Grinding and process proof inside the Mo workshop" style={mediaContentStyle} />
          </figure>
          <LuxuryText label="CONTROLLED SEQUENCE" title="EACH STAGE SUPPORTS THE NEXT">
            Each stage has to support the next: the profile must serve the hand, the grind must serve the cut, the heat treatment must serve the steel, and the final edge must serve real use.
          </LuxuryText>
        </div>
      </section>

      <section className="section" style={sectionStyle}>
        <div className="container" style={sectionWrapStyle}>
          <LuxuryText label="TRUST LAYER" title={<>FUNCTIONAL LEGACIES,<br />NOT DECORATIVE CLAIMS</>}>
            ABS Member. Forging since 2015 under the name Mo. Building for the wild, the mission, the kitchen, and the long life of an heirloom.
          </LuxuryText>
          <figure style={mediaStyle}>
            <img src={asset('media/pages/why-mo/proof/why-mo-proof-abs-member-desktop-v1.svg')} alt="ABS member and trust proof for Mo Knives" style={absBadgeImageStyle} />
          </figure>
          <LuxuryText label="DETAILS EARN THEIR PLACE" title="CONSTRUCTION. CONTROL. PROOF.">
            The goal is not to make every blade feel dramatic. The goal is to make every detail earn its place through construction, control, and proof.
          </LuxuryText>
        </div>
      </section>

      <section className="request-panel">
        <div style={{ ...luxuryPanelStyle, maxWidth: '880px' }}>
          <p style={kickerStyle}>NEXT STEP</p>
          <h2 style={{ ...sectionTitleStyle, textAlign: 'center', marginInline: 'auto' }}>ENTER THE VAULT</h2>
          <OrnateDivider centered />
          <p style={heroCopyStyle}>Now that the reason is clear, enter the record. The Vault shows the real work that came out of this standard — the blades, the worlds they belong to, and the proof behind them.</p>
          <a href="/the-vault" className="button-primary" style={{ marginTop: 'clamp(24px, 5vw, 34px)' }}>ENTER THE VAULT</a>
        </div>
      </section>
    </main>
  );
}

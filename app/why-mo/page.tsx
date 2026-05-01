import type { ReactNode } from 'react';

const asset = (path: string) => `/assets/${path}`;

function OrnateDivider({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`mk-divider${centered ? ' mk-divider--center' : ''}`} aria-hidden="true">
      <span />
    </div>
  );
}

function LuxuryText({ label, title, children }: { label: string; title: ReactNode; children: ReactNode }) {
  return (
    <div className="mk-story-text">
      <p className="mk-premium-label">{label}</p>
      <h2 className="mk-story-title">{title}</h2>
      <OrnateDivider />
      <p className="mk-story-copy">{children}</p>
    </div>
  );
}

export default function WhyMoPage() {
  return (
    <main className="page-shell mk-premium-page">
      <section className="section page-hero-simple mk-page-hero">
        <div className="mk-luxury-panel">
          <figure
            className="why-mo-hero-badge"
            style={{
              width: 'min(150px, 38vw)',
              margin: '0 auto clamp(20px, 4vw, 28px)',
              filter: 'drop-shadow(0 18px 34px rgba(0, 0, 0, 0.42)) drop-shadow(0 0 28px rgba(240, 162, 15, 0.2))',
              opacity: 0.98,
            }}
          >
            <img
              src={asset('media/pages/why-mo/hero/why-mo-hero-custom-maker-bladesmith-badge-desktop-v1.png')}
              alt="Custom knife maker and bladesmith badge"
            />
          </figure>
          <p className="mk-premium-label">WHY MO / ORIGIN</p>
          <h1 className="mk-premium-page-title">WHY MO</h1>
          <OrnateDivider centered />
          <p className="mk-premium-centered-copy">My work did not begin at the anvil. It began in the field — as a hunter, angler, and open-fire cook — shaped by the demanding reality of use.</p>
          <p className="mk-premium-centered-copy">Not a gallery. Not a marketplace. A living record of functional legacies — built to explain why the work deserves trust before it asks for attention.</p>
        </div>
      </section>

      <section className="section mk-story-section">
        <div className="container mk-story-wrap">
          <LuxuryText label="FIELD FOUNDATION" title={<>BEFORE THE FORGE,<br />THERE WAS THE FIELD</>}>
            Working under the name Mo since 2015, I built my foundation in the field first — where a knife had to be more than sharp; it had to be dependable.
          </LuxuryText>
          <figure className="mk-story-media">
            <img src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="Why Mo atmosphere and workshop origin" />
          </figure>
          <LuxuryText label="FIELD STANDARD" title="WHERE THE WORLDS MEET">
            That same standard later found its way into the culinary world through co-founding ECC as Master Bladesmith and designer, creating for renowned chefs and some of the most exacting fine-dining, steakhouse, and Japanese culinary environments. Mo Knives exists where those worlds meet: raw durability, disciplined craftsmanship, and purpose without pretense.
          </LuxuryText>
        </div>
      </section>

      <section className="section alt mk-story-section">
        <div className="container mk-story-wrap">
          <LuxuryText label="CRAFT LOGIC" title="THE LOGIC OF THE BLADE">
            Thermal refinement is tuned for resilience, retention, and the task the blade is expected to survive. Numbers without context are theater. The meaningful question is whether hardness, toughness, and stability serve the knife’s intended work.
          </LuxuryText>
          <figure className="mk-story-media">
            <img src={asset('media/pages/why-mo/process/why-mo-process-heat-treatment-desktop-v1.avif')} alt="Precision heat treatment and blade logic detail" />
          </figure>
          <LuxuryText label="GEOMETRY DECIDES" title="EVERY LINE HAS TO JUSTIFY ITSELF">
            From edge thickness to grind choice, every line has to justify itself in contact. A knife can be beautifully finished and still feel wrong in the cut. Geometry is what decides resistance, bite, food release, durability, and control.
          </LuxuryText>
        </div>
      </section>

      <section className="section mk-story-section">
        <div className="container mk-story-wrap">
          <LuxuryText label="PERFORMANCE PROOF" title={<>NO THEATER. ONLY<br />PERFORMANCE.</>}>
            No cosmetic excess. No empty claims. Only honest construction that earns trust when the blade meets real resistance.
          </LuxuryText>
          <figure className="mk-story-media mk-story-media--video">
            <video autoPlay muted loop playsInline preload="metadata" poster={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-poster-desktop-v1.jpg')} aria-label="Performance proof cutting test video">
              <source src={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-desktop-v1.mp4')} type="video/mp4" />
            </video>
          </figure>
          <LuxuryText label="BENCH. STONE. CUT." title="PROOF HAS TO AGREE">
            Steel, heat treatment, and geometry only matter when performance confirms them. The bench, the stone, and the cut all have to agree before a theory earns trust.
          </LuxuryText>
        </div>
      </section>

      <section className="section alt mk-story-section">
        <div className="container mk-story-wrap">
          <LuxuryText label="PROCESS PROOF" title={<>BUILT IN STAGES,<br />PROVEN IN CONTACT</>}>
            Forging, grinding, heat treatment, sharpening, and testing are not decorative chapters. They are the controlled sequence that turns material into a dependable tool.
          </LuxuryText>
          <figure className="mk-story-media">
            <img src={asset('media/pages/why-mo/process/why-mo-process-grinding-desktop-v1.png')} alt="Grinding and process proof inside the Mo workshop" />
          </figure>
          <LuxuryText label="CONTROLLED SEQUENCE" title="EACH STAGE SUPPORTS THE NEXT">
            Each stage has to support the next: the profile must serve the hand, the grind must serve the cut, the heat treatment must serve the steel, and the final edge must serve real use.
          </LuxuryText>
        </div>
      </section>

      <section className="section mk-story-section">
        <div className="container mk-story-wrap">
          <LuxuryText label="TRUST LAYER" title={<>FUNCTIONAL LEGACIES,<br />NOT DECORATIVE CLAIMS</>}>
            ABS Member. Forging since 2015 under the name Mo. Building for the wild, the mission, the kitchen, and the long life of an heirloom.
          </LuxuryText>
          <figure className="mk-story-media mk-story-media--contain">
            <img src={asset('media/pages/why-mo/proof/why-mo-proof-abs-member-desktop-v1.svg')} alt="ABS member and trust proof for Mo Knives" />
          </figure>
          <LuxuryText label="DETAILS EARN THEIR PLACE" title="CONSTRUCTION. CONTROL. PROOF.">
            The goal is not to make every blade feel dramatic. The goal is to make every detail earn its place through construction, control, and proof.
          </LuxuryText>
        </div>
      </section>

      <section className="request-panel">
        <div className="mk-luxury-panel" style={{ maxWidth: '880px' }}>
          <p className="mk-premium-label">NEXT STEP</p>
          <h2 className="mk-story-title" style={{ textAlign: 'center', marginInline: 'auto' }}>ENTER THE VAULT</h2>
          <OrnateDivider centered />
          <p className="mk-premium-centered-copy">Now that the reason is clear, enter the record. The Vault shows the real work that came out of this standard — the blades, the worlds they belong to, and the proof behind them.</p>
          <a href="/the-vault" className="button-primary" style={{ marginTop: 'clamp(24px, 5vw, 34px)' }}>ENTER THE VAULT</a>
        </div>
      </section>
    </main>
  );
}

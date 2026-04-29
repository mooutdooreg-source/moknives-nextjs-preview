const asset = (path: string) => `/assets/${path}`;

export default function WhyMoPage() {
  return (
    <main className="page-shell">
      <section className="section page-hero-simple">
        <div className="container section-heading-center">
          <p className="section-label">WHY MO / ORIGIN</p>
          <h1 className="section-title page-title">WHY MO</h1>
          <p className="section-copy centered-copy">My work did not begin at the anvil. It began in the field — as a hunter, angler, and open-fire cook — shaped by the demanding reality of use.</p>
          <p className="section-copy centered-copy">Not a gallery. Not a marketplace. A living record of functional legacies — built to explain why the work deserves trust before it asks for attention.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <figure className="media-card tall">
            <img src={asset('media/pages/why-mo/hero/why-mo-hero-main-desktop-v1.avif')} alt="Why Mo atmosphere and workshop origin" />
          </figure>
          <div>
            <p className="section-label">FIELD FOUNDATION</p>
            <h2 className="section-title">BEFORE THE FORGE,<br />THERE WAS THE FIELD</h2>
            <p className="section-copy">Working under the name Mo since 2015, I built my foundation in the field first — where a knife had to be more than sharp; it had to be dependable.</p>
            <p className="section-copy">That same standard later found its way into the culinary world through co-founding ECC as Master Bladesmith and designer, creating for renowned chefs and some of the most exacting fine-dining, steakhouse, and Japanese culinary environments. Mo Knives exists where those worlds meet: raw durability, disciplined craftsmanship, and purpose without pretense.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <p className="section-label">CRAFT LOGIC</p>
            <h2 className="section-title">THE LOGIC OF THE BLADE</h2>
            <p className="section-copy">Thermal refinement is tuned for resilience, retention, and the task the blade is expected to survive. Numbers without context are theater. The meaningful question is whether hardness, toughness, and stability serve the knife’s intended work.</p>
            <p className="section-copy">From edge thickness to grind choice, every line has to justify itself in contact. A knife can be beautifully finished and still feel wrong in the cut. Geometry is what decides resistance, bite, food release, durability, and control.</p>
          </div>
          <figure className="media-card tall">
            <img src={asset('media/pages/why-mo/process/why-mo-process-heat-treatment-desktop-v1.avif')} alt="Precision heat treatment and blade logic detail" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <figure className="media-card">
            <video autoPlay muted loop playsInline preload="metadata" poster={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-poster-desktop-v1.jpg')} aria-label="Performance proof cutting test video">
              <source src={asset('media/pages/why-mo/proof/why-mo-proof-cut-test-desktop-v1.mp4')} type="video/mp4" />
            </video>
          </figure>
          <div>
            <p className="section-label">PERFORMANCE PROOF</p>
            <h2 className="section-title">NO THEATER. ONLY<br />PERFORMANCE.</h2>
            <p className="section-copy">No cosmetic excess. No empty claims. Only honest construction that earns trust when the blade meets real resistance.</p>
            <p className="section-copy">Steel, heat treatment, and geometry only matter when performance confirms them. The bench, the stone, and the cut all have to agree before a theory earns trust.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <p className="section-label">PROCESS PROOF</p>
            <h2 className="section-title">BUILT IN STAGES,<br />PROVEN IN CONTACT</h2>
            <p className="section-copy">Forging, grinding, heat treatment, sharpening, and testing are not decorative chapters. They are the controlled sequence that turns material into a dependable tool.</p>
            <p className="section-copy">Each stage has to support the next: the profile must serve the hand, the grind must serve the cut, the heat treatment must serve the steel, and the final edge must serve real use.</p>
          </div>
          <figure className="media-card tall">
            <img src={asset('media/pages/why-mo/process/why-mo-process-grinding-desktop-v1.png')} alt="Grinding and process proof inside the Mo workshop" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <figure className="media-card abs-card">
            <img src={asset('media/pages/why-mo/proof/why-mo-proof-abs-member-desktop-v1.svg')} alt="ABS member and trust proof for Mo Knives" />
          </figure>
          <div>
            <p className="section-label">TRUST LAYER</p>
            <h2 className="section-title">FUNCTIONAL LEGACIES,<br />NOT DECORATIVE CLAIMS</h2>
            <p className="section-copy">ABS Member. Forging since 2015 under the name Mo. Building for the wild, the mission, the kitchen, and the long life of an heirloom.</p>
            <p className="section-copy">The goal is not to make every blade feel dramatic. The goal is to make every detail earn its place through construction, control, and proof.</p>
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

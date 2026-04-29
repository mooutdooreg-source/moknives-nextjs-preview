const asset = (path: string) => `/assets/${path}`;

const worlds = [
  {
    href: '/expedition',
    source: 'media/pages/expedition/hero/expedition-hero-bg-desktop-v1.mp4',
    world: 'World 01',
    title: 'Expedition',
  },
  {
    href: '/culinary',
    source: 'media/pages/culinary/hero/culinary-hero-bg-desktop-v1.mp4',
    world: 'World 02',
    title: 'Culinary',
  },
  {
    href: '/vanguard',
    source: 'media/pages/vanguard/hero/vanguard-hero-bg-desktop-v1.mp4',
    world: 'World 03',
    title: 'Vanguard',
  },
  {
    href: '/singularis',
    source: 'media/pages/singularis/hero/singularis-hero-bg-desktop-v1.mp4',
    world: 'World 04',
    title: 'Singularis',
  },
];

export default function TheVaultPage() {
  return (
    <main className="vault-page">
      <section className="vault-hero">
        <img
          src={asset('media/pages/the-vault/hero/vault-hero-main-desktop-v1.avif')}
          alt=""
          className="vault-hero__bg"
        />
        <div className="vault-hero__shade" />
        <div className="vault-container vault-hero__inner">
          <div className="vault-hero__copy">
            <span className="vault-kicker">THE VAULT</span>
            <h1 className="vault-hero__title">
              <span>NOT A</span>
              <strong>GALLERY</strong>
              <span>NOT A</span>
              <strong>MARKETPLACE</strong>
            </h1>
            <p>A LIVING RECORD OF FUNCTIONAL LEGACIES</p>
          </div>
        </div>
      </section>

      <section className="vault-intro">
        <div className="vault-container vault-intro__inner">
          <div className="vault-divider-title">
            <span />
            <strong>FORGED THROUGH THE REALITIES OF USE</strong>
            <span />
          </div>
          <p>EACH BLADE BELONGS TO A WORLD OF PURPOSE</p>
          <h2><strong>THE BLADE</strong> <span>THAT</span> <strong>BRIDGES WORLDS</strong></h2>
          <em>WHICH WORLD DO YOU BELONG TO?</em>
        </div>
      </section>

      <section id="four-worlds" className="vault-worlds">
        <div className="vault-container vault-worlds__grid">
          {worlds.map((item) => (
            <a href={item.href} className="vault-world-card" key={item.title}>
              <video className="vault-world-card__media" autoPlay muted loop playsInline preload="metadata">
                <source src={asset(item.source)} type="video/mp4" />
              </video>
              <div className="vault-world-card__shade" />
              <div className="vault-world-card__copy">
                <span>{item.world}</span>
                <h3>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="vault-record-section">
        <div className="vault-container">
          <div className="vault-section-head">
            <span>Archive System</span>
            <h2>THE RECORD <strong>LOG</strong></h2>
            <p>Every piece carries a permanent record of its build, specifications, and field documentation.</p>
          </div>

          <article className="vault-record-card">
            <div className="vault-record-card__visual">
              <span className="vault-record-card__badge">Record 042</span>
              <div className="vault-record-stack">
                <div className="vault-record-stack__item vault-record-stack__item--back-a">
                  <img src={asset('media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif')} alt="" />
                </div>
                <div className="vault-record-stack__item vault-record-stack__item--back-b">
                  <img src={asset('media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif')} alt="" />
                </div>
                <div className="vault-record-stack__item vault-record-stack__item--front">
                  <img src={asset('media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif')} alt="" />
                </div>
              </div>
              <span className="vault-record-card__hint">View record</span>
            </div>

            <aside className="vault-record-card__content">
              <span>Verified Entry</span>
              <h3>Expedition Pattern</h3>
              <p>Forged for extended field use and durability.</p>
              <div className="vault-record-rows">
                <div><span>World</span><strong>Expedition</strong></div>
                <div><span>Status</span><strong>Archived / Sold</strong></div>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <section className="vault-next-step">
        <div className="vault-container vault-next-step__inner">
          <span className="vault-kicker">The Next Step</span>
          <h2>START THE <strong>CONVERSATION</strong></h2>

          <div className="vault-next-step__grid">
            <article>
              <h3>FOR THOSE WHO DEMAND PERFORMANCE WITHOUT COMPROMISE</h3>
              <p>Custom builds shaped by use</p>
            </article>
            <article>
              <h3>FOR THOSE WHO COLLECT WHAT CANNOT BE REPEATED</h3>
              <p>One-of-one commissioned pieces</p>
            </article>
            <article>
              <h3>FOR THOSE STILL FINDING THEIR WORLD</h3>
              <p><a href="#four-worlds">Return to the Four Worlds</a></p>
            </article>
          </div>

          <p>Each piece is forged to order. No stock. No replicas. No shortcuts.</p>
          <p>Built around your use. Your hand. Your world.</p>

          <div className="vault-next-step__actions">
            <a className="vault-next-step__btn" href="/request-entry">REQUEST ENTRY</a>
          </div>
        </div>
      </section>
    </main>
  );
}

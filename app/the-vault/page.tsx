import VaultRecordRail from './VaultRecordRail';

const asset = (path: string) => `/assets/${path}`;
const rootAsset = (path: string) => `/root-assets/${path}`;

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'The Vault', href: '/the-vault' },
  { label: 'Why Mo', href: '/why-mo' },
  { label: 'Limited Drop', href: '/#limited-drop' },
  { label: 'Edge Academy', href: '/#edge-academy' },
  { label: 'Mo Gear', href: '/#mo-gear' },
  { label: 'Contact', href: '/#contact' },
];

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
    <>
      <header className="site-header vault-site-header">
        <div className="announcement-bar">
          <div className="announcement-track">
            <div className="announcement-copy">Mo Knives — Hand Forged Since 2015</div>
            <div className="announcement-copy">Field Proven. No Theater.</div>
            <div className="announcement-copy">Built for Real Use</div>
          </div>
        </div>

        <div className="header-row">
          <a className="brand-lockup" href="/" aria-label="Mo Knives home">
            <img className="brand-lockup-img" src={asset('media/shared/brand/logo-lockup.svg')} alt="Mo Knives" />
          </a>

          <nav className="header-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`nav-link${item.href === '/the-vault' ? ' is-active' : ''}`}>{item.label}</a>
            ))}
          </nav>

          <a href="/request-entry" className="request-button">Request Entry</a>
        </div>
      </header>

      <main className="vault-page vault-page-premium">
        <section className="vault-hero vault-hero-premium">
          <img
            src={rootAsset('media/pages/the-vault/hero/vault-hero-main-desktop-v1.webp')}
            alt=""
            className="vault-hero__bg vault-hero-premium__bg"
          />
          <div className="vault-hero-premium__light" />
          <div className="vault-hero-premium__shade" />
          <div className="vault-hero-premium__grain" />
          <div className="vault-container vault-hero-premium__inner">
            <div className="vault-hero-premium__copy">
              <span className="vault-kicker">THE VAULT</span>
              <h1 className="vault-hero-premium__title">
                <span>NOT A</span>
                <strong>GALLERY</strong>
                <span>NOT A</span>
                <strong>MARKETPLACE</strong>
              </h1>
              <div className="vault-hero-premium__line" />
              <p>A LIVING RECORD OF FUNCTIONAL LEGACIES</p>
              <div className="vault-hero-premium__actions">
                <a href="#four-worlds" className="vault-hero-premium__secondary">EXPLORE RECORDS ↓</a>
              </div>
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

        <VaultRecordRail />

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
          </div>
        </section>
      </main>
    </>
  );
}

const asset = (path: string) => `/assets/${path}`;

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

          <a href="/request-entry" className="request-button">Request Entry</a>
        </div>
      </header>

      <main className="vault-page vault-page-premium">
      <style>{`
        .vault-page, .vault-page * { box-sizing: border-box; }
        .vault-page { background:#050505; color:#f5f5f5; overflow-x:hidden; font-family: Inter, system-ui, sans-serif; }
        .vault-container { width:min(1220px, calc(100% - 32px)); margin:0 auto; }
        .vault-hero-premium { position:relative; min-height:calc(100vh - 92px); display:grid; align-items:center; overflow:hidden; isolation:isolate; background:#030303; }
        .vault-hero-premium__bg { position:absolute !important; inset:0; width:100% !important; height:100% !important; max-width:none !important; object-fit:cover; object-position:center; transform:scale(1.06); opacity:.92; filter:contrast(1.1) saturate(.92) brightness(.52); }
        .vault-hero-premium__light { position:absolute; inset:-12%; z-index:1; background:radial-gradient(circle at 68% 42%, rgba(240,162,15,.28), transparent 23%), radial-gradient(circle at 78% 62%, rgba(217,119,6,.16), transparent 30%); mix-blend-mode:screen; }
        .vault-hero-premium__shade { position:absolute; inset:0; z-index:2; background:linear-gradient(90deg, rgba(0,0,0,.96) 0%, rgba(0,0,0,.76) 36%, rgba(0,0,0,.34) 68%, rgba(0,0,0,.86) 100%), linear-gradient(180deg, rgba(0,0,0,.7), transparent 38%, rgba(0,0,0,.94)); }
        .vault-hero-premium__grain { position:absolute; inset:0; z-index:3; opacity:.18; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px); background-size:56px 56px; }
        .vault-hero-premium:after { content:''; position:absolute; inset:28px; z-index:4; border:1px solid rgba(240,162,15,.16); pointer-events:none; box-shadow:inset 0 0 44px rgba(217,119,6,.05); }
        .vault-hero-premium__inner { position:relative; z-index:5; padding:clamp(92px, 12vw, 160px) 0 clamp(74px, 9vw, 120px); }
        .vault-hero-premium__copy { max-width:790px; animation:vaultTextReveal .9s ease-out both; }
        .vault-kicker { display:inline-block; color:#f0a20f; font-size:11px; font-weight:800; letter-spacing:.46em; text-transform:uppercase; }
        .vault-hero-premium__title { margin:24px 0 22px; font-family:Cinzel, Georgia, serif; font-size:clamp(54px, 8vw, 112px); line-height:.98; letter-spacing:-.045em; text-transform:uppercase; }
        .vault-hero-premium__title span, .vault-hero-premium__title strong { display:block; }
        .vault-hero-premium__title span { color:rgba(255,255,255,.96); font-weight:800; }
        .vault-hero-premium__title strong { color:#f0a20f; font-weight:800; text-shadow:0 0 32px rgba(240,162,15,.18); }
        .vault-hero-premium__line { width:min(360px,70vw); height:1px; margin:26px 0 24px; background:linear-gradient(90deg,#f0a20f,rgba(240,162,15,.08)); box-shadow:0 0 18px rgba(240,162,15,.22); }
        .vault-hero-premium__copy p { max-width:650px; margin:0; color:rgba(245,245,245,.84); font-size:clamp(13px,1.35vw,17px); line-height:1.75; letter-spacing:.24em; text-transform:uppercase; }
        .vault-hero-premium__actions { display:flex; flex-wrap:wrap; gap:14px; margin-top:34px; }
        .vault-next-step__btn, .vault-hero-premium__secondary { display:inline-flex; min-height:48px; align-items:center; justify-content:center; padding:13px 22px; border-radius:999px; font-size:11px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; text-decoration:none; }
        .vault-next-step__btn { background:linear-gradient(135deg,#c96f04,#f0a20f 58%,#ffcf6a); color:#111; box-shadow:0 18px 40px rgba(217,119,6,.22), inset 0 1px 0 rgba(255,255,255,.28); }
        .vault-hero-premium__secondary { border:1px solid rgba(255,255,255,.22); color:rgba(255,255,255,.88); background:rgba(255,255,255,.035); }
        .vault-intro, .vault-worlds, .vault-record-section, .vault-next-step { position:relative; padding:clamp(74px,9vw,118px) 0; background:radial-gradient(circle at 50% 0%, rgba(217,119,6,.12), transparent 34%), #050505; }
        .vault-intro__inner, .vault-next-step__inner { text-align:center; position:relative; z-index:1; }
        .vault-divider-title { display:flex; align-items:center; justify-content:center; gap:16px; color:#f0a20f; font-size:11px; font-weight:800; letter-spacing:.34em; text-transform:uppercase; }
        .vault-divider-title span { width:min(96px,18vw); height:1px; background:linear-gradient(90deg, transparent, rgba(240,162,15,.75)); }
        .vault-divider-title span:last-child { background:linear-gradient(90deg, rgba(240,162,15,.75), transparent); }
        .vault-intro p, .vault-section-head p, .vault-next-step__inner > p { color:rgba(245,245,245,.72); line-height:1.8; }
        .vault-intro p { margin:22px 0 18px; font-size:12px; letter-spacing:.26em; text-transform:uppercase; }
        .vault-intro h2, .vault-next-step h2, .vault-section-head h2 { margin:0; font-family:Cinzel, Georgia, serif; font-size:clamp(34px,5.3vw,72px); line-height:1.06; text-transform:uppercase; letter-spacing:-.025em; }
        .vault-intro h2 strong, .vault-next-step h2 strong, .vault-section-head h2 strong { color:#f0a20f; }
        .vault-intro em { display:block; margin-top:22px; color:#f0a20f; font-style:normal; font-size:11px; font-weight:800; letter-spacing:.3em; text-transform:uppercase; }
        .vault-worlds__grid { position:relative; z-index:1; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:18px; }
        .vault-world-card { position:relative; display:block; min-height:520px; overflow:hidden; border:1px solid rgba(240,162,15,.18); border-radius:24px; background:#090909; box-shadow:0 28px 80px rgba(0,0,0,.28); color:#fff; text-decoration:none; }
        .vault-world-card__media { position:absolute !important; inset:0; width:100% !important; height:100% !important; object-fit:cover; filter:brightness(.58) contrast(1.08) saturate(.9); transform:scale(1.02); transition:transform .7s ease, filter .7s ease; }
        .vault-world-card:hover .vault-world-card__media { transform:scale(1.1); filter:brightness(.76) contrast(1.12) saturate(1.02); }
        .vault-world-card__shade { position:absolute; inset:0; background:linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.26) 42%,rgba(0,0,0,.9)); }
        .vault-world-card__copy { position:absolute; left:24px; right:24px; bottom:26px; z-index:2; }
        .vault-world-card__copy span, .vault-section-head span, .vault-record-card__content > span, .vault-record-card__badge, .vault-record-card__hint { color:#f0a20f; font-size:10px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
        .vault-world-card__copy h3 { margin:8px 0 0; font-family:Cinzel, Georgia, serif; font-size:28px; text-transform:uppercase; }
        .vault-record-section { background:radial-gradient(circle at 82% 12%, rgba(240,162,15,.11), transparent 30%), #090604; }
        .vault-section-head { max-width:720px; margin-bottom:42px; }
        .vault-section-head h2 { margin-top:12px; }
        .vault-record-card { display:grid; grid-template-columns:minmax(0,1.05fr) minmax(320px,.75fr); gap:26px; align-items:stretch; }
        .vault-record-card__visual, .vault-record-card__content, .vault-next-step__grid article { position:relative; border:1px solid rgba(240,162,15,.18); border-radius:28px; background:linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.015)); box-shadow:inset 0 1px 0 rgba(255,255,255,.055), 0 22px 70px rgba(0,0,0,.28); }
        .vault-record-card__visual { min-height:480px; padding:26px; overflow:hidden; }
        .vault-record-stack { position:absolute; inset:84px 44px 64px; }
        .vault-record-stack__item { position:absolute; inset:0; overflow:hidden; border-radius:20px; border:1px solid rgba(240,162,15,.15); box-shadow:0 20px 60px rgba(0,0,0,.3); }
        .vault-record-stack__item img { width:100%; height:100%; object-fit:cover; filter:brightness(.68) contrast(1.08); }
        .vault-record-stack__item--back-a { transform:rotate(-5deg) translate(-14px,16px); opacity:.45; }
        .vault-record-stack__item--back-b { transform:rotate(4deg) translate(18px,6px); opacity:.58; }
        .vault-record-card__hint { position:absolute; left:26px; bottom:24px; }
        .vault-record-card__content { padding:clamp(28px,4vw,46px); }
        .vault-record-card__content h3 { margin:14px 0 12px; font-family:Cinzel, Georgia, serif; font-size:clamp(30px,3vw,44px); line-height:1.08; text-transform:uppercase; }
        .vault-record-card__content p { color:rgba(245,245,245,.72); line-height:1.8; }
        .vault-record-rows { margin-top:28px; border-top:1px solid rgba(255,255,255,.08); }
        .vault-record-rows div { display:flex; justify-content:space-between; gap:18px; padding:16px 0; border-bottom:1px solid rgba(255,255,255,.08); }
        .vault-record-rows span { color:rgba(245,245,245,.58); }
        .vault-next-step__grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; margin:42px 0 34px; }
        .vault-next-step__grid article { padding:28px; }
        .vault-next-step__grid h3 { margin:0 0 12px; font-family:Cinzel, Georgia, serif; font-size:18px; line-height:1.35; text-transform:uppercase; }
        .vault-next-step__grid p, .vault-next-step__grid a { color:rgba(245,245,245,.76); }
        .vault-next-step__actions { margin-top:34px; }
        @keyframes vaultTextReveal { from { opacity:0; transform:translateY(26px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width:980px){ .vault-worlds__grid, .vault-record-card, .vault-next-step__grid { grid-template-columns:1fr; } .vault-world-card{min-height:440px;} .vault-hero-premium__title{font-size:clamp(48px,13vw,76px);} }
        @media (max-width:640px){ .vault-container{width:calc(100% - 28px);} .vault-hero-premium{min-height:760px;} .vault-hero-premium:after{inset:14px;} .vault-hero-premium__title{font-size:clamp(42px,15vw,60px);} .vault-hero-premium__copy p{font-size:12px; letter-spacing:.14em;} .vault-hero-premium__actions{flex-direction:column;} .vault-next-step__btn,.vault-hero-premium__secondary{width:100%;} .vault-world-card{min-height:390px;border-radius:18px;} .vault-record-card__visual{min-height:380px;border-radius:20px;} .vault-record-stack{inset:76px 24px 62px;} }
      `}</style>

      <section className="vault-hero vault-hero-premium">
        <img
          src={asset('media/pages/the-vault/hero/vault-hero-main-desktop-v1.avif')}
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
              <a href="/request-entry" className="vault-next-step__btn">REQUEST ENTRY</a>
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
    </>
  );
}

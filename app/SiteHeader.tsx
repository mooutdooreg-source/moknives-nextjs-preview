'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const asset = (path: string) => `/assets/${path}`;

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Why Mo', href: '/why-mo' },
  { label: 'The Vault', href: '/the-vault' },
  { label: 'Limited Drop', href: '/#limited-drop' },
  { label: 'Edge Academy', href: '/#edge-academy' },
  { label: 'Mo Gear', href: '/#mo-gear' },
  { label: 'Contact', href: '/#contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header global-site-header">
      <div className="announcement-bar">
        <div className="announcement-track">
          <div className="announcement-copy">Mo Knives — Hand Forged Since 2015</div>
          <div className="announcement-copy">Field Proven. No Theater.</div>
          <div className="announcement-copy">Built for Real Use</div>
        </div>
      </div>

      <div className="header-row">
        <Link className="brand-lockup" href="/" aria-label="Mo Knives home">
          <img className="brand-lockup-img" src={asset('media/shared/brand/logo-lockup.svg')} alt="Mo Knives" />
        </Link>

        <nav className="header-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={`nav-link${isActive(pathname, item.href) ? ' is-active' : ''}`}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="/request-entry" className="request-button">Request Entry</a>
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <span>Menu</span>
            </summary>
            <div className="mobile-menu__panel-wrap">
              <nav className="mobile-menu__panel" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className={isActive(pathname, item.href) ? 'is-active' : ''}>{item.label}</a>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

import './globals.css';
import './brand-lockup.css';
import './no-duplicate-request.css';
import './premium-system.css';
import './home-editorial.css';
import SiteHeader from './SiteHeader';

export const metadata = {
  title: 'Mo Knives',
  description: 'Hand-Forged Legacies. Field-Proven Performance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

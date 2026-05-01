/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/contact.html", destination: "/contact", permanent: false },
      { source: "/culinary.html", destination: "/culinary", permanent: false },
      { source: "/edge-academy.html", destination: "/edge-academy", permanent: false },
      { source: "/expedition.html", destination: "/expedition", permanent: false },
      { source: "/limited-drop.html", destination: "/limited-drop", permanent: false },
      { source: "/mo-gear.html", destination: "/mo-gear", permanent: false },
      { source: "/record-detail.html", destination: "/record-detail", permanent: false },
      { source: "/request-a-blade.html", destination: "/request-a-blade", permanent: false },
      { source: "/request-entry.html", destination: "/request-entry", permanent: false },
      { source: "/singularis.html", destination: "/singularis", permanent: false },
      { source: "/the-vault.html", destination: "/the-vault", permanent: false },
      { source: "/vanguard.html", destination: "/vanguard", permanent: false },
      { source: "/vanguard-request.html", destination: "/vanguard-request", permanent: false },
      { source: "/why-mo.html", destination: "/why-mo", permanent: false },
    ];
  },
};

module.exports = nextConfig;

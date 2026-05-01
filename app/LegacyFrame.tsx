import Link from "next/link";

const routeLabels: Record<string, string> = {
  "/contact": "Contact",
  "/edge-academy": "Edge Academy",
  "/limited-drop": "Limited Drop",
  "/mo-gear": "Mo Gear",
  "/record-detail": "Record Detail",
  "/request-a-blade": "Request a Blade",
  "/request-entry": "Request Entry",
  "/vanguard-request": "Vanguard Request",
};

export function LegacyFrame({ htmlFile, route }: { htmlFile: string; route: string }) {
  return (
    <main className="legacy-route-shell" data-route={route}>
      <div className="legacy-route-bar" aria-label="Migration status">
        <span>Next.js route active</span>
        <strong>{routeLabels[route] ?? route}</strong>
        <Link href="/">Back to Home</Link>
      </div>
      <iframe
        className="legacy-route-frame"
        src={`/legacy/${htmlFile}`}
        title={`${routeLabels[route] ?? route} legacy source page`}
      />
    </main>
  );
}

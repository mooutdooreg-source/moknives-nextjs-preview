import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <div className="logo">Mo Knives</div>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/request-a-blade">Request Blade</Link>
        <Link href="/request-entry">Request Entry</Link>
      </nav>
    </header>
  );
}
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-orange-600">
          Resto<span className="text-gray-900">Platform</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-orange-600 transition">
            Menu
          </Link>
          <Link
            href="/reservations"
            className="hover:text-orange-600 transition"
          >
            Reservations
          </Link>
        </div>

        <Link
          href="/reservations"
          className="bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-orange-700 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}

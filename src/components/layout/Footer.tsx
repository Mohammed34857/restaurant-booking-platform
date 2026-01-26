import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            RestoPlatform
          </h3>
          <p className="text-sm text-gray-400">
            A modern platform for restaurant booking, menu management, and
            interactive dining experiences.
          </p>
        </div>

       
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="hover:text-white">
                Reservations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Project Info
          </h4>
          <p className="text-sm text-gray-400">
            Built with Next.js, TypeScript, Tailwind CSS and REST APIs.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} RestoPlatform. All rights reserved.
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gray-900 text-white py-20 rounded-xl text-center">
      <h2 className="text-4xl font-bold mb-6">
        Elevate Your Restaurant Experience
      </h2>

      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Designed to scale for real restaurants with performance and usability
        in mind.
      </p>

      <Link
        href="/reservations"
        className="inline-block bg-orange-600 px-10 py-4 rounded-md font-semibold hover:bg-orange-700 transition"
      >
        Get Started
      </Link>
    </section>
  );
}

<<<<<<< HEAD
"use client";

import HeroSection from  "@/components/Home/HeroSection" 
import FeaturesSection from "@/components/Home/FeaturesSection"
import PopularDishesSection from "@/components/Home/PopularDishesSection"
import CTASection from "@/components/Home/CTASection";
=======
import MealLookupComponent from "@/components/mealsComponent/MealLookupComponent";
>>>>>>> b170b8cd23c901516d1920e6c4c58d0ac39ef1c2
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-32">
<<<<<<< HEAD
      <HeroSection/>
      <FeaturesSection/>
      <PopularDishesSection/>
      <CTASection/>
=======
      
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-500 opacity-90" />
        <div className="relative z-10 text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Modern Restaurant <br /> Booking & Menu Platform
          </h1>
          <p className="text-lg text-orange-100 mb-10">
            A full-stack platform to manage reservations, explore dishes, and
            enhance the dining experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/reservations"
              className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold hover:bg-orange-100 transition"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat number="120+" label="Daily Reservations" />
        <Stat number="45+" label="Dishes Available" />
        <Stat number="15+" label="Chefs & Staff" />
        <Stat number="4.8★" label="Customer Rating" />
      </section>

      <section className="grid md:grid-cols-3 gap-10">
        <Service
          title="Smart Booking"
          description="Real-time reservation system with instant confirmation."
        />
        <Service
          title="Dynamic Menu"
          description="Interactive menu with detailed dish information."
        />
        <Service
          title="Admin Control"
          description="Manage tables, bookings, and dishes efficiently."
        />
      </section>

      {/* CTA */}
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
          className="bg-orange-600 px-10 py-4 rounded-md font-semibold hover:bg-orange-700 transition"
        >
          Get Started
        </Link>
      </section>

>>>>>>> b170b8cd23c901516d1920e6c4c58d0ac39ef1c2
    </div>
  );
}


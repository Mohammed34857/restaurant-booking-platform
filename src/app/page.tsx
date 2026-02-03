"use client";

import HeroSection from  "@/components/Home/HeroSection" 
import FeaturesSection from "@/components/Home/FeaturesSection"
import PopularDishesSection from "@/components/Home/PopularDishesSection"
import CTASection from "@/components/Home/CTASection";
import MealLookupComponent from "@/components/mealsComponent/MealLookupComponent";



export default function Home() {
  return (
    <div className="flex flex-col gap-32">
   
      <HeroSection/>
      <FeaturesSection/>
      <PopularDishesSection/>
      <CTASection/>

    </div>
  );
}


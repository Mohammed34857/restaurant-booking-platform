"use client";

import { useParams } from "next/navigation";
import MealLookup from "@/app/meals/MealLookup";

export default function MealDetailsPage() {
  const params = useParams();
  const mealId = params.mealId as string;

  return (
    <div className="py-10">
      <MealLookup mealId={mealId} />
    </div>
  );
}

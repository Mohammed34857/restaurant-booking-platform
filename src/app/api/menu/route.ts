import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ingredient = searchParams.get("ingredient") || "";

  if (!ingredient) {
    return NextResponse.json([]);
  }

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();


    const meals = (data.meals || []).map((meal: any) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      image: meal.strMealThumb,
      description: "Click Details for full recipe",
      price: Math.floor(Math.random() * 20) + 5, 
    }));

    return NextResponse.json(meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
    return NextResponse.json([]);
  }
}

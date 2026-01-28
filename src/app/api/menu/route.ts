import { NextRequest, NextResponse } from "next/server";

const dishes = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh salmon with lemon butter sauce",
    price: 18.99,
    image: "/images/Salmon.jpg",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh basil and mozzarella",
    price: 12.5,
    image: "/images/pizza.jpg",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine with parmesan and croutons",
    price: 9.99,
    image: "/images/Salad.jpg",
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(dishes);
}

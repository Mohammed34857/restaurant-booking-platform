"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import DishCard from "./DishCard";

const popularDishes = [
  {
    id: 1,
    name: "Grilled Steak",
    description: "Juicy grilled steak with fresh herbs",
    image: "/images/steak.jpg",
  },
  {
    id: 2,
    name: "Pasta Alfredo",
    description: "Creamy alfredo pasta with parmesan",
    image: "/images/pasta.jpg",
  },
  {
    id: 3,
    name: "Classic Burger",
    description: "Beef burger with cheese and fries",
    image: "/images/burger.jpg",
  },
];

export default function PopularDishesSection() {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          Popular Dishes
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {popularDishes.map((dish) => (
        <Box
              key={dish.id}
              sx={{
                flex: "0 1 100%",
                maxWidth: { xs: "100%", sm: "48%", md: "31%" },
              }}
            >
              <DishCard
                name={dish.name}
                description={dish.description}
                image={dish.image}
              />
            </Box>
          ))}
        </Box>

        <Box textAlign="center" mt={6}>
          <Link href="/menu">
            <Button variant="contained" size="large">
              View Full Menu
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

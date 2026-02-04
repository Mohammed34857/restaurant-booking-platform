"use client";

import { useEffect, useState } from "react";
import DishCard from "@/components/menu/DishCard";
import Grid from "@mui/material/Grid";
import { Container, Typography, TextField, Box } from "@mui/material";

type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function MenuPage() {
  const [ingredient, setIngredient] = useState("");
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDishes = async (ingredient: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/menu?ingredient=${ingredient}`);
      const data = await res.json();
      setDishes(data);
    } catch (err) {
      console.error(err);
      setDishes([]);
    } finally {
      setLoading(false);
    }
  };

  // كل ما تغير الحرف بعد 500ms ينزل البحث
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ingredient.trim()) fetchDishes(ingredient);
      else setDishes([]);
    }, 500);

    return () => clearTimeout(timer);
  }, [ingredient]);

  return (
    <Container sx={{ py: 8 }}>
      <Box mb={6} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Our Menu
        </Typography>
        <TextField
          placeholder="Search by ingredient (e.g. chicken)"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Box>

      {loading ? (
        <Typography variant="h6" textAlign="center">
          Loading...
        </Typography>
      ) : dishes.length === 0 ? (
        <Typography variant="h6" textAlign="center">
          No meals found.
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {dishes.map((dish) => (
            <Grid item key={dish.id}>
              <DishCard dish={dish} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

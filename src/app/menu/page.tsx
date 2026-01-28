"use client";

import { useEffect, useState } from "react";
import DishCard from "@/components/menu/DishCard";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function MenuPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Typography variant="h6" align="center" mt={10}>
        Loading...
      </Typography>
    );

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom textAlign="center" mb={6}>
        Our Menu
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dishes.map((dish) => (
          <Grid item key={dish.id}>
            <DishCard dish={dish} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

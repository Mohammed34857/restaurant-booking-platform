"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

type DishCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function DishCard({
  name,
  description,
  image,
}: DishCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {name}
        </Typography>

        <Typography color="text.secondary" mb={2}>
          {description}
        </Typography>

        <Box textAlign="right">
          <Button size="small" variant="outlined">
            Order Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

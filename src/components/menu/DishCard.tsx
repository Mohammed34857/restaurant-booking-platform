import Link from "next/link";
import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";

type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 8,
        },
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <img
          src={dish.image}
          alt={dish.name}
          style={{
            width: "100%",
            height: 250,
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {dish.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {dish.description}
        </Typography>
        <Typography variant="subtitle1" color="orange">
          ${dish.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/menu/${dish.id}`}>
          <Button variant="contained" fullWidth>
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

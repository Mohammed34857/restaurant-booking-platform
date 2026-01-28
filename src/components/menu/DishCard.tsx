import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, Typography, CardActions, Button , Box } from "@mui/material";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <Card  sx={{
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
      }}>
      <Box sx={{ overflow: "hidden" }}>
      <Image
        src={dish.image}
        alt={dish.name}
        width={345}
        height={180}
        style={{ objectFit: "cover", borderTopLeftRadius: 4, borderTopRightRadius: 4 , transition: "transform 0.4s ease", height:250}}
      />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
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
        <Link href="/reservations">
        <Button size="small" color="primary" variant="contained">
          Order Now
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

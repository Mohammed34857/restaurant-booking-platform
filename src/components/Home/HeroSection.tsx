"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
 <Box
   sx={{
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Typography variant="h2" color="white" fontWeight="bold" textAlign="center" mb={2}>
        Book Your Table & Explore Our Menu
      </Typography>

      <Typography color="wheat" mb={4} textAlign="center" >
        Enjoy a seamless restaurant experience with easy reservations and
        a curated menu.
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <Link href="/menu">
          <Button
            variant="contained"
            size="large"
            sx={{
              transition: "0.3s",
              "&:hover": { transform: "translateY(-2px)" },
            }}
          >
            View Menu
          </Button>
        </Link>

        <Link href="/reservations">
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "white",
              borderColor: "white",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Reserve a Table
          </Button>
        </Link>
      </Box>
    </motion.div>
  </Container>
</Box>
  );
}


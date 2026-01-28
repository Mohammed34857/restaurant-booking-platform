"use client";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  MenuItem,
} from "@mui/material";

export default function ReservationsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setToast({
        open: true,
        message: data.message || "Something went wrong",
        severity: "error",
      });
      return;
    }

    setToast({
      open: true,
      message: "Reservation confirmed successfully 🎉",
      severity: "success",
    });

    setForm({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
    });
  } catch (error) {
    setToast({
      open: true,
      message: "Server error. Please try again later.",
      severity: "error",
    });
  }
};


  const [toast, setToast] = useState<{
  open: boolean;
  message: string;
  severity: "success" | "error";
}>({
  open: false,
  message: "",
  severity: "success",
});

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h4" textAlign="center" mb={3}>
          Reserve a Table
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            required
            margin="normal"
            value={form.name}
            onChange={handleChange}
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />

          <TextField
            label="Date"
            name="date"
            type="date"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={form.date}
            onChange={handleChange}
          />

          <TextField
            label="Time"
            name="time"
            type="time"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={form.time}
            onChange={handleChange}
          />

          <TextField
            label="Number of Guests"
            name="guests"
            select
            fullWidth
            margin="normal"
            value={form.guests}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
          >
            Confirm Reservation
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
        <Alert
        onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{ width: "100%" }}
         >
        {toast.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

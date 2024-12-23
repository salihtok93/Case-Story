import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Footer from "../components/Footer";
import LastPage from "./LastPage";

const SummaryOutput = ({ stats }) => {
  const [submitted, setSubmitted] = useState(false); // Formun tamamlandığını takip etmek için

  const handleFinish = () => {
    setSubmitted(true);
  };
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
  if (submitted) {
    return <LastPage />;
  }
  return (
    <Box
      sx={{
        bgcolor: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Logo */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          LegIt
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {stats.topStats.map((stat, index) => (
            <Grid item key={index}>
              <Box sx={{ textAlign: "center", padding: "20px" }}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    color: "#28C662",
                    fontWeight: "bold",
                  }}
                >
                  {stat.count}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 1 }}
          >
            BUT STILL
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "#28C662",
              fontWeight: "bold",
              letterSpacing: 8,
            }}
          >
            UNIQUE
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            mb: 8,
          }}
        >
          <Typography variant="h6" align="center" sx={{ color: "white" }}>
            Join the Waitlist. Earn points for Airdrop.
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter an Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              maxWidth: 400,
              backgroundColor: "transparent",
              borderRadius: "50px",
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <Button
            onClick={handleFinish}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#28C662",
              borderRadius: "50px",
              padding: "10px 40px",
              "&:hover": {
                backgroundColor: "#1ea550",
              },
            }}
          >
            Join
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default SummaryOutput;

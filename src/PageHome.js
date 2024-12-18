import React from "react";
import { Box, Button, Typography, TextField, Stack } from "@mui/material";

const PageHome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Üst Başlık */}
      <Box component="span" sx={{ fontWeight: "bold" }}>
        Leg1t
      </Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        <Box component="span" sx={{ fontWeight: "bold" }}>
          Who are
        </Box>{" "}
        <Box component="span" sx={{ color: "#28C662", fontWeight: "bold" }}>
          you?
        </Box>
      </Typography>

      {/* Soru ve Giriş Alanı */}
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        How many Twitter(X) accounts do you have?
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Enter a number"
        InputProps={{
          sx: {
            backgroundColor: "#111",
            color: "#fff",
            borderColor: "#333",
            borderRadius: "8px",
          },
        }}
        sx={{ width: "200px", mb: 4 }}
      />

      {/* Butonlar */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#333",
            ":hover": { borderColor: "#fff" },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#28C662",
            ":hover": { backgroundColor: "#1E9E50" },
          }}
        >
          Next
        </Button>
      </Stack>

      {/* Alt Bilgiler */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          fontSize: "12px",
          opacity: 0.6,
        }}
      >
        <Typography>176043 Metamask Accounts</Typography>
        <Typography>100076 Twitter Accounts</Typography>
        <Typography>100131 Telegram Accounts</Typography>
        <Typography>17 Unique Users</Typography>
      </Box>
    </Box>
  );
};

export default PageHome;

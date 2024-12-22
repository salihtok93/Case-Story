import React from "react";
import { Box, Typography } from "@mui/material";

const LastPage = () => (
  <Box
    sx={{
      backgroundColor: "#000000",
      color: "#FFFFFF",
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Hesaplar */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
        maxWidth: "1200px",
        marginBottom: "2rem",
      }}
    >
      {[
        { count: "176043", label: "Metamask Accounts" },
        { count: "100076", label: "Twitter Accounts" },
        { count: "100131", label: "Telegram Accounts" },
      ].map((item, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {item.count}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              opacity: 0.8,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>

    {/* Unique Users */}
    <Typography
      sx={{
        fontSize: "1.2rem",
        color: "#FFFFFF",
        textAlign: "center",
        opacity: 0.7,
      }}
    >
      BUT STILL 123123
    </Typography>
    <Typography
      sx={{
        fontSize: "3.5rem",
        fontWeight: "bold",
        color: "#00FF00",
        textAlign: "center",
      }}
    >
      UNIQUE USERS
    </Typography>
  </Box>
);

export default LastPage;

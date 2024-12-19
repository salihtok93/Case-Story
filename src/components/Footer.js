import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
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
);

export default Footer;

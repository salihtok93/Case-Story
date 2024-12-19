import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => (
  <>
    <Box component="span" sx={{ fontWeight: "bold" }}>
      Leg1t
    </Box>
    <Typography variant="h1" sx={{ mb: 4 }}>
      <Box component="span" sx={{ fontWeight: "bold" }}>
        Who are
      </Box>{" "}
      <Box component="span" sx={{ color: "#28C662", fontWeight: "bold" }}>
        you?
      </Box>
    </Typography>
  </>
);

export default Header;

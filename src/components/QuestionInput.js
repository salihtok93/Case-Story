import React from "react";
import { TextField, Typography } from "@mui/material";

const QuestionInput = ({ question, placeholder, value, handleChange }) => (
  <>
    <Typography variant="subtitle1" sx={{ mb: 2 }}>
      {question}
    </Typography>
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
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
  </>
);

export default QuestionInput;

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import Header from "./components/Header";
import QuestionInput from "./components/QuestionInput";
import Footer from "./components/Footer";

const PageHome = () => {
  const [step, setStep] = useState(0); // Form adımlarını yönetmek için.
  const [data, setData] = useState({
    twitter: "",
    metamask: "",
    telegram: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  // Soruların listesi
  const questions = [
    {
      key: "twitter",
      question: "How many Twitter(X) accounts do you have?",
      placeholder: "Enter a number",
    },
    {
      key: "metamask",
      question: "How many Metamask accounts do you have?",
      placeholder: "Enter a number",
    },
    {
      key: "telegram",
      question: "How many Telegram accounts do you have?",
      placeholder: "Enter a number",
    },
  ];

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
      <Header />
      <QuestionInput
        question={questions[step].question}
        placeholder={questions[step].placeholder}
        value={data[questions[step].key]}
        handleChange={(e) =>
          handleInputChange({
            target: { name: questions[step].key, value: e.target.value },
          })
        }
      />
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={prevStep}
          sx={{
            color: "#fff",
            borderColor: "#333",
            ":hover": { borderColor: "#fff" },
          }}
          disabled={step === 0}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={nextStep}
          disabled={!data[questions[step].key]}
          sx={{
            backgroundColor: "#28C662",
            ":hover": { backgroundColor: "#1E9E50" },
          }}
        >
          {step === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </Stack>
      <Footer />
    </Box>
  );
};

export default PageHome;

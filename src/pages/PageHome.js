import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import Header from "../components/Header";
import QuestionInput from "../components/QuestionInput";
import Footer from "../components/Footer";
import SummaryOutput from "./SummaryOutput";

const PageHome = () => {
  const [step, setStep] = useState(0); // Form adımlarını yönetmek için
  const [data, setData] = useState({
    twitter: "",
    metamask: "",
    telegram: "",
  });
  const [submitted, setSubmitted] = useState(false); // Formun tamamlandığını takip etmek için

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

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

  const handleFinish = () => {
    setSubmitted(true);
  };

  const stats = {
    topStats: [
      { count: data.twitter, label: "Twitter Accounts" },
      { count: data.metamask, label: "Metamask Accounts" },
      { count: data.telegram, label: "Telegram Accounts" },
    ],
  };

  if (submitted) {
    return <SummaryOutput stats={stats} />;
  }

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
          onClick={step === questions.length - 1 ? handleFinish : nextStep}
          sx={{
            backgroundColor: !data[questions[step].key] ? "#1c894c" : "#4BEA83",
            ":hover": {
              backgroundColor: !data[questions[step].key]
                ? "#1c894c"
                : "#4BEA83",
            },
          }}
        >
          Next
        </Button>
      </Stack>
      <Footer />
    </Box>
  );
};

export default PageHome;

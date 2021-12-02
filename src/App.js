import React, { useState } from "react";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Container from "./styles/Container";
import { Route, Routes } from "react-router";
import Greeting from "./pages/Greeting";
import Test from "./pages/Test";
import Results from "./pages/Results";
import { AppContext } from "./context";
import jsonData from "./data.json";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [data] = jsonData;

  return (
    <AppContext.Provider
      value={{
        answers,
        setAnswers,
        ...data,
      }}
    >
      <Container>
        <GlobalStyles />
        <Header />
      </Container>
    </AppContext.Provider>
  );
};

export default App;

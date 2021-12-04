import React, { useState } from "react";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Container from "./styles/Container";
import { AppContext } from "./context";
import jsonData from "./data.json";
import MainContent from "./styles/MainContent";
import AppRouter from "./components/AppRouter";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [name, setName] = useState("");
  const [data] = jsonData;

  return (
    <AppContext.Provider
      value={{
        answers,
        setAnswers,
        name,
        setName,
        currentQuestionId,
        setCurrentQuestionId,
        ...data,
      }}
    >
      <Container>
        <GlobalStyles />
        <Header />
        <MainContent>
          <AppRouter />
        </MainContent>
      </Container>
    </AppContext.Provider>
  );
};

export default App;

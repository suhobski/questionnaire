import React from "react";
import { Route, Routes } from "react-router";
import Greeting from "../../pages/Greeting";
import Test from "../../pages/Test";
import Results from "../../pages/Results";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/questionnaire" element={<Greeting />} />
      <Route path="/questionnaire/test" element={<Test />} />
      <Route path="/questionnaire/results" element={<Results />} />
      <Route path="*" element={<h2>404 error</h2>} />
    </Routes>
  );
};

export default AppRouter;

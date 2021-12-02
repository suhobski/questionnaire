import React, { useContext } from "react";
import { AppContext } from "../../context";

const Greeting = () => {
  const context = useContext(AppContext);
  console.log("context :>> ", context);
  return (
    <div>
      <h1>Greeting</h1>
    </div>
  );
};

export default Greeting;

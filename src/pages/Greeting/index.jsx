import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Button from "../../styles/Button";
import TextInput from "../../styles/TextInput";
import { AppContext } from "../../context";
import Wrap from "../../styles/Wrap";

const Greeting = () => {
  const { name, setName, nameStartButton } = useContext(AppContext);
  let navigate = useNavigate();

  return (
    <Wrap>
      <h3>Введите имя:</h3>
      <TextInput value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={() => navigate("/questionnaire/test")} disabled={!name}>
        {nameStartButton}
      </Button>
    </Wrap>
  );
};

export default Greeting;

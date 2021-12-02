import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { AppContext } from "../../context";
import Wrap from "./Wrap";

const Greeting = () => {
  const { name, setName, nameStartButton } = useContext(AppContext);
  let navigate = useNavigate();

  return (
    <Wrap>
      <h3>Введите имя:</h3>
      <TextInput value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={() => navigate("/test")} disabled={!name}>
        {nameStartButton}
      </Button>
    </Wrap>
  );
};

export default Greeting;

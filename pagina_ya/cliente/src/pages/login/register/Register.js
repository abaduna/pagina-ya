import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NavBar from "../../../componets/Navbar/NavBar";

const Register = () => {
  const [username, setUsername] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [reptcontraseña, setReptcontraseña] = useState("");
  const registrar = () => {};
  return (
    <>
      <NavBar />
      <h4>Registrate</h4>
      <form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Usuario"
            value={username}
            aria-label="Usuario"
            aria-describedby="basic-addon1"
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-describedby="basic-addon1"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Repeti contraseña"
            aria-label="Repeti contraseña"
            aria-describedby="basic-addon1"
            value={reptcontraseña}
            onChange={(e) => setReptcontraseña(e.target.value)}
          />
        </InputGroup>
        <Button onClick={registrar}>Iniciar secion</Button>
      </form>
    </>
  );
};

export default Register;

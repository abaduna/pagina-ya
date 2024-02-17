import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Login() {
  const [username, setUsername] = useState("");
  const [contraseña, setContraseña] = useState("");
  const inicio = () => {};
  return (
    <>
      <h4>inicia secion</h4>
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
        
        <Button onClick={inicio}>Iniciar secion</Button>
      </form>
    </>
  );
}

export default Login;

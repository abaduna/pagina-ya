import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NavBar from "../../componets/Navbar/NavBar";
import { useData } from "../../hoock/data";
import Button from "react-bootstrap/esm/Button";

function SubirServicio() {
  const {
    name,
    setName,
    profession,
    setProfession,
    sendData,
    data,
    loading,
    error,
  } = useData();
  console.log(loading);
  console.log(data);
  if (error) {
    return <h1>Error</h1>
  }
  if (loading) {
    console.log(loading);
    return <h1>Cargando...</h1>
  }
  return (
    <>
      <span>{data}</span>
      <NavBar />
      <form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nombre"
            aria-label="Nombre"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Servicio"
            aria-label="Servicio"
            aria-describedby="basic-addon1"
            onChange={(e) => setProfession(e.target.value)}
          />
        </InputGroup>
        <Button variant="danger" onClick={sendData}>
          {" "}
          Agregar
        </Button>
      </form>
    </>
  );
}

export default SubirServicio;

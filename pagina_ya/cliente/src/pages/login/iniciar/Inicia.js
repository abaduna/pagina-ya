import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import Alert from "react-bootstrap/Alert";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const inicio = (object) => {
    console.log(object);
  };
  return (
    <>
      <h4>inicia secion</h4>
      <form onSubmit={handleSubmit(inicio)}>
        {errors?.usuario && (
          <Alert variant="danger">El campo es obligatorio</Alert>
        )}
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Usuario"
            aria-label="Usuario"
            aria-describedby="basic-addon1"
            {...register("usuario", {
              required: true,
            })}
          />
        </InputGroup>
        {errors?.contraseña && (
          <Alert variant="danger">El campo es obligatorio</Alert>
        )}
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-describedby="basic-addon1"
            {...register("contraseña", {
              required: true,
            })}
          />
        </InputGroup>

        <Button type="submit">Iniciar secion</Button>
      </form>
    </>
  );
}

export default Login;

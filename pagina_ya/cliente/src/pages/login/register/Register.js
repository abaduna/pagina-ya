import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NavBar from "../../../componets/Navbar/NavBar";
import { useForm } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import {useFetch} from "../../../hoock/useFetch"
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [endpoint, setEndpoint] = useState("register");
  const { state, postData } = useFetch(endpoint);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const registrar = async(object) => {
    console.log(object);
    const data = {
      username: object.usuario,
      password: object.contraseña,
    };
   await postData(endpoint, data);
    console.log(state);
    await console.log(state.data.message);
    if (state.data.message ==="Usuario creado con éxito") {
      navigate("/iniciosecion");
    }
  };
  const password = watch("contraseña", "");
  return (
    <>
      <NavBar />
      <h4>Registrate</h4>
      <form onSubmit={handleSubmit(registrar)}>
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
        {errors?.repcontraseña && (
          <Alert variant="danger">La contraseña no coinciden</Alert>
        )}
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Repeti contraseña"
            aria-label="Repeti contraseña"
            aria-describedby="basic-addon1"
            {...register("repcontraseña", {
              required: true,
              validate: (value) =>
                value === password || "La contraseña no coinciden",
            })}
          />
        </InputGroup>
        <Button type="submit">Iniciar secion</Button>
      </form>
    </>
  );
};

export default Register;

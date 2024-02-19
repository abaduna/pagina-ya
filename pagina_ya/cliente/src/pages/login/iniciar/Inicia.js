import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import { useFetch } from "../../../hoock/useFetch";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [endpoint, setEndpoint] = useState("usuarios");
  const { state, postData } = useFetch(endpoint);
  const { data, loading, error } = state;
  const [credencialesIncontectas,setCredencialesIncontectas] = useState(false)
  const [userIncontectas,setUserIncontectas] = useState(false)
  const inicio = async(object) => {
    console.log(object);
    const data = {
      username: object.usuario,
      password: object.contraseña,
    };
    await  postData(endpoint, data);
    await console.log(state.data);
    if (state.data.message === "Usuario no encontrado") {
      return setUserIncontectas(true)
    }
    if (state.data.message === "Credenciales incorrectas") {
      return setCredencialesIncontectas(true)
    }
    if (state.data.message === "Usuario autenticado con éxito") {
      navigate("/");
    }//usuario no encontrado
    
  };
  return (
    <>
      <h4>inicia secion</h4>
      <form onSubmit={handleSubmit(inicio)}>
        {credencialesIncontectas &&<Alert variant="danger">Contraseña incorrectas</Alert> }
        {userIncontectas &&<Alert variant="danger">Usuario no encontrado</Alert> }
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

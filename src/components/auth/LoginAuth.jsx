//en este componente se va a hacer el login de los usuarios

import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext } from "../../context/CreteContext";

const LoginAuth = () => {
  //creamos un estafo para controlar los errores
  const [errorMessages, setErrorMessages] = useState("");
  const { loginUser, resetPassword, signInGoogle } = useContext(CreateContext);
  //usamos useForm para manejar los datos del formulario
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  //creamos una funcion para redirigir al usuario a la pagina de home
  const navigateToHome = useNavigate();

  //funcion que se ejecuta al enviar el formulario
  const onSubmit = async (data) => {
    try {
      console.log(data);
      await loginUser(data.email, data.password);
      reset();
      navigateToHome("/home");
    } catch (error) {
      console.log(error);
    }
    console.log(data);
    reset();
  };

  const resetPass = async () => {
    const email = getValues("email");
    if (!email) return setErrorMessages("El email es requerido");
    try {
      await resetPassword(email);
    } catch (error) {
      console.log(error);
    }
  };

  const loginGoogleAuth = async () => {
    try {
      await signInGoogle();
      navigateToHome("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      component={"form"}
      noValidate
      autoComplete={"off"}
      width={"50%"}
      m={"0 auto"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
        {...register("email", {
          required: {
            value: true,
            message: "El email es requerido",
          },
        })}
      />
      <TextField
        id="outlined-basic2"
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : ""}
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
        })}
      />
      <Box mt={2}>
        <Link
          to=""
          style={{ textDecoration: "none", color: "black" }}
          onClick={resetPass}
        >
          Olvidaste tu contraseña?
        </Link>
      </Box>
      {errorMessages && (
        <Box mt={2} color="red">
          {errorMessages}
        </Box>
      )}
      <Box display={"flex"} justifyContent={"space-evenly"} mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
        <Button variant="contained" color="error" onClick={loginGoogleAuth}>
          Google
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Go to Register
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default LoginAuth;

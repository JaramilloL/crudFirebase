import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CreateContext } from "../../context/CreteContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { errorsRegister } from "../../utils/Errors";
const RegisterAuth = () => {
  //traemos la funcion para registrar un usuario
  const { registerUser } = useContext(CreateContext);
  //usamos useForm para manejar los datos del formulario
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  //funcion para enviar los datos del formulario

  //creamos una funcion para redirigir al usuario a la pagina de home
  const navigateToHome = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      console.log(data);
      toast.success("Usuario registrado correctamente");
      reset();
      await navigateToHome("/home");
    } catch (error) {
      console.log(error);
      if(error){
        const foundError = errorsRegister.find(err => err.code === error.code)
        toast.error(foundError.message)
      }else{
        toast.error("error desconocido: " + error.code)
      }
    }
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      width={"50%"}
      m={"0 auto"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="outlined-basic"
        label="Register"
        name="email"
        variant="outlined"
        error={errors.email ? true : false}
        helperText={errors.email ? "Email is required" : ""}
        margin="normal"
        fullWidth
        type="email"
        {...register("email", { required: true })}
      />
      <TextField
        id="outlined-basic2"
        label="Password"
        name="password"
        variant="outlined"
        error={errors.password ? true : false}
        helperText={errors.password ? "Password is required" : ""}
        margin="normal"
        fullWidth
        type="password"
        {...register("password", { required: true })}
      />
      <Box display={"flex"} justifyContent={"space-evenly"} mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
        <Button variant="contained" color="secondary" type="button">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Go to Login
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterAuth;

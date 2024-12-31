import { Box, Button, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { useContext } from "react";
import { CreateContext } from "../../../context/CreteContext";

const CreateTasks = () => {
    //traemos el contexto del usuario logeado
    const { user } = useContext(CreateContext);

  //vamos a crear un formulario para crear tareas
  //vamos a usar useForm para manejar los datos del formulario
  //usaremos dos input uno para el nombre de la tarea y otro para la descripcion
  //y un boton para enviar los datos

  const { handleSubmit, register, reset, formState: { errors }, getValues } = useForm();

    //funcion que se ejecuta al enviar el formulario
    const onSubmit = async (data) => {
        try {
            console.log(data);
            reset();
        } catch (error) {
            console.log(error);
        }
        console.log(data);
        reset();
    };

    //usaremos firebase para almacenar los datos de las tareas
    const createTask = async () => {
        const taskname = getValues("taskname");
        const description = getValues("description");
        const newTask = await addDoc(collection(db, "taskCRUD"), {
            idUser: user.uid,
            createdAt: new Date(),
            taskname,
            description
        });
        console.log(newTask);
        console.log(newTask.id);
    }

  return (
    <Box
      component="form"
      autoComplete="off"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="50%"
      m="0 auto"
      onSubmit={handleSubmit(onSubmit)}
    >
    <Box display="flex" justifyContent="end" alignItems="center" width="100%">
        <Button variant="outlined" color="primary">
            <Link to="/home" style={{ textDecoration: "none", color: "blue" }}>
                Home
            </Link>
        </Button>
    </Box>
      <h2>Create Tasks</h2>
      <TextField
        id="outlined-basic"
        label="Task Name"
        name="taskname"
        variant="outlined"
        margin="normal"
        fullWidth
        error={errors.taskname ? true : false}
        helperText={errors.taskname ? errors.taskname.message : ""}
        {
            ...register("taskname", {
                required: {
                    value: true,
                    message: "Task name is required"
                }
            })
        }
      />
      <TextField
        id="outlined-basic2"
        label="Description"
        name="description"
        variant="outlined"
        margin="normal"
        fullWidth
        error={ errors.description ? true : false }
        helperText={ errors.description ? errors.description?.message : "" }
        {
            ...register("description", {
                required: {
                    value: true,
                    message: "Description is required"
                }
            })
        }
      />
      <Box
        mt={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Button type="submit" variant="contained" color="primary" fullWidth onClick={createTask}>
          Create Task
        </Button>
      </Box>
    </Box>
  );
};

export default CreateTasks;

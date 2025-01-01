import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";

const UpdateTask = ({ task }) => {
  // Verifica que el objeto `task` tenga un `id`.

  //crearemos un componente que nos permita actualizar una tarea
  //usaremos useForm para manejar los datos del formulario
  //usaremos dos input uno para el nombre de la tarea y otro para la descripcion
  //y un boton para enviar los datos

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskname: task?.taskname || "",
      description: task?.description || "",
    },
  });

  if (!task?.id) {
    toast.error("El objeto task no tiene un id válido.");
    return null;
  }
  const newRef = doc(db, "taskCRUD", task.id);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await updateDoc(newRef, {
        taskname: data.taskname,
        description: data.description,
      });
      toast.success("Task updated successfully");

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "white",
        p: 2,
        borderRadius: 2,
      }}
    >
      <TextField
        id="taskname"
        label="Task Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="taskname"
        error={errors.taskname ? true : false}
        helperText={errors.taskname ? errors.taskname.message : ""}
        {...register("taskname", {
          required: {
            value: true,
            message: "Task name is required",
          },
        })}
      />
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        name="description"
        error={errors.description ? true : false}
        helperText={errors.description ? errors.description.message : ""}
        {...register("description", {
          required: {
            value: true,
            message: "Description is required",
          },
        })}
      />
      <Box mt={2} display={"flex"} justifyContent={"center"}>
        <Button variant="contained" color="primary" size="large" type="submit">
          Update Task
        </Button>
      </Box>
      <ToastContainer position="bottom-right"/>
    </Box>
  );
};

export default UpdateTask;

UpdateTask.propTypes = {
  task: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ModalUpdate from "./createTasks/ModalUpdate";
import { useState } from "react";
const TaskCard = ({ task, deleteTask  }) => {
  const [open, setOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const handleOpen = (ts) => {
    setSelectedTask(ts)
    setOpen(true)
  }

  const handleClose = ()=> setOpen(false)

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      mt={2}
      width={"50%"}
      m="0 auto"
    >
      {task.map((ts) => (
        <Card
          key={ts.id}
          sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2, mt: 2 }}
        >
          <CardContent>
            <Box mb={2} p={1}>
              <Typography variant="h6" component="div" textAlign="center">
                <strong>Task:</strong>
              </Typography>
              <Divider />
            </Box>
            <Typography variant="body2" component="div">
              {ts.taskname}
            </Typography>
            <Box m={2} p={1}>
              <Typography variant="h6" component="div" textAlign="center">
                <strong>Description:</strong>
              </Typography>
              <Divider />
            </Box>
            <Typography variant="body2" component="p">
              {ts.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="error"
              onClick={() => deleteTask(ts.id)}
            >
              Eliminar
            </Button>
            <Button size="small" color="primary" onClick={()=> handleOpen(ts)}>
              Editar
            </Button>
          </CardActions>
        </Card>
      ))}
     <ModalUpdate open={open} handleClose={handleClose} task={selectedTask} />
    </Box>
  );
};

export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.array.isRequired,
  deleteTask: PropTypes.func,
};

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
const TaskCard = ({ task, deleteTask }) => {
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
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.array.isRequired,
  deleteTask: PropTypes.func,
};

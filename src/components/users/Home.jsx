import { useContext } from "react";
import { CreateContext } from "../../context/CreteContext";
import { Link, Navigate } from "react-router-dom";
import DrawerList from "./DrawerList";
import TaskAll from "../tasks/TaskAll";
import { Button } from "@mui/material";

const Home = () => {
  const { user } = useContext(CreateContext);
  console.log(user && user.email);

  if (!user) return <Navigate to="/" />;
  return (
    <div>
      <DrawerList />
      <Button variant="outlined" color="primary" >
        <Link to="/createTasks" style={{ textDecoration: "none", color: "blue"}}>Crear Tarea</Link>
      </Button>
      <TaskAll />
    </div>
  );
};

export default Home;

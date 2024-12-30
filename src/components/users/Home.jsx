import { useContext } from "react"
import { CreateContext } from "../../context/CreteContext"
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
    const { user, logout } = useContext(CreateContext);
    console.log(user && user.email)

    if (!user) return <Navigate to='/'/>
  return (
    <div>
        <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
    </div>
  )
}

export default Home
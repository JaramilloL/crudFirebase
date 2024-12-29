import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { CreateContext } from "./CreteContext";
import PropTypes from "prop-types";
const StateContext = ({ children }) => {
  //aquie crearemos el contexto global del registro e inicio de secion de los usuarios
  //registro de uaurios
  const registerUser = async (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //creamos la funcion para logear a los usuarios
  const loginUser = async (email, password) => 
      await signInWithEmailAndPassword(auth, email, password);
    

  return (
    <CreateContext.Provider
      value={{
        registerUser,
        loginUser
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default StateContext;

StateContext.propTypes = {
  children: PropTypes.node.isRequired,
};

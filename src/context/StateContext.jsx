import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { CreateContext } from "./CreteContext";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const StateContext = ({ children }) => {
  //creamos un estado para almacenar los usuarios logeados
  const [user, setUser] = useState(null);
  //aquie crearemos el contexto global del registro e inicio de secion de los usuarios
  //registro de uaurios
  const registerUser = async (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //creamos la funcion para logear a los usuarios
  const loginUser = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  //creamos la funcion para un logout
  const logout = async() => {
    signOut(auth);
  }

  //reseteamos la contraseña
  const resetPassword = async(email) => 
    sendPasswordResetEmail(auth, email)

  //creamos el provedor de google para el login y el uso de popover
  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser)
    });
    return ()=> unsubscribe();
  }, []);

  return (
    <CreateContext.Provider
      value={{
        registerUser,
        loginUser,
        user,
        logout,
        resetPassword,
        signInGoogle,
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

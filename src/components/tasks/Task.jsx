import { collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { CreateContext } from "../../context/CreteContext";

const Task = () => {
    const { user } = useContext(CreateContext);
    //creamos un estado para almacenar las tareas
    const [task, setTask] = useState([])
    //vamos a leer datos desde firebase mediante una query
    const q = query(collection(db, "taskCRUD"), where("idUser", "==", user.uid), orderBy("createdAt", "desc"));

   useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        try {
            const newTask = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setTask(newTask);
        } catch (error) {
            console.log(error);
        }
    });
    return ()=> unsubscribe();
} , [q])

    //creamos una funcion para eliminar tareas
    const deleteTask = async (id) => {
        try {
            console.log("id: ", id);
            await deleteDoc(doc(db, "taskCRUD", id));
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <TaskCard task={task} deleteTask={deleteTask} />
    </div>
  )
}

export default Task
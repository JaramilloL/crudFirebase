import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
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

  return (
    <div>
        <TaskCard task={task} />
    </div>
  )
}

export default Task
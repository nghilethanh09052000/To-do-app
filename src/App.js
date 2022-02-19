import './App.css';
import Form from './component/Form';
import Todo from './component/Todo';
import {db} from './firebase'
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos]= useState([]);
  const [status , setStatus] = useState(false)
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ 
          ...doc.data(),
           id: doc.id });
      });
      setTodos(todosArray.filter( (item) => item.completed === status ));
      console.log(todosArray.filter( (item) => item.completed === status))
      console.log(todos)
    });

    return () => unsub();
  }, [status]);
  
  const handleStatus = async (e) =>{
    await setStatus(e)
  }

  const handleComplete = async (todo)=>{
    await updateDoc(doc(db,"todos",todo.id),{
      completed:!todo.completed
    })
  }
  const handleDelete = async (todo)=>{
    await deleteDoc(doc(db,"todos",todo.id))
  }
  return (
    <div className="App">
    {console.log(status)}
      <Form 
        handleStatus={handleStatus}
      />
      <ul>
        {todos.map((todo)=>(
          <Todo
            key={todo.id}
            todo={todo}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
     
        
      
    </div>
  );
}

export default App;

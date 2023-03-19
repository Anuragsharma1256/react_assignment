import React, { useState,useEffect } from "react";
import Header from './components/Header';
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import './App.css';

const App = () => {

  const initilState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [todos, setTodos] = useState(initialstate);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() =>{
    localStorage.setItem("todos",json.stringify(todo));
  },[todos]);
  return( <div className='container'>
   <div className='app-wrapper'>
   <div >
   <header />
   </div>
   <div>
    <Form
    input={input}
    setInput={setInput} 
    todos={todos}
    setTodos={setTodos}
    editTodo={editTodo}
    setEditTodo={setEditTodo}
    />
   </div>
   <div>
    <Todolist
     todos={todos} 
      setTodos={setTodos}
        setEditTodo={setEditTodo}
        />
   </div>
   </div>
</div>
  );
}

export default App;

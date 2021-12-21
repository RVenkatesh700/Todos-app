import React, {useState} from 'react'
import './App.css';
import TodoList from './TodoList';

function App() {
 const [task,setTask] = useState("");
 const [todos,setTodos]= useState([]);
 const changeHandler = e => {
  setTask(e.target.value)
 }
 
 const submitHandler = e => {
   e.preventDefault();
   console.log(task)
   const newTodos = [...todos,task]
   setTodos(newTodos);
   setTask("");
 }

const deletHandler = (indexValue) =>{
  const newTodos = todos.filter((todos,index)=> index !== indexValue)
  setTodos(newTodos);
}
  return (
    <div className="App">
      <h3>Todo Management Application</h3>
      <form onSubmit={submitHandler}>
        <input  size="30" type="text" name="task" value={task} onChange={changeHandler}/> &nbsp; &nbsp;
        <input type="submit" value="Add" name="Add"  />
      </form>

      <TodoList todos={todos} deletHandler={deletHandler} />
        </div>
  );
}

export default App;

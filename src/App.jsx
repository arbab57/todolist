import { useState } from 'react'
import './App.css'
import Form from './form';
import Ul from './ul';




function App() {
  const [todos, setTodos] = useState([])

function addTodo(li) {
  setTodos(currentTodos => {
    return [
        ...currentTodos, li
    ]
})
}

 function handleDelete(index) {

  setTodos(todos.filter((task, taskIndex) => {
  
    return taskIndex !== index
    

  }))}
  


  return (

   <main>

      <h1>Todo List</h1>

      <Form onSubmit={addTodo} />
        
      <Ul array={todos} handleDelete={handleDelete}/>

    </main>
  )

}

export default App

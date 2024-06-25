import './App.css'
import { useState } from 'react'

function Form(props) {
    const [todo, setTodo] = useState('')
    
    
    
   
    function handleSubmit(e) {
        e.preventDefault()

    
            props.onSubmit(todo);
            setTodo('')
        

    }



 
  

    

    return (
       
            
    <form onSubmit={handleSubmit} action="">

      <div className="con-input">

        <input placeholder='Add item' value={todo} onChange={e => setTodo(e.target.value)} className='input-todo' type="text" />

        <button className='btn-add'>Add Task</button>
       

      </div>

   

    </form>

    )

}

export default Form
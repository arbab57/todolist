import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Ul(props) {
    const list = props.array

    
return (

    

 

    <ul>

        
        {list.map((task, Index) => {
            return (
      

                <div className='con-task'>

                        <div className='con-task-li'>
                            <li>{task}</li>
                        </div>

                        <button id='btn-del' onClick={() => {props.handleDelete(Index)}} ><FontAwesomeIcon className='del-icon' icon={faTrash}/></button>
        
                </div>

      
      )
    })}
  
  </ul>


)
}

export default Ul
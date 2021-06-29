import React from 'react'
import './component.css'

function Todo({ todo, deleteTask, handleToggle }) {
  const { id, task, complete } = todo;

   return (
        <div className = {complete? 'wrapTask active':'wrapTask'}>
              <p className='task'>{task}</p>
              <div className = 'btn'>
                <input
                    className = 'checked'
                    onChange={()=>handleToggle(id)}
                    type="checkbox"
                    checked = {complete}
                />
                <button onClick={() => deleteTask(id)} className = 'deleteTask'>
                delete
                </button>
             </div>
        </div>
    )
}

export default Todo

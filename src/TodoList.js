import React from 'react'

const TodoList = ({todos, deletHandler}) => {
    return (
        <div>
            {todos.map((todo,index)=>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={()=> deletHandler(index)}>Delete</button>  </h5>
            </div> 
            )}
        </div>
    )
}

export default TodoList

import React from "react";

const Todolist = ({ todos,setTodos, setEditTodo}) => {

    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item) =>{
            if(item.id === todo.id){
                return {...React.items,completed: !item.completed}
            }
            return item;
            })
        );

    };

    const handleEdit =({id}) =>{
        const findTodo = todos. find((todo) => todo.id ===id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div>
        {todos.map((todos) =>(
            <li className="todos-list" key={todos.id}>
                 <input 
                 type="text"
                  value={todos.title}
                   className=['list $ {todo.completed ? "completed":""]
                    onChange={(event)  => event.preventDefault()}
                    />
                    <div>
                        
                    <button className="button-complete task-button" onClick={()=> handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleElement(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
                            <i className="fa fa-transh"></i>
                        </button>
                    </div>
            </li>

        )
        )}
    </div>
  )
}

export default Todolist
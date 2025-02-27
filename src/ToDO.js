import { useState } from "react"; 

function TodoForm() { 
const [todos, setTodos] = useState([{ name: "", label: "" }]); 

const handleTodoChange = (e, i) => { 
	const field = e.target.name; 
	const newTodos = [...todos]; 
	newTodos[i][field] = e.target.value; 
	setTodos(newTodos); 
}; 

const handleAddTodo = () => { 
	setTodos([...todos, { name: "", label: "" }]); 
}; 

const handleDeleteTodo = (i) => { 
	const newTodos = [...todos]; 
	newTodos.splice(i, 1); 
	setTodos(newTodos); 
}; 

const handleSubmit = (event) => { 
	event.preventDefault(); 
	console.log(todos); 
	setTodos([]); 
}; 

return ( 
    <form onSubmit={handleSubmit}> 
      {todos.map((todo, index) => ( 
        <div key={index}> 
          <input 
            type="text"
            placeholder="Name"
            name="name"
            value={todo.name} 
            onChange={(e) => handleTodoChange(e, index)} 
            required 
          /> 
          <select 
            value={todo.label} 
            name="label"
            onChange={(e) => handleTodoChange(e, index)} 
            required 
          > 
            <option value="">label</option> 
            <option value="important">Important</option> 
            <option value="not-important">Not Important</option> 
          </select> 
          <button onClick={() => handleDeleteTodo(index)}>Delete</button> 
        </div> 
      ))} 
      <button onClick={handleAddTodo}>Add Todo</button> 
      <button type="submit">Submit Todos</button> 
    </form> 
  ); 
} 

export default TodoForm; 

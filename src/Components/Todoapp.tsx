import { useState } from "react"
import { TodoItem } from "./types"
import { Todo } from "./Todolist"
import Header from "./Header";
import Footer from "./Footer";

function Todoapp() {
    const [todos,SetTodos] = useState<TodoItem[]>([]);
    const [input,SetInput] = useState('');

    const addTodo = (text:string) => {
        const newTodo: TodoItem = {
            id: Date.now(),
            text,
            isCompleted: false,
        }
        SetTodos([...todos,newTodo])
    }

    const toggleTodo = (id: number) => {
const newTodos = todos.map(todo => {
    if(todo.id=== id){
        return {...todo,isCompleted: !todo.isCompleted}
    }
    return todo;
})
SetTodos(newTodos);
    }
  return (
    <div className="App">
        <div className="header"><Header/></div>
        <div className="container">
        <input type="text" placeholder="Skriv ny todo.." value={input}
        onChange={e => SetInput(e.target.value)} />
        <button onClick={() => addTodo(input)}>Lägg till</button>
        <ul>
            {todos.map(todo => (
                <Todo key= {todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
        <div className="footer ">
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Todoapp
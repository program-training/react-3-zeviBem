import { useEffect, useState } from "react";
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}
interface ToDoProps {
    userId: number | null;
  }
function DoList({userId}: ToDoProps): JSX.Element {
    const [todo, setTodo] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
            const data = await fetch("https://jsonplaceholder.typicode.com/todos");
            const jsonData: Todo[] = await data.json();
            setTodo(jsonData);
           
            }
            catch(error) {
                console.error("Error finding data", error)
            }
        }
        fetchTodo()
    }, []);
    const filterToDo = userId ? todo.filter((item) => item.userId === userId) : [];
    const filterFiveToDo = filterToDo.slice(0,5)
    return (
        <div className="showData">
                <ol>
                    
                 
                        {filterFiveToDo.map((mis) => (
                            <li key = {mis.id}>{  mis.title+ mis.completed}</li>
                        ))}
            
       
                </ol>
            
            
        </div>

    )
}

export default DoList
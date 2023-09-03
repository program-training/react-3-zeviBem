import { Users } from "../UsersFromServe/UsersFromServe";
import { useEffect, useState } from "react";
import DoList from "../TodoList/TodoList"
import "./userCard.css"
export interface User {
    id: number;
    name: string;
    email: string;
  }
function Card(): JSX.Element {
    const [user, setUser] = useState<Users[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData: Users[] = await data.json();
            setUser(jsonData);
            }
            catch(error) {
                console.error("Error finding data", error)
            }
        }
        fetchUsers()
    }, []);
    const handleUserCardClick = (userId: number) => {
        setSelectedUserId(userId);
      };
    return (
        <div className="showData">
            <h1>Users</h1>
        <div className="continerCard">
            {user.map((use) => (
                <div className="card" key = {use.id} onClick={() => handleUserCardClick(use.id)} >
                    <p>{use.name}</p>
                    <p>{use.email}</p>
                    <p>{selectedUserId === use.id && <DoList userId={selectedUserId} />}</p>
                </div>
            ))}
        </div>
        <button onClick={() => setSelectedUserId(null)}>Clear Data</button>
        </div>
    )
}
export default Card
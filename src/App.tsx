import "./App.css";
import Card from "./UserCard/UserCard";
import FromServer from "./UsersFromServe/UsersFromServe";
import DoList from "./TodoList/TodoList";
import { Example } from "./components/Example/Example";

function App() {
  return (
    <>
        <FromServer/>
        <Card/>
    
    </>
  );
}

export default App;

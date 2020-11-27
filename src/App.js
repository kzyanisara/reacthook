import './App.css';
import Clock from "./Clock";
import {TodoList} from "./todoHook/todoList";

function App() {
    return (
        <div className="App">
            <Clock/>
            <TodoList/>
        </div>

    );
}

export default App;

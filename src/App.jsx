import { useState } from 'react';
import Todo from './components/todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() === '') return;

    // Store task as an object with `text` and `completed` status
    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const completeTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>📝 To-Do List</h1>
        <div className="inpcontainer">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button className="addbtn" onClick={addTodo}>Add</button>
        </div>

        <ul className="tasks">
          {todos.map((item, index) => (
            <Todo
              key={index}
              task={item.text}
              index={index}
              isCompleted={item.completed}
              onDelete={deleteTodo}
              onComplete={completeTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

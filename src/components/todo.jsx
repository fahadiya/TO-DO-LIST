import { FaTrash, FaCheck } from 'react-icons/fa';
import '../App.css';

function Todo({ task, index, onDelete, onComplete, isCompleted }) {
  return (
    <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
      <span>{task}</span>
      <div className="icons">
        <FaCheck className="check" onClick={() => onComplete(index)} />
        <FaTrash className="trash" onClick={() => onDelete(index)} />
      </div>
    </li>
  );
}

export default Todo;

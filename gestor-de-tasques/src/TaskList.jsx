import React from 'react';

export function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <ul id="taskList">
      {tasks.length === 0 ? (
        <p>No hi ha tasques pendents!</p>
      ) : (
        tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <div className="actions">
              <button onClick={() => editTask(index)}>✏️</button>
              <button onClick={() => deleteTask(index)}>🗑️</button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

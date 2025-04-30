import React, { useContext, useEffect } from 'react';
import './styles.css';
import { Sidebar } from './Sidebar';
import { TaskList } from './TaskList';
import { AppContext } from './AppContext';

function App() {
  const { theme, selectedUser, tasks, addTask, toggleTask, editTask, deleteTask } = useContext(AppContext);

  useEffect(() => {
    document.body.className = theme; // Aplica el tema al cos
  }, [theme]);

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        {selectedUser ? (
          <div className="card">
            <h1>{selectedUser.name}</h1>
            <p>Tasques pendents: {tasks.filter((t) => !t.completed).length}</p>
            <p>Tasques completades: {tasks.filter((t) => t.completed).length}</p>
            <input
              type="text"
              id="newTaskInput"
              placeholder="Nueva tarea..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addTask(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            <button
              onClick={() => {
                const input = document.getElementById('newTaskInput');
                addTask(input.value);
                input.value = '';
              }}
            >
              Añadir Tarea
            </button>
            <TaskList
              tasks={tasks}
              toggleTask={toggleTask}
              editTask={(index) => {
                const newText = prompt('Edita la tasca:', tasks[index].text);
                if (newText) editTask(index, newText);
              }}
              deleteTask={deleteTask}
            />
          </div>
        ) : (
          <div className="card">
            <h1>Selecciona un usuario</h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    setTasks(user.tasks || []); // Carregar les tasques de l'usuari seleccionat
  };

  const addUser = (newUserName) => {
    if (newUserName.trim() !== '') {
      const newUser = { name: newUserName, tasks: [] };
      setUsers([...users, newUser]);
    }
  };

  const addTask = (newTaskText) => {
    if (newTaskText.trim() !== '') {
      const updatedTasks = [...tasks, { text: newTaskText, completed: false }];
      setTasks(updatedTasks);
      setUsers(
        users.map((u) =>
          u === selectedUser ? { ...u, tasks: updatedTasks } : u
        )
      );
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setUsers(
      users.map((u) =>
        u === selectedUser ? { ...u, tasks: updatedTasks } : u
      )
    );
  };

  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setUsers(
      users.map((u) =>
        u === selectedUser ? { ...u, tasks: updatedTasks } : u
      )
    );
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setUsers(
      users.map((u) =>
        u === selectedUser ? { ...u, tasks: updatedTasks } : u
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        tasks,
        setTasks,
        theme,
        toggleTheme,
        addUser, // Passar al Context
        selectUser,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

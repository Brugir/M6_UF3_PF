import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export function Sidebar() {
  const { users, addUser, selectUser, theme, toggleTheme } = useContext(AppContext);

  const handleAddUser = (e) => {
    if (e.key === 'Enter') {
      addUser(e.target.value); // Crida a `addUser`
      e.target.value = ''; // Netejar l'input després d'afegir
    }
  };

  return (
    <aside className="sidebar card">
      <h2>Usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={() => selectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nuevo usuario..."
        onKeyDown={handleAddUser}
      />
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Tema Fosc' : '☀️ Tema Clar'}
      </button>
    </aside>
  );
}

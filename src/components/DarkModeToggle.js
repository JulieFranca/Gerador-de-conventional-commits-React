import React, { useContext } from 'react';
import { DarkModeContext } from '../App'; // Certifique-se de que o caminho está correto

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <span className="btn-dark-mode" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️' : '🌙'}
    </span>
  );
}

export default DarkModeToggle;

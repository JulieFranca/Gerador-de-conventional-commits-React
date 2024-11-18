import React, { useState, useEffect, createContext } from 'react';
import CommitGenerator from './CommitGenerator';
import DarkModeToggle from './DarkModeToggle';
import Explanation from './Explanation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexto para o modo escuro
export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className="text-center mb-4">Gerador de Conventional Commits</h1>
        <DarkModeToggle />
        <Explanation />
        <CommitGenerator />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

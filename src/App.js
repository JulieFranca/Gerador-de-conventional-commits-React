import React, { useState, useEffect, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import CommitGenerator from './CommitGenerator';
import DarkModeToggle from './DarkModeToggle';
import Explanation from './Explanation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n'; // Importa a configuração do i18n

// Contexto para o modo escuro
export const DarkModeContext = createContext();

function App() {
  const { t, i18n } = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <div className="top-bar">
          <DarkModeToggle />
          <div className="language-select">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="English"
              onClick={() => changeLanguage('en')}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            />
            <img
              src="https://flagcdn.com/w20/br.png"
              alt="Português"
              onClick={() => changeLanguage('pt')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <h1 className="text-center mb-4">{t('title')}</h1>
        <Explanation />
        <CommitGenerator />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

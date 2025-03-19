import React, { useState, useEffect, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import CommitGenerator from './components/CommitGenerator';
import DarkModeToggle from './components/DarkModeToggle';
import Explanation from './components/Explanation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/i18n'; // Importa a configuração do i18n

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
    // Aplica o modo escuro ao body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
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
        
        <div className="container-fluid">
          <h1 className="text-center mb-3">{t('title')}</h1>
          <Explanation />
          <CommitGenerator />
        </div>
        
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

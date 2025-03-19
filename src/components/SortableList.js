import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Sortable from 'sortablejs';
import { DarkModeContext } from '../App';

function SortableList({ pattern, setTaskId, setDescription, setSeparators, onOrderChange }) {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const sortable = new Sortable(document.getElementById('sortable'), {
      animation: 150,
      onEnd: () => {
        const order = Array.from(document.getElementById('sortable').children).map(el => el.id);
        localStorage.setItem('customPatternOrder', JSON.stringify(order));
        onOrderChange(order); // Notifica o componente pai sobre a nova ordem
      }
    });

    return () => sortable.destroy();
  }, [onOrderChange]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'commitTaskIdInput') {
      setTaskId(value);
    } else if (id === 'commitDescriptionInput') {
      setDescription(value);
    } else {
      // Mapeamento dos novos IDs para as chaves esperadas pelo objeto separators
      const idMapping = {
        'taskIdOpen': 'taskIdOpen',
        'taskIdClose': 'taskIdClose',
        'descriptionOpen': 'descriptionOpen',
        'descriptionClose': 'descriptionClose'
      };
      
      setSeparators(prev => ({ ...prev, [idMapping[id] || id]: value }));
    }
  };

  return (
    <div id="sortable" className={`form-group ${darkMode ? 'dark-mode' : ''}`}>
      <p className="sortable-instructions small mb-2"><strong>{t('dragInstructions')}</strong></p>
      
      <div id="commitTaskId" className={`draggable ${darkMode ? 'dark-mode' : ''}`}>
        <span className="drag-icon">↕️</span>
        <label htmlFor="commitTaskIdInput" className="form-label mb-1 small">{t('taskId')}:</label>
        <input 
          type="text" 
          id="commitTaskIdInput" 
          className="form-control form-control-sm" 
          placeholder={t('taskId')} 
          onChange={handleInputChange} 
        />
        <div className="separator-container mt-1">
          <input type="text" id="taskIdOpen" className="separator-input form-control-sm" placeholder="(" onChange={handleInputChange} />
          <input type="text" id="taskIdClose" className="separator-input form-control-sm" placeholder=")" onChange={handleInputChange} />
        </div>
      </div>

      <div id="commitDescription" className={`draggable ${darkMode ? 'dark-mode' : ''}`}>
        <span className="drag-icon">↕️</span>
        <label htmlFor="commitDescriptionInput" className="form-label mb-1 small">{t('description')}:</label>
        <textarea 
          id="commitDescriptionInput" 
          className="form-control form-control-sm" 
          rows="3" 
          placeholder={t('description')} 
          onChange={handleInputChange}
        ></textarea>
        <div className="separator-container mt-1">
          <input type="text" id="descriptionOpen" className="separator-input form-control-sm" placeholder="[" onChange={handleInputChange} />
          <input type="text" id="descriptionClose" className="separator-input form-control-sm" placeholder="]" onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

export default SortableList;

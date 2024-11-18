import React, { useEffect, useContext } from 'react';
import Sortable from 'sortablejs';
import { DarkModeContext } from './App';

function SortableList({ pattern, setTaskId, setDescription, setSeparators, onOrderChange }) {
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
    if (id.includes('commitTaskId')) {
      setTaskId(value);
    } else if (id.includes('commitDescription')) {
      setDescription(value);
    } else {
      setSeparators(prev => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div id="sortable" className={`form-group ${darkMode ? 'dark-mode' : ''}`}>
      <p className="sortable-instructions"><strong>Instruções:</strong> Arraste e solte os campos abaixo para personalizar a ordem das informações no commit. Adicione separadores customizados se desejar.</p>
      
      <div id="commitTaskId" className={`draggable ${darkMode ? 'dark-mode' : ''}`}>
        <span className="drag-icon">↕️</span>
        <label htmlFor="commitTaskIdInput">Identificador da Tarefa:</label>
        <input type="text" id="commitTaskIdInput" className="form-control" placeholder="Insira o identificador da tarefa" onChange={handleInputChange} />
        <div className="separator-container mt-2">
          <input type="text" id="commitTaskIdOpen" className="separator-input" placeholder="(" onChange={handleInputChange} />
          <input type="text" id="commitTaskIdClose" className="separator-input" placeholder=")" onChange={handleInputChange} />
        </div>
      </div>

      <div id="commitDescription" className={`draggable ${darkMode ? 'dark-mode' : ''}`}>
        <span className="drag-icon">↕️</span>
        <label htmlFor="commitDescriptionInput">Descrição:</label>
        <textarea id="commitDescriptionInput" className="form-control" rows="4" placeholder="Insira a descrição" onChange={handleInputChange}></textarea>
        <div className="separator-container mt-2">
          <input type="text" id="commitDescriptionOpen" className="separator-input" placeholder="[" onChange={handleInputChange} />
          <input type="text" id="commitDescriptionClose" className="separator-input" placeholder="]" onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

export default SortableList;

import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import CommitTypeSelect from './CommitTypeSelect';
import SortableList from './SortableList';
import { DarkModeContext } from '../App';

function CommitGenerator() {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);
  const [pattern, setPattern] = useState('conventional');
  const [commitString, setCommitString] = useState('');
  const [commitType, setCommitType] = useState('feat');
  const [taskId, setTaskId] = useState('');
  const [description, setDescription] = useState('');
  const [separators, setSeparators] = useState({
    taskIdOpen: '',
    taskIdClose: '',
    descriptionOpen: '',
    descriptionClose: ''
  });
  const [order, setOrder] = useState(['commitTaskId', 'commitDescription']); // Ordem inicial
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem('customPatternOrder'));
    if (savedOrder) {
      setOrder(savedOrder);
      setPattern('custom');
    }
  }, []);

  const generateCommitString = () => {
    let parts = [`${commitType}:`];

    if (pattern === 'conventional') {
      order.forEach(id => {
        if (id === 'commitTaskId' && taskId) {
          parts.push(`${separators.taskIdOpen}${taskId}${separators.taskIdClose}`);
        }
        if (id === 'commitDescription' && description) {
          parts.push(`${separators.descriptionOpen}${description}${separators.descriptionClose}`);
        }
      });
    } else {
      order.forEach(id => {
        if (id === 'commitTaskId' && taskId) {
          parts.push(`${separators.taskIdOpen}${taskId}${separators.taskIdClose}`);
        }
        if (id === 'commitDescription' && description) {
          parts.push(`${separators.descriptionOpen}${description}${separators.descriptionClose}`);
        }
      });
    }

    setCommitString(parts.join(' ').trim());
  };

  useEffect(() => {
    generateCommitString();
  }, [commitType, taskId, description, separators, pattern, order]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commitString).then(() => {
      setNotification(t('copySuccess'));
      setTimeout(() => setNotification(''), 3000);
    }, (err) => {
      console.error('Erro ao copiar texto: ', err);
    });
  };

  return (
    <div className={`card p-4 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="form-group">
        <label htmlFor="patternType">{t('selectPattern')}</label>
        <select id="patternType" className="form-control" value={pattern} onChange={e => setPattern(e.target.value)}>
          <option value="conventional">Conventional Commits</option>
          <option value="custom">Custom Pattern</option>
        </select>
      </div>
      <CommitTypeSelect setCommitType={setCommitType} />
      <SortableList
        pattern={pattern}
        setTaskId={setTaskId}
        setDescription={setDescription}
        setSeparators={setSeparators}
        onOrderChange={setOrder}
      />
      <h2 className="mt-4">{t('result')}</h2>
      <div className="d-flex align-items-center">
        <textarea className="form-control" rows="4" value={commitString} readOnly />
        <span className="copy-icon" onClick={copyToClipboard} style={{ cursor: 'pointer', marginLeft: '10px' }}>📋</span>
      </div>
      {notification && <div className="alert alert-success mt-3">{notification}</div>}
    </div>
  );
}

export default CommitGenerator;

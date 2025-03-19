import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../App';

function Explanation() {
  const { darkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();

  return (
    <div className={`alert alert-info mb-3 py-2 ${darkMode ? 'dark-mode' : ''}`}>
      <h5 className="mb-2">{t('explanation.heading')}</h5>
      <p className="mb-1 small">{t('explanation.paragraph1')}</p>
      <p className="mb-0 small">{t('explanation.paragraph2')}</p>
    </div>
  );
}

export default Explanation;

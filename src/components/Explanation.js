import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../App';

function Explanation() {
  const { darkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();

  return (
    <div className={`alert alert-info ${darkMode ? 'dark-mode' : ''}`}>
      <h4>{t('explanation.heading')}</h4>
      <p>{t('explanation.paragraph1')}</p>
      <p>{t('explanation.paragraph2')}</p>
    </div>
  );
}

export default Explanation;

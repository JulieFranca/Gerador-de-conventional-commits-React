import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../App';

function CommitTypeSelect({ setCommitType }) {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const handleSelectChange = (e) => {
    const type = e.target.value.split(' - ')[0];
    setCommitType(type);
  };

  return (
    <div id="commitType" className={`form-group mb-3 ${darkMode ? 'dark-mode' : ''}`}>
      <label htmlFor="commitTypeSelect" className="form-label mb-1 small">{t('commitType')}:</label>
      <select 
        id="commitTypeSelect" 
        className="form-select form-select-sm" 
        onChange={handleSelectChange}
      >
        <option value="feat">{t('commitTypes.feat')}</option>
        <option value="fix">{t('commitTypes.fix')}</option>
        <option value="merge">{t('commitTypes.merge')}</option>
        <option value="refactor">{t('commitTypes.refactor')}</option>
        <option value="chore">{t('commitTypes.chore')}</option>
        <option value="docs">{t('commitTypes.docs')}</option>
        <option value="style">{t('commitTypes.style')}</option>
        <option value="test">{t('commitTypes.test')}</option>
        <option value="build">{t('commitTypes.build')}</option>
        <option value="ci">{t('commitTypes.ci')}</option>
        <option value="perf">{t('commitTypes.perf')}</option>
        <option value="revert">{t('commitTypes.revert')}</option>
      </select>
    </div>
  );
}

export default CommitTypeSelect;

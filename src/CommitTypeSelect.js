import React, { useContext } from 'react';
import { DarkModeContext } from './App';

function CommitTypeSelect({ setCommitType }) {
  const { darkMode } = useContext(DarkModeContext);

  const handleSelectChange = (e) => {
    const type = e.target.value.split(' - ')[0];
    setCommitType(type);
  };

  return (
    <div id="commitType" className={darkMode ? 'dark-mode' : ''}>
      <label htmlFor="commitTypeSelect">Tipo de Commit:</label>
      <select id="commitTypeSelect" className="form-control" onChange={handleSelectChange}>
        <option value="feat">feat - Desenvolvimento de uma nova feature</option>
        <option value="fix">fix - Correção de erros que geram bugs</option>
        <option value="refactor">refactor - Refatoração de código sem impacto na lógica</option>
        <option value="chore">chore - Mudanças no projeto que não afetam o sistema</option>
        <option value="docs">docs - Mudanças na documentação do projeto</option>
        <option value="style">style - Mudanças de formatação e estilo do código</option>
        <option value="test">test - Criação ou alteração de códigos de teste</option>
        <option value="build">build - Mudanças que afetam o processo de build</option>
        <option value="ci">ci - Mudanças nos arquivos de configuração de CI</option>
        <option value="perf">perf - Alteração que melhora a performance do sistema</option>
        <option value="revert">revert - Reversão de um commit anterior</option>
      </select>
    </div>
  );
}

export default CommitTypeSelect;

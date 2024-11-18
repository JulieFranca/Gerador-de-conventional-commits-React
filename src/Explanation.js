import React, { useContext } from 'react';
import { DarkModeContext } from './App';

function Explanation() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`alert alert-info ${darkMode ? 'dark-mode' : ''}`}>
      <h4>O que é Conventional Commits?</h4>
      <p>
        O <b>"Conventional Commits"</b> é uma convenção para mensagens de commit que segue um conjunto de regras simples. Ele ajuda a manter um histórico de commits claro e estruturado, facilitando a colaboração e automação de processos como geração de changelogs.
      </p>
      <p>
        Utilizar mensagens de commit padronizadas melhora a compreensão das alterações feitas no código, tanto para humanos quanto para ferramentas automatizadas.
      </p>
    </div>
  );
}

export default Explanation;

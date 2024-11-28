import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Defina os recursos de tradução
const resources = {
  en: {
    translation: {
      title: "Conventional Commits Generator",
      explanation: {
        heading: "What are Conventional Commits?",
        paragraph1: "Conventional Commits is a convention for commit messages that follows a simple set of rules. It helps maintain a clear and structured commit history, facilitating collaboration and automation of processes like changelog generation.",
        paragraph2: "Using standardized commit messages improves the understanding of code changes, both for humans and automated tools."
      },
      selectPattern: "Select Generation Pattern:",
      result: "Result:",
      copySuccess: "Text copied to clipboard!",
      commitTypes: {
        feat: "feat - New feature development",
        fix: "fix - Bug fixes",
        merge: "merge - joining data that comes from another branch",
        refactor: "refactor - Code refactoring without logic changes",
        chore: "chore - Project changes that do not affect the system",
        docs: "docs - Documentation changes",
        style: "style - Code formatting and style changes",
        test: "test - Creation or modification of test codes",
        build: "build - Changes affecting the build process",
        ci: "ci - Changes to CI configuration files",
        perf: "perf - Performance improvements",
        revert: "revert - Reverting a previous commit"
      },
      taskId: "Task Identifier",
      description: "Description"
    }
  },
  pt: {
    translation: {
      title: "Gerador de Conventional Commits",
      explanation: {
        heading: "O que é Conventional Commits?",
        paragraph1: "O Conventional Commits é uma convenção para mensagens de commit que segue um conjunto de regras simples. Ele ajuda a manter um histórico de commits claro e estruturado, facilitando a colaboração e automação de processos como geração de changelogs.",
        paragraph2: "Utilizar mensagens de commit padronizadas melhora a compreensão das alterações feitas no código, tanto para humanos quanto para ferramentas automatizadas."
      },
      selectPattern: "Selecione o Padrão de Geração:",
      result: "Resultado:",
      copySuccess: "Texto copiado para a área de transferência!",
      commitTypes: {
        feat: "feat - Desenvolvimento de uma nova feature",
        fix: "fix - Correção de erros que geram bugs",
        merge: "merge - juntar dados provenientes de outra branch",
        refactor: "refactor - Refatoração de código sem impacto na lógica",
        chore: "chore - Mudanças no projeto que não afetam o sistema",
        docs: "docs - Mudanças na documentação do projeto",
        style: "style - Mudanças de formatação e estilo do código",
        test: "test - Criação ou alteração de códigos de teste",
        build: "build - Mudanças que afetam o processo de build",
        ci: "ci - Mudanças nos arquivos de configuração de CI",
        perf: "perf - Alteração que melhora a performance do sistema",
        revert: "revert - Reversão de um commit anterior"
      },
      taskId: "Identificador da Tarefa",
      description: "Descrição"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Idioma padrão
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

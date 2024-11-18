# Gerador de Conventional Commits

Este projeto é uma aplicação React que gera mensagens de commit seguindo a convenção "Conventional Commits". A aplicação suporta múltiplos idiomas e inclui um modo escuro para uma melhor experiência do usuário.

## Funcionalidades

- **Geração de Mensagens de Commit**: Crie mensagens de commit padronizadas de acordo com a convenção "Conventional Commits".
- **Modo Escuro**: Alterne entre o modo claro e escuro para uma experiência de usuário personalizada.
- **Suporte a Múltiplos Idiomas**: Alterne entre inglês e português.
- **Reordenação de Campos**: Personalize a ordem dos campos de entrada para gerar mensagens de commit personalizadas.
- **Cópia para Área de Transferência**: Copie facilmente a mensagem de commit gerada para a área de transferência.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **react-i18next**: Biblioteca para internacionalização de aplicações React.
- **SortableJS**: Biblioteca para reordenação de elementos via drag-and-drop.
- **Bootstrap**: Framework CSS para estilização responsiva.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/gerador-conventional-commits.git
   cd gerador-conventional-commits
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm start
   ```

4. **Acesse a aplicação**:

   Abra o navegador e acesse `http://localhost:3000`.

## Uso

1. **Selecione o Tipo de Commit**: Escolha o tipo de commit no menu suspenso.
2. **Preencha os Campos**: Insira o identificador da tarefa e a descrição.
3. **Reordene os Campos**: Arraste e solte os campos para personalizar a ordem das informações no commit.
4. **Copie a Mensagem**: Clique no ícone de copiar para copiar a mensagem gerada para a área de transferência.
5. **Alterne o Idioma**: Use os botões de idioma para alternar entre inglês e português.
6. **Modo Escuro**: Clique no ícone de lua/sol para alternar entre o modo claro e escuro.

## Estrutura do Projeto

```
gerador-conventional-commits/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── CommitGenerator.js
│   │   ├── CommitTypeSelect.js
│   │   ├── SortableList.js
│   │   ├── DarkModeToggle.js
│   │   └── Explanation.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── i18n.js
├── package.json
└── README.md
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

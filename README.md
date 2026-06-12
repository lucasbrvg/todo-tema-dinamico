# App de Lista de Tarefas com Tema Dinâmico

Projeto prático final feito com React, Vite e styled-components.

## Funcionalidades

- Adicionar tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Filtrar tarefas por status: todas, ativas e concluídas
- Alternar entre tema claro e escuro
- Salvar tarefas e tema no localStorage
- Interface responsiva

## Tecnologias usadas

- React
- Vite
- styled-components
- lucide-react

## Estrutura principal

```txt
src/
├── components/
│   ├── Header.jsx
│   ├── TarefaItem.jsx
│   ├── FormularioTarefa.jsx
│   └── Filtros.jsx
├── styles/
│   ├── GlobalStyle.js
│   ├── themes.js
│   └── components/
│       ├── Header.styles.js
│       └── Tarefa.styles.js
├── App.jsx
└── main.jsx
```

## Como rodar o projeto

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal, normalmente:

```txt
http://localhost:5173
```

## Como gerar versão final

```bash
npm run build
```

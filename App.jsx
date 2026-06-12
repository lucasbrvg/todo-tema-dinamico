import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import FormularioTarefa from './components/FormularioTarefa';
import Filtros from './components/Filtros';
import TarefaItem from './components/TarefaItem';
import { GlobalStyle } from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/themes';
import { AppCard, Content, EmptyState, Page, TaskList } from './styles/components/Tarefa.styles';

const tarefasIniciais = [
  {
    id: crypto.randomUUID(),
    texto: 'Criar projeto React com Vite',
    concluida: true
  },
  {
    id: crypto.randomUUID(),
    texto: 'Implementar styled-components',
    concluida: true
  },
  {
    id: crypto.randomUUID(),
    texto: 'Subir o código no GitHub público',
    concluida: false
  }
];

function App() {
  const [temaAtual, setTemaAtual] = useState(() => {
    return localStorage.getItem('@todo-tema') || 'light';
  });

  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('@todo-tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : tarefasIniciais;
  });

  const [texto, setTexto] = useState('');
  const [filtroAtual, setFiltroAtual] = useState('todas');

  const tema = temaAtual === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('@todo-tema', temaAtual);
  }, [temaAtual]);

  useEffect(() => {
    localStorage.setItem('@todo-tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function alternarTema() {
    setTemaAtual((temaAnterior) => (temaAnterior === 'light' ? 'dark' : 'light'));
  }

  function adicionarTarefa(evento) {
    evento.preventDefault();

    const textoFormatado = texto.trim();

    if (!textoFormatado) {
      return;
    }

    const novaTarefa = {
      id: crypto.randomUUID(),
      texto: textoFormatado,
      concluida: false
    };

    setTarefas((tarefasAtuais) => [novaTarefa, ...tarefasAtuais]);
    setTexto('');
  }

  function alternarConclusao(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  function removerTarefa(id) {
    setTarefas((tarefasAtuais) => tarefasAtuais.filter((tarefa) => tarefa.id !== id));
  }

  const tarefasFiltradas = useMemo(() => {
    if (filtroAtual === 'ativas') {
      return tarefas.filter((tarefa) => !tarefa.concluida);
    }

    if (filtroAtual === 'concluidas') {
      return tarefas.filter((tarefa) => tarefa.concluida);
    }

    return tarefas;
  }, [filtroAtual, tarefas]);

  const totalConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const totalPendentes = tarefas.length - totalConcluidas;

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Page>
        <Header temaAtual={temaAtual} alternarTema={alternarTema} />

        <AppCard>
          <Content>
            <FormularioTarefa
              texto={texto}
              setTexto={setTexto}
              adicionarTarefa={adicionarTarefa}
            />

            <Filtros
              filtroAtual={filtroAtual}
              alterarFiltro={setFiltroAtual}
              total={tarefas.length}
              pendentes={totalPendentes}
              concluidas={totalConcluidas}
            />

            {tarefasFiltradas.length > 0 ? (
              <TaskList>
                {tarefasFiltradas.map((tarefa) => (
                  <TarefaItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    alternarConclusao={alternarConclusao}
                    removerTarefa={removerTarefa}
                  />
                ))}
              </TaskList>
            ) : (
              <EmptyState>
                <strong>Nenhuma tarefa encontrada</strong>
                <p>Adicione uma nova tarefa ou altere o filtro selecionado.</p>
              </EmptyState>
            )}
          </Content>
        </AppCard>
      </Page>
    </ThemeProvider>
  );
}

export default App;

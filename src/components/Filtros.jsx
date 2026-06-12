import { Counter, FilterButton, FilterGroup, Toolbar } from '../styles/components/Tarefa.styles';

const filtros = [
  { id: 'todas', label: 'Todas' },
  { id: 'ativas', label: 'Ativas' },
  { id: 'concluidas', label: 'Concluídas' }
];

function Filtros({ filtroAtual, alterarFiltro, total, pendentes, concluidas }) {
  return (
    <Toolbar>
      <FilterGroup aria-label="Filtros de tarefas">
        {filtros.map((filtro) => (
          <FilterButton
            key={filtro.id}
            type="button"
            $active={filtroAtual === filtro.id}
            onClick={() => alterarFiltro(filtro.id)}
          >
            {filtro.label}
          </FilterButton>
        ))}
      </FilterGroup>

      <Counter>
        {total} tarefa(s) • {pendentes} ativa(s) • {concluidas} concluída(s)
      </Counter>
    </Toolbar>
  );
}

export default Filtros;

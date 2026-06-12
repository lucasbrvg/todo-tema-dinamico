import { Check, Trash2 } from 'lucide-react';
import {
  CheckButton,
  RemoveButton,
  TaskItem,
  TaskText
} from '../styles/components/Tarefa.styles';

function TarefaItem({ tarefa, alternarConclusao, removerTarefa }) {
  return (
    <TaskItem $completed={tarefa.concluida}>
      <CheckButton
        type="button"
        $completed={tarefa.concluida}
        onClick={() => alternarConclusao(tarefa.id)}
        aria-label={tarefa.concluida ? 'Marcar como ativa' : 'Marcar como concluída'}
      >
        <Check size={18} />
      </CheckButton>

      <TaskText $completed={tarefa.concluida}>{tarefa.texto}</TaskText>

      <RemoveButton
        type="button"
        onClick={() => removerTarefa(tarefa.id)}
        aria-label="Remover tarefa"
      >
        <Trash2 size={18} />
      </RemoveButton>
    </TaskItem>
  );
}

export default TarefaItem;

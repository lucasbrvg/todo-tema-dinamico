import { Plus } from 'lucide-react';
import { AddButton, Form, Input } from '../styles/components/Tarefa.styles';

function FormularioTarefa({ texto, setTexto, adicionarTarefa }) {
  const textoVazio = texto.trim().length === 0;

  return (
    <Form onSubmit={adicionarTarefa}>
      <Input
        type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="Ex: estudar React hoje"
        aria-label="Digite uma nova tarefa"
      />

      <AddButton type="submit" disabled={textoVazio}>
        <Plus size={20} />
        Adicionar
      </AddButton>
    </Form>
  );
}

export default FormularioTarefa;

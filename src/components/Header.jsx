import { Moon, Sun } from 'lucide-react';
import {
  Eyebrow,
  HeaderContainer,
  Subtitle,
  ThemeButton,
  Title,
  TitleGroup
} from '../styles/components/Header.styles';

function Header({ temaAtual, alternarTema }) {
  const temaEscuro = temaAtual === 'dark';

  return (
    <HeaderContainer>
      <TitleGroup>
        <Eyebrow>Projeto Prático Final</Eyebrow>
        <Title>Lista de Tarefas</Title>
        <Subtitle>
          Organize suas tarefas, filtre por status e alterne entre tema claro e escuro com React e styled-components.
        </Subtitle>
      </TitleGroup>

      <ThemeButton type="button" onClick={alternarTema} aria-label="Alternar tema claro e escuro">
        {temaEscuro ? <Sun size={20} /> : <Moon size={20} />}
        {temaEscuro ? 'Tema claro' : 'Tema escuro'}
      </ThemeButton>
    </HeaderContainer>
  );
}

export default Header;

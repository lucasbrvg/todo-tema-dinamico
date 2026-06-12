import styled, { css } from 'styled-components';

export const Page = styled.main`
  width: min(100% - 2rem, 980px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`;

export const AppCard = styled.section`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  padding: clamp(1rem, 4vw, 2rem);
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  backdrop-filter: blur(18px);

  &::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primarySoft};
    filter: blur(10px);
    pointer-events: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1rem 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.input};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSoft};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primarySoft};
  }
`;

export const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  color: white;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryStrong});
  font-weight: 900;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 1.15rem 0;

  @media (max-width: 720px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const FilterButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 0.65rem 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.cardSolid};
  font-weight: 800;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  ${({ $active }) =>
    $active &&
    css`
      color: white;
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primary};
    `}

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  font-weight: 700;
`;

export const TaskList = styled.ul`
  display: grid;
  gap: 0.8rem;
  list-style: none;
`;

export const TaskItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.2rem;
  padding: 0.85rem;
  background: ${({ theme }) => theme.colors.cardSolid};
  transition: transform 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;

  ${({ $completed }) =>
    $completed &&
    css`
      opacity: 0.72;
    `}

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CheckButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.85rem;
  color: ${({ theme, $completed }) => ($completed ? 'white' : theme.colors.primary)};
  background: ${({ theme, $completed }) => ($completed ? theme.colors.success : theme.colors.successSoft)};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const TaskText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 750;
  line-height: 1.4;
  word-break: break-word;

  ${({ $completed }) =>
    $completed &&
    css`
      color: ${({ theme }) => theme.colors.textSoft};
      text-decoration: line-through;
    `}
`;

export const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border: 1px solid transparent;
  border-radius: 0.85rem;
  color: ${({ theme }) => theme.colors.danger};
  background: ${({ theme }) => theme.colors.dangerSoft};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: scale(1.04);
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;

export const EmptyState = styled.div`
  display: grid;
  place-items: center;
  gap: 0.7rem;
  min-height: 12rem;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 1.2rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSoft};
  text-align: center;
  background: ${({ theme }) => theme.colors.cardSolid};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
  }
`;

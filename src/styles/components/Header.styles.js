import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.8rem;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TitleGroup = styled.div`
  display: grid;
  gap: 0.35rem;
`;

export const Eyebrow = styled.span`
  width: fit-content;
  padding: 0.35rem 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primarySoft};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 4.3rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
`;

export const Subtitle = styled.p`
  max-width: 34rem;
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: 1rem;
  line-height: 1.6;
`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-width: 11rem;
  padding: 0.85rem 1.05rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  font-weight: 800;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

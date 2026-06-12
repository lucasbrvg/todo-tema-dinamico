import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.backgroundGradient};
    transition: background 0.25s ease, color 0.25s ease;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

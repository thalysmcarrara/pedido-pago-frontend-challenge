import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --white-200: #E5E5E5;
    --gray-100: #EAEFED;
    --gray-200: #CAD6D1;
    --gray-400: #A3B8B0;
    --black-100: #587169;
    --black-600: #34423D;
    --cyan-100: #B5F1DD;
    --cyan-300: #22E0A1;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white-200);
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyleProvider = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default GlobalStyleProvider;
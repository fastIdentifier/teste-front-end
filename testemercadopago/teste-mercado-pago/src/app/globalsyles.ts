import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    box-sizing: border-box;
  }

  main{
    display: flex;
    max-width: 100%;
    min-height: 100vh;
    padding: 24px;
  }
`;

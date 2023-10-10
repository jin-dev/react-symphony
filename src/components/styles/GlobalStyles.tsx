import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  :root {
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    padding: 0;
    margin: 10px;
    display: flex;
    place-items: center;
    min-width: 320px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
    :root {
    color: #213547;
    background-color: #ffffff;
  }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;

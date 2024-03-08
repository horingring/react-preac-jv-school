import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRound';
    src: url('@/assets/fonts/NanumSquareRoundL.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('@/assets/fonts/NanumSquareRoundR.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('@/assets/fonts/NanumSquareRoundB.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('@/assets/fonts/NanumSquareRoundEB.ttf') format('truetype');
    font-weight: 900;
  }

  html,
  body,
  #app {
    width: 100%;
    font-family: 'NanumSquareRound', '-apple-system', 'BlinkMacSystemFont',
      'SFProDisplay', 'AppleSDGothicNeo', 'HelveticaNeue', 'Helvetica', arial,
      'sans-serif';
    font-weight: 500;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blind {
    overflow: hidden !important;
    position: absolute !important;
    clip: rect(0, 0, 0, 0) !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
  }
`;

export default GlobalStyle;

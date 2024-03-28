import { createGlobalStyle } from "styled-components";
import NanumSquareRoundL from "@/assets/fonts/NanumSquareRoundL.ttf";
import NanumSquareRoundR from "@/assets/fonts/NanumSquareRoundR.ttf";
import NanumSquareRoundB from "@/assets/fonts/NanumSquareRoundB.ttf";
import NanumSquareRoundEB from "@/assets/fonts/NanumSquareRoundEB.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRound';
    src: url(${NanumSquareRoundL}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url(${NanumSquareRoundR}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url(${NanumSquareRoundB}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url(${NanumSquareRoundEB}) format('truetype');
    font-weight: 900;
  }

  * {
  scroll-behavior: smooth;
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

  button {
    all: unset;
    outline: revert;
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

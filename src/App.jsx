import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "./assets/styles/GlobalStyle";
import GnbHeader from "./components/common/gnb/GnbHeader";

const Wrapper = styled.div``;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <GnbHeader />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import IntroPage from "@/pages/IntroPage";
import styled from "styled-components";
import { Reset } from "styled-reset";

const Wrapper = styled.div`
  background-color: yellow;
`;

function App() {
  return (
    <>
      <Reset />
      <Wrapper>
        App 컴포넌트
        <IntroPage />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;

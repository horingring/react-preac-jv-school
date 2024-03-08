import { Outlet } from "react-router-dom";
import styled from "styled-components";
import IntroPage from "@/pages/IntroPage";

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      App 컴포넌트
      <IntroPage />
      <Outlet />
    </Wrapper>
  );
}

export default App;

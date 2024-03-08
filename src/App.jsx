import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      App 컴포넌트
      <Outlet />
    </Wrapper>
  );
}

export default App;

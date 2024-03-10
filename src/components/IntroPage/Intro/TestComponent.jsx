import { useSelector } from "react-redux";

function TestComponent() {
  // const test = useSelector(state => state.common.test);
  const test = useSelector(({ common }) => common.test);

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h3>테스트 컴포넌트 입니다</h3>
      <p>{`Redux Test: ${test}`}</p>
    </div>
  );
}

export default TestComponent;

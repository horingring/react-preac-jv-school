import { SET_TEST } from "@/store/slices/commonSlice";
import { useDispatch, useSelector } from "react-redux";

function TestComponent() {
  // const test = useSelector(state => state.common.test);
  const test = useSelector(({ common }) => common.test);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h3>테스트 컴포넌트 입니다</h3>
      <p>{`Redux Test: ${test}`}</p>
      <button
        onClick={(e) => {
          dispatch(SET_TEST("test222"));
        }}
      >
        Reducer 테스트
      </button>
    </div>
  );
}

export default TestComponent;

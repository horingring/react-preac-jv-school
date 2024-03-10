import styled from "styled-components";

// imgs
import toDownBtnImg from "@/assets/img/IntroPage/intro/btn_down.png";

// hooks & utils
import { useCallback } from "react";
import { getAbsoluteOffset } from "@/utils/getElementOffset";

const Button = styled.button`
  &.introSec__toDownBtn {
    align-self: center;
    position: absolute;
    bottom: 69px;
    z-index: 20;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: url(${toDownBtnImg});
    background-repeat: no-repeat;
    background-position: -23px -23px;
    background-size: 104px 104px;
    box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
`;

function ToDownBtn() {
  // methods
  const scrollToRcmdSection = useCallback(() => {
    const rcmdSec = document.querySelector(".rcmdSec");
    if (!rcmdSec) return;

    const { top } = getAbsoluteOffset(rcmdSec);
    window.scrollTo(0, top);
  }, []);

  return (
    <Button
      className="introSec__toDownBtn"
      onClick={scrollToRcmdSection}
    ></Button>
  );
}

export default ToDownBtn;

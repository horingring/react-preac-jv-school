import styled from "styled-components";
import introBgSlideImg from "@/assets/img/IntroPage/intro/jr-pc-main-v3.png";
import { useEffect, useState } from "react";

const Div = styled.div`
  &.introSec__bgSlide {
    position: absolute;
    z-index: 10;
    margin-left: 110px;
    left: 50%;
    top: 70px;
    width: 2295px;
    height: 1201px;
    background: url(${introBgSlideImg}) no-repeat 0 0/2295px 1201px;
    -webkit-transition: transform 1s;
    transition: transform 1s;
  }
  &.introSec__bgSlide--on {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

function IntroBgSlide() {
  const [onRender, setOnRender] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (!timer) {
      setTimer(
        setTimeout(() => {
          setOnRender(true);
        }, 0)
      );
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <Div
      className={`
        introSec__bgSlide
        ${onRender ? "introSec__bgSlide--on" : ""}
      `}
    ></Div>
  );
}

export default IntroBgSlide;

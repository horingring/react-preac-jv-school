import styled from "styled-components";

// imgs
import introBgImg from "@/assets/img/IntroPage/intro/jr-pc-main-bg-v2.png";
import introBgGradientImg from "@/assets/img/IntroPage/intro/spot_gradient_tb.png";

// components
import IntroBgSlide from "./IntroBgSlide";
import IntroDescription from "./IntroDescription";
import IntroDownBtnBox from "./IntroDownBtnBox";
import ToDownBtn from "./ToDownBtn";

const Section = styled.section`
  position: relative;
  box-sizing: border-box;
  padding-top: 94px;
  height: 1201px;
  background: url(${introBgImg}) #f2f5fb no-repeat 50% 0/2048px 1080px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    z-index: 20;
    display: block;
    width: 100%;
    height: 240px;
    background: url(${introBgGradientImg});
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
  box-sizing: border-box;
  max-width: 1062px;
  height: 1080px;
  margin: 0 auto;
  padding-top: 220px;
`;

function IntroSection() {
  return (
    <Section>
      <IntroBgSlide />
      <Inner>
        <IntroDescription />
        <IntroDownBtnBox />
        <ToDownBtn />
      </Inner>
    </Section>
  );
}

export default IntroSection;

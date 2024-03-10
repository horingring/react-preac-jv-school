import IntroBgSlide from "./IntroBgSlide";

import styled from "styled-components";
import introBgImg from "@/assets/img/IntroPage/intro/jr-pc-main-bg-v2.png";
import introBgGradientImg from "@/assets/img/IntroPage/intro/spot_gradient_tb.png";

const Section = styled.section`
  &.introSec {
    position: relative;
    box-sizing: border-box;
    padding-top: 94px;
    height: 1201px;
    background: url(${introBgImg}) #f2f5fb no-repeat 50% 0/2048px 1080px;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      z-index: 20;
      display: block;
      width: 100%;
      height: 240px;
      background: url(${introBgGradientImg});
    }
  }
`;

function IntroSection() {
  return (
    <Section className="introSec">
      <IntroBgSlide />
      <div className="introSec__inner"></div>
    </Section>
  );
}

export default IntroSection;

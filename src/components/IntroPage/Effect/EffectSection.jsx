import styled from "styled-components";
import StrongSpan from "@/components/common/ui/StrongSpan";
import effectFigImg from "@/assets/img/IntroPage/effect/jr-pc-section-study-img.png";
import AccordionComponent from "@/components/common/ui/AccordionComponent";

const Section = styled.section`
  &.effectSec {
    padding: 120px 0 300px;
  }
`;

const Inner = styled.div`
  &.effectSec__inner {
    width: 1062px;
    text-align: center;
    margin: 0 auto;
  }
`;

const TitleBox = styled.div``;

const Title = styled.h3`
  &.effectSec__title {
    font-size: 48px;
    font-weight: 900;
  }
`;

const TitleSub = styled.p`
  &.effectSec__titleSub {
    font-size: 30px;
    color: #555;
    font-weight: 700;
    margin: 32px 0 40px;
  }
`;

const FigImg = styled.img`
  &.effectSec__figImg {
    width: 1062px;
    height: 764px;
    margin-bottom: 64px;
  }
`;

function EffectSection() {
  return (
    <Section className="effectSec">
      <Inner className="effectSec__inner">
        <TitleBox className="effectSec__titleBox">
          <Title className="effectSec__title">
            하루 15분, 우리 아이가
            <StrongSpan text="똑똑해집니다" underline />
          </Title>
          <TitleSub className="effectSec__titleSub">
            유아 수학・인지 능력의 향상을 확인하였습니다.
          </TitleSub>
        </TitleBox>
        <FigImg
          className="effectSec__figImg"
          src={effectFigImg}
          alt="학습효과 이미지"
        />
      </Inner>

      <AccordionComponent show headerAsBtn btnTextOn="닫기" btnTextOff="열기">
        {{
          header: (
            <>
              <h3>헤더입니다.</h3>
            </>
          ),
          body: (
            <>
              <h3>바디입니다.</h3>
            </>
          ),
        }}
      </AccordionComponent>
    </Section>
  );
}
export default EffectSection;

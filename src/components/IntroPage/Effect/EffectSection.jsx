import styled from "styled-components";
import StrongSpan from "@/components/common/ui/StrongSpan";
import effectFigImg from "@/assets/img/IntroPage/effect/jr-pc-section-study-img.png";
import EffectSecAccordion from "./EffectSecAccordion";

const Section = styled.section`
  padding: 120px 0 300px;
`;

const Inner = styled.div`
  width: 1062px;
  text-align: center;
  margin: 0 auto;
`;

const TitleBox = styled.div``;

const Title = styled.h3`
  font-size: 48px;
  font-weight: 900;
`;

const TitleSub = styled.p`
  font-size: 30px;
  color: #555;
  font-weight: 700;
  margin: 32px 0 40px;
`;

const FigImg = styled.img`
  width: 1062px;
  height: 764px;
  margin-bottom: 64px;
`;

function EffectSection() {
  return (
    <Section>
      <Inner>
        <TitleBox>
          <Title>
            하루 15분, 우리 아이가&nbsp;
            <StrongSpan underline>똑똑해집니다</StrongSpan>
          </Title>
          <TitleSub>유아 수학・인지 능력의 향상을 확인하였습니다.</TitleSub>
        </TitleBox>
        <FigImg src={effectFigImg} alt="학습효과 이미지" />
      </Inner>

      <EffectSecAccordion />
    </Section>
  );
}
export default EffectSection;

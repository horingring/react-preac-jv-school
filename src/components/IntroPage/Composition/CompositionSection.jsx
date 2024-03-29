import styled from "styled-components";
import StrongSpan from "@/components/common/ui/StrongSpan";
import bgImg from "@/assets/img/IntroPage/composition/jr-pc-consist-bg_v2.png";

const StyledSection = styled.section`
  height: 1652px;
  margin: 0 auto;
  background: url(${bgImg}) #fff no-repeat 50% center/2048px 1652px;
`;

const Inner = styled.div`
  text-align: center;
  width: 1062px;
  padding: 344px 0 0;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -0.96px;
  line-height: 60px;
`;

function CompositionSection() {
  return (
    <StyledSection>
      <Inner>
        <Title>
          쥬니버스쿨은&nbsp;
          <StrongSpan
            text="이렇게 구성되어 있습니다"
            underline
            underlineColor="#dbe4f2"
          />
        </Title>
      </Inner>
    </StyledSection>
  );
}

export default CompositionSection;

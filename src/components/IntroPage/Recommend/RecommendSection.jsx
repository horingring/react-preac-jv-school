import styled from "styled-components";
import rcmdSecBgImg from "@/assets/img/IntroPage/recommend/jr-pc-section-1.png";
import awardsImg from "@/assets/img/IntroPage/recommend/jr-pc-section-1-img-v3.png";
import StrongSpan from "@/components/common/ui/StrongSpan";

const Section = styled.section`
  background: url(${rcmdSecBgImg}) #fff no-repeat 50% 180px/1548px 327px;
`;

const Intro = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h3`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  padding-top: 40px;
  line-height: 60px;
  letter-spacing: -2.5px;
`;

const AwardsImg = styled.div`
  & {
    .rcmdSec__awardsImg {
      width: 860px;
      height: auto;
    }
  }
`;

function RecommendSection() {
  return (
    <Section className="rcmdSec">
      <Intro>
        <Title>
          먼저 써본
          <br />
          부모님이
          <br />
          <StrongSpan underline>추천하는 앱</StrongSpan>
        </Title>
        <AwardsImg>
          <img
            className="rcmdSec__awardsImg"
            src={awardsImg}
            alt="awardsImg-list"
          />
          <ul className="blind">
            <li>스마트앱 이노베이션 대상</li>
            <li>iF Design Awards 2개 부문 본상</li>
            <li>A.N.D Award 교육 부문 Grand Prix</li>
          </ul>
        </AwardsImg>
      </Intro>
    </Section>
  );
}

export default RecommendSection;

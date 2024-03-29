import StrongSpan from "@/components/common/ui/StrongSpan";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 64px;
`;

const CardImg = styled.img`
  width: 1062px;
  height: 534px;
`;

const CardText = styled.p`
  margin-top: 44px;
  font-size: 40px;
  font-weight: 900;
  line-height: 56px;
  color: #555;
`;

function CpsSecCard({ cardInfo }) {
  return (
    <Wrapper>
      <figure>
        <CardImg
          src={cardInfo.img}
          alt={`${cardInfo.navItemName}_카드 이미지`}
        />
      </figure>
      <CardText>
        {cardInfo.id === 0 ? (
          <>
            <StrongSpan text="아이의 발달 수준" color="#00bdfb" />에 맞춘
            세분화된 레벨로
            <br />
            학습 콘텐츠를 제공합니다.
          </>
        ) : cardInfo.id === 1 ? (
          <>
            하루 15분 분량의&nbsp;
            <StrongSpan text="오늘의 미션," color="#ff6f04" />
            <br />
            모든 미션을 자유롭게 선택할 수 있는&nbsp;
            <StrongSpan text="전체보기 모드" color="#ff6f04" />로<br />
            원하는 방법으로 학습하세요.
          </>
        ) : cardInfo.id === 2 ? (
          <>
            보호자페이지에서 아이의 학습 결과는 물론,
            <br />
            집에서 실천해 볼 수 있는
            <br />
            <StrongSpan text="학습 지도 TIP" color="#896fe4" />도 확인할 수
            있어요!
          </>
        ) : cardInfo.id === 3 ? (
          <>
            네이버 계정만 있으면&nbsp;
            <StrongSpan text="별도의 기기 대여 없이" color="#a6d935" />
            &nbsp;사용 가능합니다.
            <br />
            하나의 계정에 여러 아이를 등록할 수도 있어요.
          </>
        ) : cardInfo.id === 4 ? (
          <>
            <StrongSpan text="콘텐츠 제한 설정 기능" color="#ff5c5c" />
            으로
            <br />
            아이의 앱 사용 시간을 스마트하게 약속하세요.
          </>
        ) : undefined}
      </CardText>
    </Wrapper>
  );
}

export default CpsSecCard;

import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 210px;
  padding: 30px 36px 26px 30px;
  background-color: #e9ebf1;
  border: 3px solid #e9ebf1;
  border-radius: 20px;
  -webkit-transition-property: margin;
  transition-property: margin;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  .swiper-slide-prev &,
  .swiper-slide-next & {
    margin: 35px auto 0;
  }

  .swiper-slide-active & {
    background-color: #fff8e3;
    border: 3px solid #ffab31;
  }
`;

const Text = styled.p`
  font-size: 24px;
  color: #a3a3b5;
  font-weight: 900;
  line-height: 34px;
  letter-spacing: -0.96px;
  word-break: keep-all;

  .swiper-slide-active & {
    color: #ffab31;
  }
`;

const Name = styled.p`
  margin-top: 28px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.72px;
  color: rgba(163, 163, 181, 0.5);

  .swiper-slide-active & {
    color: rgba(255, 171, 49, 0.5);
  }
`;

function SlideRcmdCard({ text, name }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Name>- {name} -</Name>
    </Wrapper>
  );
}

export default SlideRcmdCard;

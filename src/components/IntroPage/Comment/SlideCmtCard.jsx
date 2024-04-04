import styled from "styled-components";
import parse from "html-react-parser";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  -webkit-transition-property: margin;
  transition-property: margin;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  font-size: 32px;
  font-weight: 700;

  .swiper-slide-prev & {
    margin: 48px auto 0;
  }

  .swiper-slide-next & {
    margin: 144px auto 0;
  }
`;

const TextBox = styled.div`
  width: 882px;
  min-height: 350px;
  box-sizing: border-box;
  padding: 48px 40px 48px 48px;
  margin-bottom: 48px;
  background-color: #f2f5fb;
  border-radius: 50px;
  border-bottom-left-radius: 0;
`;

const Text = styled.p`
  color: #1d3764;
  line-height: 1.5;
  letter-spacing: -1.28px;

  &:not(:nth-last-child(1)) {
    margin-bottom: 20px;
  }
`;

const WriterBox = styled.div`
  display: flex;
  letter-spacing: -1.28px;
`;

const Writer = styled.span`
  display: block;
  color: #1d3764;
  font-weight: 900;
  box-sizing: border-box;
  width: 360px;
  padding: 0 48px;
`;

const Department = styled.span`
  display: block;
  color: #1d3764;
  line-height: 1.5;
`;

function SlideCmtCard({ comment }) {
  return (
    <Wrapper>
      <TextBox>
        <Text>{parse(comment.text1)}</Text>
        <Text>{parse(comment.text2)}</Text>
      </TextBox>
      <WriterBox>
        <Writer>{parse(comment.name)}</Writer>
        <Department>{parse(comment.department)}</Department>
      </WriterBox>
    </Wrapper>
  );
}

export default SlideCmtCard;

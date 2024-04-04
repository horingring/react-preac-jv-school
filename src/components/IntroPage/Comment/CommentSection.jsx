import StrongSpan from "@/components/common/ui/StrongSpan";
import styled from "styled-components";
import CmtSwiper from "./CmtSwiper";

const StyledSection = styled.section`
  padding: 220px 0 60px;
`;

const Title = styled.h3`
  padding-bottom: 80px;
  text-align: center;
  font-size: 48px;
  font-weight: 900;
  line-height: 66px;
`;

function CommentSection() {
  return (
    <StyledSection>
      <Title>
        함께 만드는 <StrongSpan underline>전문가</StrongSpan>
      </Title>
      <CmtSwiper />
    </StyledSection>
  );
}

export default CommentSection;

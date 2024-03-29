import styled from "styled-components";

const StrongBox = styled.span`
  position: relative;
`;

const TextWrap = styled.strong`
  position: relative;
  z-index: 10;
  color: ${({ $color }) => ($color ? $color : "inherit")};
`;

const Underline = styled.span`
  position: absolute;
  z-index: 5;
  left: 0;
  bottom: -6px;
  content: "";
  display: block;
  width: 100%;
  height: 20px;
  background-color: ${({ $underlineColor }) =>
    $underlineColor ? $underlineColor : "#ffcd03"};
  border-radius: 4px;
`;

function StrongSpan({ children, color, underline, underlineColor, className }) {
  return (
    <StrongBox className={className}>
      <TextWrap $color={color}>{children}</TextWrap>
      {underline && <Underline $underlineColor={underlineColor} />}
    </StrongBox>
  );
}

export default StrongSpan;

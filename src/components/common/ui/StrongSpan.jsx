import styled from "styled-components";

const StrongBox = styled.span`
  &.strongBox {
    position: relative;
  }
`;

const TextWrap = styled.strong`
  &.strongBox__text {
    position: relative;
    z-index: 10;
    color: ${({ color }) => (color ? color : "inherit")};
  }
`;

const Underline = styled.span`
  &.strongBox__underline {
    position: absolute;
    z-index: 5;
    left: 0;
    bottom: -6px;
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background-color: ${({ underlineColor }) =>
      underlineColor ? underlineColor : "#ffcd03"};
    border-radius: 4px;
  }
`;

function StrongSpan({ text, color, underline, underlineColor }) {
  return (
    <StrongBox className="strongBox">
      <TextWrap className="strongBox__text" color={color}>
        {text}
      </TextWrap>
      {underline && (
        <Underline
          className="strongBox__underline"
          underlineColor={underlineColor}
        />
      )}
    </StrongBox>
  );
}

export default StrongSpan;

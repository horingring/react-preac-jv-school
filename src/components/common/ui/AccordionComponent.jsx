import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  background-color: #c2cadb;
  border-radius: 20px;
  ${(props) =>
    props.$on &&
    `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
  ${(props) =>
    props.$headerAsBtn &&
    `cursor: pointer;
  `}
`;

const HeaderText = styled.div``;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const ButtonText = styled.span``;

const Body = styled.section`
  height: 300px;
  background-color: #a0a8ba;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 2px solid rgba(163, 163, 181, 0.5);
`;

function AccordionComponent(props) {
  // State - S
  const [isShow, setIsShow] = useState(false);
  // State - E

  // Methods - S
  const toggleAccordion = () => {
    setIsShow(!isShow);
  };
  const onClickHeader = () => {
    if (props.headerAsBtn) toggleAccordion();
  };
  const onClickBtn = (e) => {
    e.stopPropagation();
    toggleAccordion();
  };
  // Methods - E

  // LifeCycle - S
  // mounted
  useEffect(() => {
    if (props.show) setIsShow(true);
  }, []);
  // LifeCycle - E

  return (
    <Wrapper>
      <Header
        $on={isShow}
        $headerAsBtn={props.headerAsBtn}
        onClick={onClickHeader}
      >
        <HeaderText>{props.children?.header}</HeaderText>
        <Button className="flex-center" onClick={onClickBtn}>
          <ButtonText
            className={`
            ${props.btnTextBlind && "blind"}
          `}
          >
            {isShow ? props.btnTextOn : props.btnTextOff}
          </ButtonText>
        </Button>
      </Header>
      <Body
        className={`
        ${!isShow && "blind"}
      `}
      >
        {props.children?.body}
      </Body>
    </Wrapper>
  );
}

AccordionComponent.defaultProps = {
  show: false,
  headerAsBtn: false,
  btnTextBlind: false,
  btnTextOn: "Close",
  btnTextOff: "Open",
};

export default AccordionComponent;

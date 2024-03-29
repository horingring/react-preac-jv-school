import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 86px;
`;

const Btn = styled.button`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 199px;
  height: 72px;
  background-color: #f3f5fc;
  border: 2.4px solid #c2cadb;
  border-radius: 50px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  gap: 16px;
  cursor: pointer;

  &.cpsSec__nav--on {
    border: solid 2.4px #6c768e;
    background-color: #fff;
  }
`;

const BtnLogo = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
`;

const BtnText = styled.span`
  color: #a0a8ba;
  font-size: 26px;
  font-weight: 900;

  .cpsSec__nav--on & {
    color: #6c768e;
  }
`;

function CpsSecNav({ cardList, selectedId, setSelectedId }) {
  const onClickNavItem = (id) => {
    setSelectedId(id);
  };

  return (
    <nav>
      <StyledUl>
        {cardList.map((card) => (
          <li key={card.id}>
            <Btn
              className={`
                flex-center
                ${card.id === selectedId ? "cpsSec__nav--on" : ""}
              `}
              onClick={() => {
                onClickNavItem(card.id);
              }}
            >
              <BtnLogo
                src={
                  card.id !== selectedId ? card.navItemImg : card.navItemImgOn
                }
                alt={`navItem_${card.navItemName}`}
              />
              <BtnText>{card.navItemName}</BtnText>
            </Btn>
          </li>
        ))}
      </StyledUl>
    </nav>
  );
}

export default CpsSecNav;

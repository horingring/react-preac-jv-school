import styled from "styled-components";
import CpsSecNav from "./CpsSecNav";
import CpsSecCard from "./CpsSecCard";
import { useMemo, useState } from "react";

const Wrapper = styled.div``;

const initialCardList = [
  {
    id: 0,
    navItemName: "1・2 단계",
    navItemImg: require("@/assets/img/IntroPage/composition/ico-pc-btn1-v2.png"),
    navItemImgOn: require("@/assets/img/IntroPage/composition/ico-pc-btn1-on-v2.png"),
    img: require("@/assets/img/IntroPage/composition/img-pc-consist1_v4.png"),
  },
  {
    id: 1,
    navItemName: "학습모드",
    navItemImg: require("@/assets/img/IntroPage/composition/ico-pc-btn2.png"),
    navItemImgOn: require("@/assets/img/IntroPage/composition/ico-pc-btn2-on.png"),
    img: require("@/assets/img/IntroPage/composition/img-pc-consist2_v4.png"),
  },
  {
    id: 2,
    navItemName: "보호자용",
    navItemImg: require("@/assets/img/IntroPage/composition/ico-pc-btn3.png"),
    navItemImgOn: require("@/assets/img/IntroPage/composition/ico-pc-btn3-on.png"),
    img: require("@/assets/img/IntroPage/composition/img-pc-consist3_v4.png"),
  },
  {
    id: 3,
    navItemName: "아이추가",
    navItemImg: require("@/assets/img/IntroPage/composition/ico-pc-btn4.png"),
    navItemImgOn: require("@/assets/img/IntroPage/composition/ico-pc-btn4-on.png"),
    img: require("@/assets/img/IntroPage/composition/img-pc-consist4_v3.png"),
  },
  {
    id: 4,
    navItemName: "제한설정",
    navItemImg: require("@/assets/img/IntroPage/composition/ico-pc-btn5.png"),
    navItemImgOn: require("@/assets/img/IntroPage/composition/ico-pc-btn5-on.png"),
    img: require("@/assets/img/IntroPage/composition/img-pc-consist5_v3.png"),
  },
];

function CompositionBody() {
  const [cardList] = useState(initialCardList);
  const [selectedId, setSelectedId] = useState(0);

  const selectedCard = useMemo(() => {
    return cardList.find((v) => selectedId === v.id);
  }, [cardList, selectedId]);

  return (
    <Wrapper>
      <CpsSecNav
        cardList={cardList}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <CpsSecCard cardInfo={selectedCard} />
    </Wrapper>
  );
}

export default CompositionBody;

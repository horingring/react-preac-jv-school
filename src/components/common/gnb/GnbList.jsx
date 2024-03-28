import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import GnbItem from "./GnbItem";
import { useDispatch, useSelector } from "react-redux";
import { SET_HOVERED_GNB } from "@/store/slices/commonSlice";

// Components
const StyledUl = styled.ul`
  gap: 18px;

  &.onSub {
    padding-bottom: 109px;
  }
`;

// initialState
const initialState = {
  gnbList: [
    {
      id: 1,
      to: "/",
      text: "쥬니버스쿨 소개",
    },
    {
      id: 2,
      to: "/curriculum",
      text: "커리큘럼",
      subItems: [
        { id: 1, param: "math", text: "수학" },
        { id: 2, param: "coding", text: "코딩" },
        { id: 3, param: "logic", text: "논리" },
        { id: 4, param: "lab", text: "실험실" },
        { id: 5, param: "social", text: "사회성" },
      ],
    },
    {
      id: 3,
      to: "/workbook",
      text: "워크북",
      subItems: [
        { id: 1, param: "level1", text: "1단계" },
        { id: 2, param: "level2", text: "2단계" },
      ],
    },
    {
      id: 4,
      target: "_blank",
      to: "https://help.naver.com/service/5636/category/bookmark?lang=ko",
      text: "고객센터",
    },
  ],
};

function GnbList() {
  // state
  const [gnbList] = useState(initialState.gnbList);

  // redux state
  const hoveredGnb = useSelector(({ common }) => common.hoveredGnb);

  // redux dispatch
  const dispatch = useDispatch();

  // computed
  const urlPath = useLocation().pathname;
  const onSub = useMemo(() => {
    // gnbItem이 1.선택되었거나, 2.hover 되어있어야 한다.
    // 1. gnbItem 선택 여부 확인
    const selectedGnb = gnbList.find((v) => v.to?.includes(urlPath));
    const onSubBySelected = selectedGnb?.subItems?.length > 0;
    // 2. gnbItem hover 여부 확인
    const onSubByHovered = hoveredGnb?.subItems?.length > 0;

    return onSubBySelected || onSubByHovered;
  }, [gnbList, urlPath, hoveredGnb]);

  return (
    <StyledUl
      className={`
        flex-center
        ${onSub ? "onSub" : ""}
      `}
      onMouseLeave={() => {
        dispatch(SET_HOVERED_GNB(null));
      }}
    >
      {gnbList.map((gnb) => (
        <GnbItem item={gnb} key={gnb.id} />
      ))}
    </StyledUl>
  );
}

export default GnbList;

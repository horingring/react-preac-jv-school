import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import subIconMath from "@/assets/img/common/gnb/nav_link_sub_01.png";
import subIconCoding from "@/assets/img/common/gnb/nav_link_sub_02.png";
import subIconLogic from "@/assets/img/common/gnb/nav_link_sub_03.png";
import subIconLab from "@/assets/img/common/gnb/nav_link_sub_04.png";
import subIconSocial from "@/assets/img/common/gnb/nav_link_sub_05.png";

const StyledUl = styled.ul`
  position: absolute;
  top: 88px;
  height: 109px;

  &.curriculum {
    transform: translate(calc(-405px + 81px), 0);
  }
`;

const StyledLi = styled.li`
  color: #555;

  &.on {
    color: black;
    background-color: #f2f6fc;
    border-radius: 100px;
  }

  .workbook &.on.level1 {
    background-color: #ffe990;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  box-sizing: border-box;
  width: 162px;
  height: 54px;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -0.6px;

  .curriculum & {
    padding-left: 73px;
    padding-right: 32px;
  }
  .curriculum &.link--1 {
    background: url(${subIconMath}) no-repeat 34px 50%/35px 28px;
  }
  .curriculum &.link--2 {
    background: url(${subIconCoding}) no-repeat 34px 50%/35px 28px;
  }
  .curriculum &.link--3 {
    background: url(${subIconLogic}) no-repeat 34px 50%/35px 28px;
  }
  .curriculum &.link--4 {
    background: url(${subIconLab}) no-repeat 34px 50%/35px 28px;
  }
  .curriculum &.link--5 {
    background: url(${subIconSocial}) no-repeat 34px 50%/35px 28px;
  }
`;

function GnbSubList(props) {
  // props
  const { subItems, parent } = props;

  // redux state
  const hoveredGnb = useSelector(({ common }) => common.hoveredGnb);

  // computed
  const currentRoute = useLocation();
  const urlPath = currentRoute.pathname;
  const urlQuery = new URLSearchParams(currentRoute.search);

  // methods
  function isBlind(parent) {
    return hoveredGnb
      ? !(hoveredGnb.id === parent.id && hoveredGnb.subItems?.length > 0)
      : urlPath !== parent.to;
  }
  function isCurriculum(to) {
    return to.includes("curriculum");
  }
  function isWorkbook(to) {
    return to.includes("workbook");
  }

  return (
    <StyledUl
      className={`
        flex-center
        ${isBlind(parent) ? "blind" : ""}
        ${isCurriculum(parent.to) ? "curriculum" : ""}
        ${isWorkbook(parent.to) ? "workbook" : ""}
      `}
    >
      {subItems.map((subItem) => (
        <StyledLi
          key={subItem.id}
          className={`
            ${urlQuery.get("t") === subItem.param ? "on" : ""}
            ${urlQuery.get("t") === "level1" ? "level1" : ""}
          `}
        >
          <StyledLink
            to={`${parent.to}?t=${subItem.param}`}
            className={`
              flex-center
              link--${subItem.id}
            `}
          >
            {subItem.text}
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
}

export default GnbSubList;

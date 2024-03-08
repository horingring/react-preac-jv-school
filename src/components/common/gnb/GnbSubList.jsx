import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import subIconMath from "@/assets/img/common/gnb/nav_link_sub_01.png";
import subIconCoding from "@/assets/img/common/gnb/nav_link_sub_02.png";
import subIconLogic from "@/assets/img/common/gnb/nav_link_sub_03.png";
import subIconLab from "@/assets/img/common/gnb/nav_link_sub_04.png";
import subIconSocial from "@/assets/img/common/gnb/nav_link_sub_05.png";

const Ul = styled.ul`
  &.header__gnbSubList {
    position: absolute;
    top: 88px;
    height: 109px;
  }
  .header__gnbSubItem {
    color: #555;
    .header__gnbSubItemLink {
      color: inherit;
      box-sizing: border-box;
      width: 162px;
      height: 54px;
      font-size: 18px;
      font-weight: 900;
      letter-spacing: -0.6px;
    }
  }
  .header__gnbSubItem--on {
    color: black;
    background-color: #f2f6fc;
    border-radius: 100px;
  }
  &.header__gnbSubList.curriculum {
    transform: translate(calc(-405px + 81px), 0);
    .header__gnbSubItemLink--1 {
      background: url(${subIconMath}) no-repeat 34px 50%/35px 28px;
    }
    .header__gnbSubItemLink--2 {
      background: url(${subIconCoding}) no-repeat 34px 50%/35px 28px;
    }
    .header__gnbSubItemLink--3 {
      background: url(${subIconLogic}) no-repeat 34px 50%/35px 28px;
    }
    .header__gnbSubItemLink--4 {
      background: url(${subIconLab}) no-repeat 34px 50%/35px 28px;
    }
    .header__gnbSubItemLink--5 {
      background: url(${subIconSocial}) no-repeat 34px 50%/35px 28px;
    }
    .header__gnbSubItemLink {
      padding-left: 73px;
      padding-right: 32px;
    }
  }
  &.header__gnbSubList.workbook {
    .header__gnbSubItem--on.level1 {
      background-color: #ffe990;
    }
  }
`;

function GnbSubList(props) {
  const { subItems, parent } = props;

  // redux state
  const hoveredGnb = useSelector(({ common }) => common.hoveredGnb);

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
    <Ul
      className={`
      header__gnbSubList
      flex-center
      ${isBlind(parent) ? "blind" : ""}
      ${isCurriculum(parent.to) ? "curriculum" : ""}
      ${isWorkbook(parent.to) ? "workbook" : ""}
    `}
    >
      {subItems.map((subItem) => (
        <li
          key={subItem.id}
          className={`
          header__gnbSubItem
          ${urlQuery.get("t") === subItem.param ? "header__gnbSubItem--on" : ""}
          ${urlQuery.get("t") === "level1" ? "level1" : ""}
        `}
        >
          <Link
            to={`${parent.to}?t=${subItem.param}`}
            className={`
              header__gnbSubItemLink
              flex-center
              header__gnbSubItemLink--${subItem.id}
          `}
          >
            {subItem.text}
          </Link>
        </li>
      ))}
    </Ul>
  );
}

export default GnbSubList;

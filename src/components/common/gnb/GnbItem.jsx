import { SET_HOVERED_GNB } from "@/store/slices/commonSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import GnbSubList from "./GnbSubList";

const StyledLi = styled.li`
  position: relative;
`;

const StyledLink = styled(Link)`
  position: relative;
  width: 162px;
  height: 88px;
  font-size: 20px;
  font-weight: 900;

  &.on {
    color: #ffcd03;
  }
  &.on::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 5px;
    bottom: 0;
    background-color: #ffcd03;
  }
`;

const StyledAnchor = styled.a`
  position: relative;
  width: 162px;
  height: 88px;
  font-size: 20px;
  font-weight: 900;

  &.on {
    color: #ffcd03;
  }
`;

function GnbItem({ item }) {
  // redux state
  const hoveredGnb = useSelector(({ common }) => common.hoveredGnb);

  // redux dispatch
  const dispatch = useDispatch();

  // computed
  const urlPath = useLocation().pathname;

  // methods
  function onMouseEnter(item) {
    dispatch(SET_HOVERED_GNB(item));
  }
  function isOnGnb(item) {
    return hoveredGnb ? hoveredGnb.id === item.id : urlPath === item.to;
  }

  return (
    <StyledLi>
      {!item.target ? (
        <>
          <StyledLink
            to={item.to}
            className={`
              flex-center
              ${isOnGnb(item) ? "on" : ""}
            `}
            onMouseEnter={() => {
              onMouseEnter(item);
            }}
          >
            {item.text}
          </StyledLink>
          {item.subItems?.length > 0 && (
            <GnbSubList subItems={item.subItems} parent={item} />
          )}
        </>
      ) : (
        <>
          <StyledAnchor
            href={item.to}
            target={item.target}
            className={`
              flex-center
              ${isOnGnb(item) ? "on" : ""}
            `}
            onMouseEnter={() => {
              onMouseEnter(item);
            }}
          >
            {item.text}
          </StyledAnchor>
        </>
      )}
    </StyledLi>
  );
}

export default GnbItem;

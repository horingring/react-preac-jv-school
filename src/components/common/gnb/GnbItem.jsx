import { SET_HOVERED_GNB } from "@/store/slices/commonSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import GnbSubList from "./GnbSubList";

const Li = styled.li`
  &.header__gnbItem {
    position: relative;
  }
  .header__gnbItemLink {
    position: relative;
    width: 162px;
    height: 88px;
    font-size: 20px;
    font-weight: 900;
  }
  .header__gnbItemLink--on {
    color: #ffcd03;
  }
  .header__gnbItemLink--on::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 5px;
    bottom: 0;
    background-color: #ffcd03;
  }
`;

function GnbItem(props) {
  // props
  const { item } = props;

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
    <Li className="header__gnbItem">
      {!item.target ? (
        <>
          <Link
            to={item.to}
            className={`
              header__gnbItemLink flex-center
              ${isOnGnb(item) ? "header__gnbItemLink--on" : ""}
            `}
            onMouseEnter={() => {
              onMouseEnter(item);
            }}
          >
            {item.text}
          </Link>
          {item.subItems?.length > 0 && (
            <GnbSubList subItems={item.subItems} parent={item} />
          )}
        </>
      ) : (
        <>
          <a
            href={item.to}
            target={item.target}
            className={`
              header__gnbItemLink flex-center
              ${isOnGnb(item) ? "header__gnbItemLink--on" : ""}
            `}
            onMouseEnter={() => {
              onMouseEnter(item);
            }}
          >
            {item.text}
          </a>
        </>
      )}
    </Li>
  );
}

export default GnbItem;

import styled from "styled-components";
import GnbLogo from "./GnbLogo";
import GnbList from "./GnbList";
import { useState } from "react";
import { useLocation } from "react-router";

const Header = styled.header`
  &.header {
    position: fixed;
    z-index: 100;
    background-color: white;
    -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    -webkit-transition: transform 0.3s;
    transition: transform 0.3s;

    .header__nav {
      width: 1062px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  &.header--hide {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  &.header--yellow {
    background-color: #fffbee;
  }
  &.header--skyblue {
    background-color: #f9fafd;
  }
`;

function GnbHeader() {
  // state
  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // computed
  const urlQuery = new URLSearchParams(useLocation().search);

  return (
    <Header
      className={`
        header flex-center
        ${!show ? "header--hide" : ""}
        ${urlQuery.get("t") === "level1" ? "header--yellow" : ""}
        ${urlQuery.get("t") === "level2" ? "header--skyblue" : ""}
      `}
    >
      <nav className="header__nav">
        <GnbLogo />
        <GnbList />
      </nav>
    </Header>
  );
}

export default GnbHeader;

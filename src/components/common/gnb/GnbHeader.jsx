import styled from "styled-components";
import GnbLogo from "./GnbLogo";
import GnbList from "./GnbList";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { debounce } from "lodash";

const Header = styled.header`
  position: fixed;
  z-index: 100;
  background-color: white;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;

  &.hide {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  &.yellow {
    background-color: #fffbee;
  }
  &.skyblue {
    background-color: #f9fafd;
  }
`;

const Nav = styled.nav`
  width: 1062px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

function GnbHeader() {
  // state
  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // computed
  const urlQuery = new URLSearchParams(useLocation().search);

  // methods
  const onScroll = () => {
    const currentScroll = window.scrollY;
    // 스크롤 down
    if (currentScroll > lastScrollTop) {
      setShow(false);
    }
    // 스크롤 up
    else {
      setShow(true);
    }
    setLastScrollTop(currentScroll);
  };

  const debouncedOnScroll = useCallback(debounce(onScroll, 50), []);

  // lifecycle
  useEffect(() => {
    window.addEventListener("scroll", debouncedOnScroll);

    return () => {
      window.removeEventListener("scroll", debouncedOnScroll);
    };
  }, []);

  return (
    <Header
      className={`
        flex-center
        ${!show ? "hide" : ""}
        ${urlQuery.get("t") === "level1" ? "yellow" : ""}
        ${urlQuery.get("t") === "level2" ? "skyblue" : ""}
      `}
    >
      <Nav>
        <GnbLogo />
        <GnbList />
      </Nav>
    </Header>
  );
}

export default GnbHeader;

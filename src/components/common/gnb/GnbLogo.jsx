import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "@/assets/img/common/gnb/logo_pc.png";

const Wrapper = styled.div`
  .header__logoHeading {
    width: 252px;
    background: url(${LogoImg});
    background-size: 252px auto;
    margin-top: 17px;
  }
  .header__logoLink {
    display: block;
    width: 170px;
    height: 54px;
  }
`;

function GnbLogo() {
  return (
    <Wrapper>
      <h1 className="header__logoHeading">
        <Link className="header__logoLink" to={"/"}>
          <span className="blind">쥬니버스쿨</span>
        </Link>
      </h1>
    </Wrapper>
  );
}

export default GnbLogo;

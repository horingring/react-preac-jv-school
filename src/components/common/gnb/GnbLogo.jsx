import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "@/assets/img/common/gnb/logo_pc.png";

const Wrapper = styled.div`
  width: 252px;
  background: url(${LogoImg});
  background-size: 252px auto;
  margin-top: 17px;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 170px;
  height: 54px;
`;

function GnbLogo() {
  return (
    <Wrapper>
      <StyledLink to={"/"}>
        <span className="blind">쥬니버스쿨</span>
      </StyledLink>
    </Wrapper>
  );
}

export default GnbLogo;

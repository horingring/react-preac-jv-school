import { useCallback, useState } from "react";
import styled from "styled-components";
import googleIcon from "@/assets/img/IntroPage/intro/ico_google_play.png";
import appleIcon from "@/assets/img/IntroPage/intro/ico_app_store.png";
import qrImg from "@/assets/img/IntroPage/intro/jr-pc-section-5-qr.png";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-top: 46px;
  width: 169px;
`;

const DropDownBtn = styled.button`
  display: block;
  width: 100%;
  height: 79px;
  font-size: 28px;
  letter-spacing: -2.12px;
  font-weight: 900;
  color: white;
  background-color: #232323;
  text-align: center;
  line-height: 79px;
  border-radius: 12px;
  cursor: pointer;

  &.hover {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid rgba(85, 85, 85, 0.32);
  }
`;

const DownBtnList = styled.ul`
  position: absolute;
  top: 100%;
  box-sizing: border-box;
  width: 169px;
  padding: 13px 18px 24px;
  background-color: #232323;
  border-radius: 0 0 12px 12px;

  & > li {
    position: relative;
    border-radius: 6px;

    :not(:nth-child(1)) {
      margin-top: 12px;
    }
    :nth-last-child(1) {
      margin-top: 20px;
    }
  }
`;

const InstallLink = styled.a`
  display: block;
  height: 45px;
  position: relative;
  z-index: 10;

  display: block;
  height: 45px;
  position: relative;
  z-index: 10;

  &.google {
    background: url(${googleIcon}) no-repeat 50% 50%/115px 28px;
  }
  &.apple {
    background: url(${appleIcon}) no-repeat 50% 50%/112px 29px;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
    z-index: 5;
  }

  &:hover::after {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }
`;

const QrImg = styled.img`
  width: 100%;
  height: auto;
`;

function IntroDownBtnBox() {
  // state
  const [onHover, setOnHover] = useState(false);

  // methods
  const onMouseEnter = useCallback(() => {
    setOnHover(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setOnHover(false);
  }, []);

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <DropDownBtn className={`${onHover ? "hover" : ""}`}>
        앱 다운받기
      </DropDownBtn>
      <DownBtnList
        className={`
          ${!onHover ? "blind" : ""}
        `}
      >
        <li>
          <InstallLink
            className="google"
            href="https://play.google.com/store/apps/details?id=com.nts.edu4k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="blind">구글플레이</span>
          </InstallLink>
        </li>
        <li>
          <InstallLink
            className="apple"
            href="https://apps.apple.com/kr/app/%EC%A5%AC%EB%8B%88%EB%B2%84%EC%8A%A4%EC%BF%A8-%ED%82%A4%EC%A6%88-%EC%BD%94%EB%94%A9-%EC%88%98%ED%95%99-%EB%85%BC%EB%A6%AC-%EC%82%AC%ED%9A%8C%EC%84%B1-%EA%B5%90%EC%9C%A1/id1582434425"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="blind">앱스토어</span>
          </InstallLink>
        </li>
        <li>
          <QrImg src={qrImg} alt="qrImg" />
        </li>
      </DownBtnList>
    </Wrapper>
  );
}

export default IntroDownBtnBox;

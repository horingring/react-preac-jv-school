import styled from "styled-components";
import { useCallback, useState } from "react";
import introLogoImg from "@/assets/img/IntroPage/intro/logo-spot.png";
import noticeIcon from "@/assets/img/IntroPage/intro/ico_notice.png";
import noticeTextBg from "@/assets/img/IntroPage/intro/notice_text_bg.png";

const Wrapper = styled.div`
  .introSec__titleBox {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: -1.28px;
  }
  .introSec__titleImg {
    width: 432px;
    height: 101px;
    margin-top: 25px;
  }
  .introSec__desc1 {
    margin-top: 40px;
    letter-spacing: -1.28px;
    line-height: 48px;
    font-size: 32px;
    color: #6c7683;
  }
  .introSec__desc2Box {
    position: relative;
  }
  .introSec__desc2 {
    margin-top: 28px;
    display: block;
    width: fit-content;
    padding: 0 20px;
    background-color: #dbe4f2;
    color: #6c768e;
    letter-spacing: -0.88px;
    line-height: 49px;
    border-radius: 8px;
    font-size: 22px;

    &::after {
      content: "";
      position: relative;
      top: 3px;
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-left: 8px;
      background: url(${noticeIcon});
      background-size: 24px 24px;
    }
  }
  .introSec__desc2Sub {
    position: absolute;
    top: 100%;
    box-sizing: border-box;
    width: 404px;
    height: 246px;
    padding: 50px 24px 0;
    background: url(${noticeTextBg}) no-repeat 0 100%/404px 238px;
    font-size: 20px;
    letter-spacing: -0.8px;
    line-height: 1.7;
    z-index: 25;

    strong {
      font-weight: 900;
    }
  }
`;

function IntroDescription() {
  const [onHover, setOnHover] = useState(false);

  // methods
  const onMouseEnter = useCallback(() => {
    setOnHover(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setOnHover(false);
  }, []);

  return (
    <Wrapper>
      <h1 className="introSec__titleBox">
        <p>배움이 즐거울 수 있도록</p>
        <img
          className="introSec__titleImg"
          src={introLogoImg}
          alt="쥬니버스쿨 로고"
        />
      </h1>
      <p className="introSec__desc1">
        아이들이 하는 거니까,
        <br />
        광고도 없고 추가 결제도 없습니다.
      </p>
      <div className="introSec__desc2Box">
        <p
          className="introSec__desc2"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          쥬니버스쿨은 왜 무료일까요?
        </p>
        <p
          className={`
            introSec__desc2Sub
            ${!onHover ? "blind" : ""}
          `}
        >
          <strong>네이버 커넥트재단은</strong> 네이버에서 설립한 <br />
          비영리 교육기관입니다. 우리나라 모든
          <br />
          어린이들이 최고의 교육 기회를 누릴 수 있도록
          <br />
          쥬니버스쿨과 같은 프로그램을 만들어 무료로
          <br />
          나누고 있습니다.
        </p>
      </div>
    </Wrapper>
  );
}

export default IntroDescription;

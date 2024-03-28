import styled from "styled-components";
import AccordionComponent, {
  Header as AccordionHeader,
  HeaderText as AccordionHeaderText,
  Button as AccordionButton,
  Body as AccordionBody,
} from "@/components/common/ui/AccordionComponent.jsx";
import dropdownBtnImg from "@/assets/img/IntroPage/effect/icon-80-dropdown.png";

const Accordion = styled(AccordionComponent)`
  position: relative;
  width: 800px;
  margin: 0 auto;

  ${AccordionHeader} {
    justify-content: center;
    position: relative;
    height: 67px;
    background-color: #f3f5fb;
    border-radius: 12px;
  }
  &.on ${AccordionHeader} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${AccordionHeaderText} {
    color: #6c768e;
    font-size: 30px;
    font-weight: 900;
  }

  ${AccordionButton} {
    position: absolute;
    top: calc(50% - 20px);
    right: 32px;
    width: 40px;
    height: 40px;
    background: url(${dropdownBtnImg}) no-repeat 50% 50%/40px 40px;
    transform: rotate(180deg);
  }

  ${AccordionBody} {
    height: fit-content;
    background-color: #fcfcfc;
    font-size: 22px;
    border-top: 2px solid #d8dded;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    * {
      color: #555;
    }
  }

  & {
    .accordion-item {
      text-align: start;
      padding: 24px 32px;
      line-height: 38px;

      strong {
        font-weight: 900;
      }
    }

    .accordion-item:not(:nth-last-child(1)) {
      border-bottom: 2px solid #f3f5fb;
    }

    .study-list {
      display: grid;
      grid-template-columns: 1.3fr 1fr;

      strong {
        font-weight: 700;
      }

      li {
        display: flex;
      }
    }
  }
`;

function EffectSecAccordion() {
  return (
    <Accordion headerAsBtn btnTextBlind>
      {{
        header: <strong>어떻게 연구했나요?</strong>,
        body: (
          <>
            <p className="accordion-item">
              쥬니버스쿨을 꾸준히 사용한 만 3-6세 아동의 수학능력(수와 연산,
              측정, 기하 영역)과 인지능력(처리속도, 언어이해, 시공간 영역)이
              향상됨을 검증하였습니다.
            </p>
            <ul>
              <li className="accordion-item">
                <strong>[논리]</strong>
                <ul className="study-list">
                  <li>
                    <strong>연구대상 |&nbsp;</strong>
                    <span>3-6세 아동 100명</span>
                  </li>
                  <li>
                    <strong>연구기간 |&nbsp;</strong>
                    <span>4주</span>
                  </li>
                  <li>
                    <strong>연구도구 |&nbsp;</strong>
                    <span>한국 웩슬러 유아지능검사도구</span>
                  </li>
                  <li>
                    <strong>연구기관 |&nbsp;</strong>
                    <span>
                      서울대 아동가족학과
                      <br />
                      박유정 교수 연구실
                    </span>
                  </li>
                </ul>
              </li>
              <li className="accordion-item">
                <strong>[수학]</strong>
                <ul className="study-list">
                  <li>
                    <strong>연구대상 |&nbsp;</strong>
                    <span>3-6세 아동 98명</span>
                  </li>
                  <li>
                    <strong>연구기간 |&nbsp;</strong>
                    <span>10주</span>
                  </li>
                  <li>
                    <strong>연구도구 |&nbsp;</strong>
                    <span>유아 그림수학능력 검사도구</span>
                  </li>
                  <li>
                    <strong>연구기관 |&nbsp;</strong>
                    <span>
                      중앙대 유아교육과
                      <br />
                      조형숙 교수 연구실
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ),
      }}
    </Accordion>
  );
}

export default EffectSecAccordion;

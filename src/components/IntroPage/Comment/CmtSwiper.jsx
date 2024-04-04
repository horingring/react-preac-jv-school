import JrSwiper, { Swiper } from "@/components/common/swiper/JrSwiper";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import client from "@/api/mock/index";
import arrowLeftImg from "@/assets/img/IntroPage/recommend/icon-90-arrow-left-gray.png";
import arrowRightImg from "@/assets/img/IntroPage/recommend/icon-90-arrow-right-gray.png";
import SlideCmtCard from "./SlideCmtCard";

const Spinner = styled.p`
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 245px;
  line-height: 245px;
  background-color: lightgray;
  margin: 20px auto 120px;
  font-size: 25px;
`;

const StyledJrSwiper = styled(JrSwiper)`
  ${Swiper} {
    margin: 0 auto;
    max-width: 2048px;
    position: relative;
    height: 658px;
    overflow: hidden;
  }

  & {
    .swiper-slide {
      width: 882px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      z-index: 10;
      top: 155px;
      cursor: pointer;
      width: 48px;
      height: 48px;
      -webkit-box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.12);
      border-radius: 50%;
    }
    .swiper-button-prev {
      background: url(${arrowLeftImg}) #fff no-repeat 50% 50%/28px auto;
      left: 35px;
    }
    .swiper-button-next {
      background: url(${arrowRightImg}) #fff no-repeat 50% 50%/28px auto;
      right: 35px;
    }
  }
`;

function CmtSwiper() {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  // Methods
  const fetchIntroComments = useCallback(async () => {
    const comments = await client.fetchIntroComments();
    setComments(comments);
    setIsLoading(false);
  }, []);

  // LifeCycle
  useEffect(() => {
    fetchIntroComments();
  }, []);
  return (
    <>
      {isLoading && comments.length < 1 ? (
        <Spinner />
      ) : (
        <StyledJrSwiper
          navigation
          slidesPerView={"auto"}
          loop
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          centeredSlides
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <SlideCmtCard comment={comment} />
            </SwiperSlide>
          ))}
        </StyledJrSwiper>
      )}
    </>
  );
}

export default CmtSwiper;

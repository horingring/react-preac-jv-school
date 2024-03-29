import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";

const Wrapper = styled.div``;
const StyledSwiper = styled(Swiper)``;

function JrSwiper({
  children,
  slidesPerView,
  initialSlide,
  loop,
  autoplay,
  spaceBetween,
  centeredSlides,
  navigation,
  className,
}) {
  return (
    <Wrapper className={className}>
      <StyledSwiper
        modules={[Navigation, Autoplay]}
        slidesPerView={slidesPerView}
        initialSlide={initialSlide}
        loop={loop}
        autoplay={autoplay}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        navigation={navigation}
      >
        {children}
      </StyledSwiper>
    </Wrapper>
  );
}

JrSwiper.defaultProps = {
  slidesPerView: undefined,
  initialSlide: 0,
  loop: false,
  autoplay: () => {},
  spaceBetween: 0,
  centeredSlides: false,
  navigation: false,
};

export { StyledSwiper as Swiper };
export default JrSwiper;

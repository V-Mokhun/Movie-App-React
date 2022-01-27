import React from "react";
import { Navigation } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper } from "swiper/react";

interface SliderProps {
  prevRef: React.MutableRefObject<null>;
  nextRef: React.MutableRefObject<null>;
}

const Slider: React.FC<SliderProps> = ({ children, prevRef, nextRef, ...props }) => {
  return (
    <Swiper
      onInit={(swiper) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.prevEl = prevRef.current;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      modules={[Navigation]}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      spaceBetween={30}
      slidesPerView={4}
      {...props}
    >
      {children}
    </Swiper>
  );
};
export default Slider;

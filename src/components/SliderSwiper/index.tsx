import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { DateT } from "../";

import styles from "./SliderSwiper.module.scss";
import "swiper/scss";
import "swiper/css/navigation";

type SliderSwiperProps = {
  datesList: DateT[];
};

export const SliderSwiper: React.FC<SliderSwiperProps> = ({ datesList }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={80}
      slidesPerView={3}
      navigation={true}
      className={`noselect ${styles.root}`}
    >
      {datesList.map((date, i) => (
        <SwiperSlide key={i} className={styles.root__slide}>
          <h3 className={styles.root__slide_title}>{date.year}</h3>
          <p className={styles.root__slide_text}>{date.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { DateT } from "../";

import "swiper/scss";
import "swiper/css/navigation";
import styles from "./SliderSwiper.module.scss";

type SliderSwiperProps = {
  datesList: DateT[];
};

export const SliderSwiper: React.FC<SliderSwiperProps> = ({ datesList }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={80}
      slidesPerView={"auto"}
      grabCursor={true}
      watchOverflow={false}
      className={`noselect ${styles.root}`}
    >
      {datesList
        .sort((a, b) => Number(a.year) - Number(b.year))
        .map((date, i) => (
          <SwiperSlide
            key={datesList[i].description}
            className={styles.root__slide}
          >
            <h3 className={styles.root__slide_title}>{date.year}</h3>
            <p className={styles.root__slide_text}>{date.description}</p>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

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
      // ={{
      //   prevEl: `.${styles.root_prevBtn}`,
      //   nextEl: `.${styles.root_nextBtn}`,
      // }}
      spaceBetween={80}
      slidesPerView={"auto"}
      grabCursor={true}
      watchOverflow={false}
      className={`noselect ${styles.root}`}
    >
      {/* <button className={styles.root_prevBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path
            d="M1 1L6 6L1 11"
            stroke="#3877EE"
            strokeWidth="2"
            transform="rotate(180)"
            transform-origin="50% 50%"
          />
        </svg>
      </button> */}
      {datesList
        .sort((a, b) => Number(a.year) - Number(b.year))
        .map((date, i) => (
          <SwiperSlide key={i} className={styles.root__slide}>
            <h3 className={styles.root__slide_title}>{date.year}</h3>
            <p className={styles.root__slide_text}>{date.description}</p>
          </SwiperSlide>
        ))}
      {/* <button className={styles.root_nextBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button> */}
    </Swiper>
  );
};

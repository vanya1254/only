import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  // Pagination
} from "swiper/modules";

import { DateT } from "../";

import "swiper/scss";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import styles from "./SliderSwiper.module.scss";

type SliderSwiperProps = {
  datesList: DateT[];
  media: boolean;
};

export const SliderSwiper: React.FC<SliderSwiperProps> = ({
  datesList,
  media,
}) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [key, setKey] = useState(datesList[0].description);

  const onSlideChange = (swiper: any) => {
    if (swiper.activeIndex === 0) {
      setIsFirstSlide(true);
    } else {
      setIsFirstSlide(false);
    }
  };

  useEffect(() => {
    setKey(datesList[0].description);
  }, [datesList]);

  return (
    <Swiper
      key={key}
      modules={[
        Navigation,
        // Pagination
      ]}
      navigation={!media}
      // pagination={media && { clickable: media }}
      spaceBetween={!media ? 80 : 25}
      slidesPerView={!media ? "auto" : 1.5}
      grabCursor={true}
      watchOverflow={false}
      className={`noselect ${styles.root}`}
      style={{
        marginLeft: `${
          !media && isFirstSlide ? "calc((1vh + 1vw) * 2.666667)" : ""
        }`,
        transition: ".3s linear",
      }}
      onSlideChange={onSlideChange}
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

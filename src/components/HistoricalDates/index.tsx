import React, { useState, useEffect } from "react";

import { Line, SliderSwiper, SmartCircle, SmartYears } from "../";

import styles from "./HistoricalDates.module.scss";

export type DateT = {
  year: string;
  description: string;
};

export type CategoryT = {
  name: string;
  datesList: DateT[];
};

export const HistoricalDates: React.FC = () => {
  const categories: CategoryT[] = [
    {
      name: "Наука",
      datesList: [
        {
          year: "1969",
          description:
            "20 июля — первое человеческое посадочное на Луну: Нил Армстронг и Эдвин Олдрин становятся первыми человеками, ступившими на поверхность Луны.",
        },
        {
          year: "1928",
          description:
            "12 апреля — первое радиовещание из космоса: научный симпозиум, транслированный из ракеты.",
        },
        {
          year: "1953",
          description:
            "25 апреля — описание структуры ДНК Джеймсом Ватсоном и Фрэнсисом Криком.",
        },
        {
          year: "1986",
          description:
            "28 января — космический шаттл Challenger взорвался вскоре после запуска.",
        },
        {
          year: "1990",
          description: "24 апреля — запуск космического телескопа Hubble.",
        },
      ],
    },
    {
      name: "Кино",
      datesList: [
        {
          year: "1939",
          description: '12 апреля — премьера фильма "Унесённые ветром".',
        },
        {
          year: "1977",
          description:
            '25 мая — премьера фильма "Звездные войны: Эпизод IV – Новая надежда".',
        },
        {
          year: "1994",
          description: '7 июля — премьера фильма "Форрест Гамп".',
        },
        {
          year: "1982",
          description: '25 июня — премьера фильма "Инопланетянин".',
        },
        {
          year: "2009",
          description: '18 декабря — премьера фильма "Аватар".',
        },
      ],
    },
    {
      name: "Литература",
      datesList: [
        {
          year: "1949",
          description: '17 октября — премьера книги "1984" Джорджа Оруэлла.',
        },
        {
          year: "1865",
          description:
            "14 апреля — убийство президента США Авраама Линкольна, одно из событий, вдохновивших множество произведений литературы.",
        },
        {
          year: "1816",
          description:
            '16 мая — начало написания романа "Франкенштейн" Мэри Шелли.',
        },
        {
          year: "1605",
          description: '1605 год — издание "Дон Кихота" Мигеля де Сервантеса.',
        },
        {
          year: "1850",
          description:
            '30 сентября — премьера романа "Моби Дик" Германа Мелвилла.',
        },
      ],
    },
    {
      name: "История",
      datesList: [
        {
          year: "1066",
          description:
            "14 октября — битва при Гастингсе, завершившая завоевание Англии вильгельмом Завоевателем.",
        },
        {
          year: "1912",
          description: "15 апреля — затопление Титаника.",
        },
        {
          year: "1789",
          description:
            "14 июля — Великая французская революция началась штурмом Бастилии.",
        },
        {
          year: "1945",
          description: "6 августа — атомная бомбардировка Хиросимы.",
        },
        {
          year: "1963",
          description:
            '28 августа — выступление Мартина Лютера Кинга-младшего "Мечты".',
        },
      ],
    },
    {
      name: "Спорт",
      datesList: [
        {
          year: "1936",
          description: "1 августа — открытие летних Олимпийских игр в Берлине.",
        },
        {
          year: "1954",
          description:
            "6 мая — Роджер Бэннистер становится первым человеком, пробежавшим милю за 4 минуты.",
        },
        {
          year: "1992",
          description: "25 июля — открытие летних Олимпийских игр в Барселоне.",
        },
        {
          year: "1972",
          description:
            "5 сентября — мюнхенская трагедия: члены израильской олимпийской команды были захвачены и убиты в ходе террористического нападения.",
        },
        {
          year: "2008",
          description: "8 августа — открытие летних Олимпийских игр в Пекине.",
        },
      ],
    },
  ];
  const [curCategory, setCurCategory] = useState(0);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(max-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, []);

  return (
    <div className={styles.root}>
      <article className={styles.root__title}>
        <h2 className={styles.root__title_content}>Исторические даты</h2>
      </article>
      <SmartCircle
        categoriesList={categories}
        activeDot={curCategory}
        setActiveDot={setCurCategory}
        media={matches}
      />
      <SmartYears
        yearsList={categories[curCategory].datesList.map((date) =>
          Number(date.year)
        )}
      />
      <SliderSwiper datesList={categories[curCategory].datesList} media={matches} />
      {!matches && (
        <>
          <Line
            isVertical={true}
            styles={{
              position: "absolute",
              left: "0",
              top: "0",
            }}
          />
          <Line
            isVertical={true}
            styles={{
              position: "absolute",
              right: "0",
              top: "0",
            }}
          />
          <Line
            isVertical={true}
            styles={{
              position: "absolute",
              right: "50%",
              top: "0",
            }}
          />
        </>
      )}
      <Line
        isVertical={false}
        styles={{
          position: "absolute",
          left: "0",
          top: `${
            !matches
              ? "calc((1vh + 1vw) * 16.000001)"
              : "calc((1vw + 1vh) * 32.995495)"
          }`,
        }}
      />
    </div>
  );
};

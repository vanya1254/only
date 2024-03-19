import React from "react";

import { Line, SmartCircle } from "../";

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
  return (
    <div className={styles.root}>
      <SmartCircle
        categoriesList={[
          {
            name: "Наука",
            datesList: [
              {
                year: "2015",
                description:
                  "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
              },
            ],
          },
          {
            name: "Кино",
            datesList: [
              {
                year: "2015",
                description:
                  "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
              },
            ],
          },
          {
            name: "Литература",
            datesList: [
              {
                year: "2015",
                description:
                  "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
              },
            ],
          },
          {
            name: "",
            datesList: [
              {
                year: "2015",
                description:
                  "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
              },
            ],
          },
          {
            name: "Спорт",
            datesList: [
              {
                year: "2015",
                description:
                  "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
              },
            ],
          },
          {
            name: "Физика",
            datesList: [
              {
                year: "2015",
                description:
                  "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
              },
            ],
          },
        ]}
      />
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
      <Line
        isVertical={false}
        styles={{
          position: "absolute",
          left: "0",
          // top: "44.444444%",
          top: "calc((1vh + 1vw) * 16.000001)",
        }}
      />
    </div>
  );
};

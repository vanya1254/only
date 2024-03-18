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
      <SmartCircle categoriesList={[]} />
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
          top: "50%",
        }}
      />
    </div>
  );
};

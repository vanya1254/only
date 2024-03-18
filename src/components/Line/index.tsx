import React from "react";

import initStyles from "./Line.module.scss";

export type LinePropsType = {
  styles: { [key: string]: string };
  isVertical: boolean;
};

export const Line: React.FC<LinePropsType> = ({ styles, isVertical }) => {
  return (
    <div
      className={`${initStyles.root} ${
        isVertical ? initStyles.root_vertical : initStyles.root_horizontal
      }`}
      style={{ ...styles }}
    ></div>
  );
};

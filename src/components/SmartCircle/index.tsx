import React from "react";

import { CategoryT } from "../";

import initStyles from "./SmartCircle.module.scss";

export type SmartCircleProps = {
  categoriesList: CategoryT[];
};

export const SmartCircle: React.FC<SmartCircleProps> = ({ categoriesList }) => {
  return (
    <div className={initStyles.root}>
      {categoriesList.map((category, i) => (
        <div className={initStyles.root__dot}>
          <span className={initStyles.root__dot_name}>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

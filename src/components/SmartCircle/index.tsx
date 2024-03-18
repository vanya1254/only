import React from "react";

import { CategoryT } from "../";

export type SmartCircleProps = {
  categoriesList: CategoryT[];
};

export const SmartCircle: React.FC<SmartCircleProps> = ({ categoriesList }) => {
  return <div>SmartCircle</div>;
};

import React, { useState } from "react";

import { CategoryT } from "../";

import initStyles from "./SmartCircle.module.scss";

export type SmartCircleProps = {
  categoriesList: CategoryT[];
  activeDot: number;
  setActiveDot: (value: number) => void;
};

const RADIUS_CIRCLE = "calc((1vh + 1vw) * 17.667 / 2)";

export const SmartCircle: React.FC<SmartCircleProps> = ({
  activeDot,
  setActiveDot,
  categoriesList,
}) => {
  const dotTransition = 1;
  // const [isOnMouseOver, setIsOnMouseOver] = useState(false);

  const getAngle = (i: number) => {
    return 240 + (360 / categoriesList.length) * i;
  };

  const onMouseOverDot = (event: React.MouseEvent<HTMLDivElement>) => {
    const dotContent = event.currentTarget.querySelector(
      `.${initStyles.root__dot__content}`
    ) as HTMLDivElement;

    dotContent.style.animation = "onMouseOverDot 0.2s linear forwards";

    const dotValue = dotContent.querySelector(
      `.${initStyles.root__dot_value}`
    ) as HTMLDivElement;

    dotValue.style.animation = "visibilityChangeIn 0.2s linear forwards";
  };

  const onMouseOutDot = (event: React.MouseEvent<HTMLDivElement>) => {
    const dotContent = event.currentTarget.querySelector(
      `.${initStyles.root__dot__content}`
    ) as HTMLDivElement;

    dotContent.style.animation = "onMouseOutDot 0.2s linear forwards";

    const dotValue = dotContent.querySelector(
      `.${initStyles.root__dot_value}`
    ) as HTMLDivElement;

    dotValue.style.animation = "visibilityChangeOut 0.2s linear forwards";
  };

  const onClickDot = (
    event: React.MouseEvent<HTMLDivElement>,
    curI: number
  ) => {
    const dotName = event.currentTarget?.querySelector(
      `.${initStyles.root__dot_name}`
    ) as HTMLDivElement;

    dotName.style.animation = `visibilityChangeIn 0.3s linear forwards`;
    setActiveDot(curI);
  };

  return (
    <div className={initStyles.root}>
      {categoriesList.map((category, i) => (
        <div
          key={i}
          onMouseOver={onMouseOverDot}
          onMouseOut={onMouseOutDot}
          onClick={(e) => onClickDot(e, i)}
          className={initStyles.root__dot}
          style={{
            transition: `${dotTransition}s linear`,
            transform: `rotate(${getAngle(
              activeDot + 1 - i
            )}deg) translate(${RADIUS_CIRCLE}) rotate(-${getAngle(
              activeDot + 1 - i
            )}deg)`,
            // transform: `rotate(calc((360deg / ${categoriesList.length}) * ${i}))`,
          }}
        >
          <div className={initStyles.root__dot__content}>
            <div className={initStyles.root__dot_value}>{i + 1}</div>
            <div className={initStyles.root__dot_name}>
              {activeDot === i ? category.name : ""}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

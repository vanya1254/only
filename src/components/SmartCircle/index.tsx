import React from "react";

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
  const getAngle = (i: number) => {
    return 240 + (360 / categoriesList.length) * i;
  };

  const onClickDot = (curI: number) => {
    setActiveDot(curI);
  };

  return (
    <>
      <div className={initStyles.root}>
        {categoriesList.map((category, i) => (
          <div
            key={i}
            onClick={() => onClickDot(i)}
            className={`${activeDot === i ? "activeDot" : ""} ${
              initStyles.root__dot
            }`}
            style={{
              transition: `1s linear`,
              transform: `rotate(${getAngle(
                activeDot + 1 - i
              )}deg) translate(${RADIUS_CIRCLE}) rotate(-${getAngle(
                activeDot + 1 - i
              )}deg)`,
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
      <div className={initStyles.root__nav}>
        <p className={initStyles.root__nav_info}>{`0${activeDot + 1}/0${
          categoriesList.length
        }`}</p>
        <div className={initStyles.root__nav__btns}>
          <button className={initStyles.root__nav__btns_prev}>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="#42567A"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button className={initStyles.root__nav__btns_next}>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="#42567A"
                strokeWidth="2"
                transform="rotate(180)"
                transform-origin="5px 7px"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

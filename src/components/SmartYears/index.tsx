import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

import styles from "./SmartYears.module.scss";

type SmartYearsProps = {
  yearsList: number[];
};

export const SmartYears: React.FC<SmartYearsProps> = ({ yearsList }) => {
  const [years, setYears] = useState({
    startYear: Math.min(...yearsList),
    endYear: Math.max(...yearsList),
  });

  useEffect(() => {
    let animation: gsap.core.Tween | null = null;

    const animateDate = (
      dateType: "startYear" | "endYear",
      from: number,
      to: number
    ) => {
      animation = gsap.to(
        { val: from },
        {
          val: to,
          duration: 1,
          onUpdate: () => {
            setYears((prevYears) => ({
              ...prevYears,
              [dateType]: animation?.vars.val,
            }));
          },
        }
      );
    };

    const getMathFunction = (dateType: string) => {
      return dateType === "startYear" ? Math.min : Math.max;
    };

    for (const dateType in years) {
      if (
        years[dateType as keyof typeof years] !==
        getMathFunction(dateType)(...yearsList)
      ) {
        if (
          years[dateType as keyof typeof years] <
          getMathFunction(dateType)(...yearsList)
        ) {
          animateDate(
            dateType as "startYear" | "endYear",
            years[dateType as keyof typeof years],
            years[dateType as keyof typeof years] + 1
          );
        } else if (
          years[dateType as keyof typeof years] >
          getMathFunction(dateType)(...yearsList)
        ) {
          animateDate(
            dateType as "startYear" | "endYear",
            years[dateType as keyof typeof years],
            years[dateType as keyof typeof years] - 1
          );
        }
      }
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [yearsList, years]);

  return (
    <div className={styles.root}>
      <h1 className={styles.root_start}>{years.startYear}</h1>
      <h1 className={styles.root_end}>{years.endYear}</h1>
    </div>
  );
};

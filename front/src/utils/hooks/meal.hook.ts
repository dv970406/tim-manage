import { useMemo, useState } from "react";
import { getDayOfNow } from "../func/time";

export const useControlTodayMeal = () => {
  const [isBack, setIsBack] = useState(false);

  // getDayOfNow() 최초 렌더링 시에만 호출되게 메모이징 해놨음 (getDayOfNow함수가 최초 렌더링시 한번만 실행되는 것)
  const dayOfNow = useMemo(() => getDayOfNow(), []);

  const [today, setToday] = useState<string | undefined>(dayOfNow);
  const getTomorrow = () => {
    setIsBack(false);

    setToday((prev) => {
      let nextDay;
      switch (prev) {
        case "mon":
          return (nextDay = "tue");
        case "tue":
          return (nextDay = "wed");
        case "wed":
          return (nextDay = "thu");
        case "thu":
          return (nextDay = "fri");
        case "fri":
          return (nextDay = "mon");
      }
      return nextDay;
    });
  };
  const getYesterday = () => {
    setIsBack(true);

    setToday((prev) => {
      let yesterday;
      switch (prev) {
        case "mon":
          return (yesterday = "fri");
        case "tue":
          return (yesterday = "mon");
        case "wed":
          return (yesterday = "tue");
        case "thu":
          return (yesterday = "wed");
        case "fri":
          return (yesterday = "thu");
      }
      return yesterday;
    });
  };

  return { isBack, today, getTomorrow, getYesterday };
};

import { Suspense, useEffect, useMemo, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getWeeklyMealQuery,
  useGetWeeklyMeal,
} from "../../client/meal/GetWeeklyMeal.client";
import { GetWeeklyMealQuery } from "../../client/meal/__generated__/GetWeeklyMealQuery.graphql";
import { RowBox, GapBox } from "../../components/atomics/boxes/Boxes";
import {
  AnimateSection,
  Section,
} from "../../components/atomics/sections/sections";
import { SectionTitle } from "../../components/atomics/typographys/titles";
import { AnimatePresence } from "framer-motion";
import { ButtonIcon } from "../../components/molecules/buttons/Buttons";
import { faDiagramNext, faYen } from "@fortawesome/pro-solid-svg-icons";
import { cardAnimation } from "../../css/animations";
import { theme } from "../../css/theme";
import { getDayOfNow } from "../../utils/time/time";
import { useControlTodayMeal } from "../../utils/hooks/meal/meal.hook";

const MealWeeklyPlannerPage = () => {
  const [getWeeklyMealQueryReference, loadGetWeeklyMealQuery] =
    useQueryLoader<GetWeeklyMealQuery>(getWeeklyMealQuery);

  useEffect(() => {
    loadGetWeeklyMealQuery({});
  }, []);
  return (
    <Suspense fallback="qweewqqweewqqweewqqweewqqweewq">
      {getWeeklyMealQueryReference && (
        <MealWeeklyPlanner
          getWeeklyMealQueryReference={getWeeklyMealQueryReference}
        />
      )}
    </Suspense>
  );
};

interface ISurveyManagement {
  getWeeklyMealQueryReference: PreloadedQuery<GetWeeklyMealQuery>;
}

interface IWeeklyMeal {
  weeklyMeal: {
    [key: string]: readonly string[];
  } | null;
}

const MealWeeklyPlanner = ({
  getWeeklyMealQueryReference,
}: ISurveyManagement) => {
  const { weeklyMeal }: IWeeklyMeal = useGetWeeklyMeal(
    getWeeklyMealQueryReference
  );

  // 타입 문제 있어서 객체를 배열로 바꾸는 방식은 취소
  const days = Object.keys(weeklyMeal || []);

  const { isBack, today, getTomorrow, getYesterday } = useControlTodayMeal();

  return (
    <GapBox>
      <SectionTitle>이번주 식단</SectionTitle>
      <GapBox
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "100%",
        }}
      >
        <AnimatePresence custom={isBack}>
          {days.map(
            (day) =>
              day === today && (
                <AnimateSection
                  key={day}
                  custom={isBack}
                  variants={cardAnimation}
                  initial="invisible"
                  animate="visible"
                  exit="exit"
                  style={{
                    width: 400,
                    height: 300,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: theme.spacing.sm,
                    position: "absolute", // 튀는 애니메이션 잡아주는 용도
                  }}
                >
                  {weeklyMeal &&
                    weeklyMeal[day].map((food: string, index: number) => (
                      <p key={index}>{food}</p>
                    ))}
                </AnimateSection>
              )
          )}
          <RowBox style={{ placeSelf: "flex-end" }}>
            <ButtonIcon onClick={getTomorrow} icon={faDiagramNext} />
            <ButtonIcon onClick={getYesterday} icon={faYen} />
          </RowBox>
        </AnimatePresence>
      </GapBox>
    </GapBox>
  );
};

export default MealWeeklyPlannerPage;

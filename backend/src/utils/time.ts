export const getThisWeekRange = () => {
  const now = new Date();
  // 한 주의 몇 번째 요일인가 (0,1,2,3,4,5,6 - 일월화수목금토)
  const nowDayOfWeek = now.getDay();

  // 오늘 일자
  const nowDay = now.getDate();

  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  const weekStartDate = new Date(
    nowYear,
    nowMonth,
    nowDay - (nowDayOfWeek ? nowDayOfWeek - 1 : 6),
  );
  const weekEndDate = new Date(
    nowYear,
    nowMonth,
    nowDay + (nowDayOfWeek ? 8 - nowDayOfWeek : 1),
  );

  return {
    weekStartDate,
    weekEndDate,
  };
};

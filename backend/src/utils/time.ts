export const getThisWeekRange = () => {
  const now = new Date();
  // 한 주의 몇 번째 요일인가 (0,1,2,3,4,5,6 - 일월화수목금토)
  const nowDayOfWeek = now.getDay();

  // 오늘 일자
  const nowDay = now.getDate();

  const nowMonth = now.getMonth();
  let nowYear = now.getFullYear();

  const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 2);
  const weekEndDate = new Date(nowYear, nowMonth, nowDay + (8 - nowDayOfWeek));
  console.log(weekStartDate, weekEndDate);

  return {
    weekStartDate,
    weekEndDate,
  };
};

import { DateInput } from "@fullcalendar/core";
import {
  NINE_HOURS_TO_MILLISEC,
  ONE_DAY_MILLISEC,
} from "../constants/time.constant";

export const ampmFormat = (time: Date | number) => {
  const hours = new Date(time).getUTCHours();
  const hoursByAMPM = hours >= 12 ? `${hours - 12}PM` : `${hours}AM`;
  return hoursByAMPM;
};

export const meetingTimeFormat = (time: Date | number) => {
  const hour = String(new Date(time).getHours()).padStart(2, "0");
  const minute = String(new Date(time).getMinutes()).padStart(2, "0");

  return `${hour}:${minute}`;
};

export const vacationDateFormat = (time: Date | number) => {
  // 캘린더 라이브러리가 제공하는 타임 포맷에서 -9시간을 해줘야 우리 시각이 됨
  const getRightDateFormat = new Date(
    +new Date(time) - NINE_HOURS_TO_MILLISEC
  ).getDate();

  // 위 rightDateFormat으로 인해 만약 받은 time값이 1일이라면 -9시간을 하게 되는 순간
  // 31일처럼 달의 마지막일이 되어버릴 수 있으므로 checkIsLastDateOfMonth로 date가 역전되었는지 검사 후 분기처리
  const checkIsFirstDateOfMonth = new Date(time).getDate() < getRightDateFormat;
  const month = new Date(time).getMonth() + 1;

  const firstDateMonthFormat = String(month - 1).padStart(2, "0");
  const monthFormat = String(month).padStart(2, "0");
  const dateFormat = String(getRightDateFormat).padStart(2, "0");
  if (checkIsFirstDateOfMonth)
    return `${firstDateMonthFormat}월 ${dateFormat}일`;

  return `${monthFormat}월 ${dateFormat}일`;
};

// 라이브러리가 주는 end date 포맷이 +1일 09:00시이므로 DB에 저장할 때 -18시간을 깎아서 넣는다.
export const endDateFormatForDb = (time: Date | number) => {
  const end = new Date(time).getTime() - NINE_HOURS_TO_MILLISEC * 2;

  return new Date(end);
};

export const getElaspedDay = (time: Date | number) => {
  const formatter = new Intl.RelativeTimeFormat("ko", {
    numeric: "auto",
  });
  const today = new Date().getTime();

  const createdAt = new Date(time).getTime();

  const elapsedDays = Math.ceil((createdAt - today) / ONE_DAY_MILLISEC);

  if (elapsedDays === 0) return "오늘";

  return formatter.format(elapsedDays, "day");
};

export const showDateFormat = (time: Date | number) =>
  new Date(time).toJSON().substring(0, 10);

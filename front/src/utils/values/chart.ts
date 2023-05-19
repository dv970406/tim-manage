import { ApexOptions } from "apexcharts";

// 공통적으로 쓰일 차트 옵션
export const pieChartOptions: ApexOptions = {
  chart: {
    type: "pie",
    id: "pie",
  },
  markers: {
    colors: ["red"],
  },
  legend: {
    labels: {
      colors: "white",
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 100,
        },

        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

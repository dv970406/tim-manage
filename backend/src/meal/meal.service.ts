import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getThisWeekRange } from 'src/utils/time';
import { Between } from 'typeorm';
import {
  CreateWeeklyMealInput,
  CreateWeeklyMealOutput,
} from './dtos/create-weeklyMeal.dto';
import { GetWeeklyMealOutput } from './dtos/get-weeklyMeal.dto';
import { MealRepository } from './repositories/meal.repository';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(MealRepository)
    private readonly mealRepo: MealRepository,
  ) {}

  async getWeeklyMeal(): Promise<GetWeeklyMealOutput> {
    try {
      const { weekStartDate, weekEndDate } = getThisWeekRange();

      const weeklyMeal = await this.mealRepo.findOne({
        where: {
          createdAt: Between(weekStartDate, weekEndDate),
        },
      });

      return {
        ok: true,
        weeklyMeal,
      };
    } catch (error) {
      return {
        ok: false,
        error: '식단을 조회할 수 없습니다.',
      };
    }
  }

  async createWeeklyMeal({
    excelToJson,
  }: CreateWeeklyMealInput): Promise<CreateWeeklyMealOutput> {
    try {
      const parsedJson = [...JSON.parse(excelToJson)];

      // 엑셀의 행과 열을 뒤집어서 보관
      const transposing2DArray = parsedJson.reduce(
        (result, row) =>
          row.map((_, i: number) => [...(result[i] || []), row[i]]),
        [],
      );

      const filteringNull = transposing2DArray
        .map((array) => array.filter((value) => typeof value === 'string'))
        .filter((findEmptyArray) => findEmptyArray.length > 0);

      let filteringTitle = [];
      if (
        filteringNull[0][0].includes('년') &&
        filteringNull[0][0].includes('주') &&
        filteringNull[0][0].includes('식단표')
      ) {
        filteringTitle = filteringNull[0].shift();
      }

      const weeklyMeal = await this.mealRepo.save({
        mon: filteringNull[0],
        tue: filteringNull[1],
        wed: filteringNull[2],
        thu: filteringNull[3],
        fri: filteringNull[4],
      });

      return {
        ok: true,
        weeklyMeal,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        error: '식단을 생성할 수 없습니다.',
      };
    }
  }
}

// [null, null, null, null, null, null]
// [null, '♥행복한 밥상 도시락 2023년 2월2주 식단표♥', null, null, null, null]
// [null, '2월6일', '2월7일', '2월8일', '2월9일', '2월10일']
// [null, '김칫국', '조갯살맑은국', '*비빔밥DAY*', '만둣국', '우거지국']
// [null, '오리야채볶음', '함박스테이크', '소고기무국', '돈육양배추볶음', '돈까스&소스']
// [null, '비엔나양파볶음', '오이무침', '제육볶음', '치커리겉절이', '잡채']
// [null, '애호박나물', '새우튀김', '삼색나물', '고구마튀김', '감자조림']
// [null, '시금치나물', '양배추샐러드', '달걀후라이', '어묵볶음', '겨울초겉절이']
// [null, '김치', '김치', '진미채간장조림', '김치', '김치']
// [null, null, null, '김치', null, null]
// [null, '구운버섯샐러드', '두부샐러드', '치킨텐더샐러드', '카프레제샐러드', '닭가슴살샐러드']
// [null, '화이트슈', '방울토마토', '비피더스', '딸기', '츄러스']
// 위와 같은 형태를 아래 형태로 변환하기 위한 코드
// [
//   [
//     '♥행복한 밥상 도시락 2023년 2월2주 식단표♥',
//     '2월6일',
//     '김칫국',
//     '오리야채볶음',
//     '비엔나양파볶음',
//     '애호박나물',
//     '시금치나물',
//     '김치',
//     '구운버섯샐러드',
//     '화이트슈',
//   ],
//   [
//     '2월7일',
//     '조갯살맑은국',
//     '함박스테이크',
//     '오이무침',
//     '새우튀김',
//     '양배추샐러드',
//     '김치',
//     '두부샐러드',
//     '방울토마토',
//   ],
//   [
//     '2월8일',
//     '*비빔밥DAY*',
//     '소고기무국',
//     '제육볶음',
//     '삼색나물',
//     '달걀후라이',
//     '진미채간장조림',
//     '김치',
//     '치킨텐더샐러드',
//     '비피더스',
//   ],
//   [
//     '2월9일',
//     '만둣국',
//     '돈육양배추볶음',
//     '치커리겉절이',
//     '고구마튀김',
//     '어묵볶음',
//     '김치',
//     '카프레제샐러드',
//     '딸기',
//   ],
//   [
//     '2월10일',
//     '우거지국',
//     '돈까스&소스',
//     '잡채',
//     '감자조림',
//     '겨울초겉절이',
//     '김치',
//     '닭가슴살샐러드',
//     '츄러스',
//   ],
// ];

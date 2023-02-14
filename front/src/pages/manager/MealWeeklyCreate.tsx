import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import readXlsxFile from "read-excel-file";
import { useCreateWeeklyMeal } from "../../client/meal/CreateWeeklyMeal.client";
import { SubmitButton } from "../../components/atomics/buttons/buttons";
import { Form } from "../../components/atomics/form/Form";
import { Section } from "../../components/atomics/sections/sections";
import { EndSubmitButton } from "../../components/molecules/buttons/Buttons";
import { createWorker } from "tesseract.js";
import { GapBox } from "../../components/atomics/boxes/Boxes";

interface IMealWeeklyCreateForm {
  excelFormatMeal?: File;
  imageFormatMeal?: File;
}
const MealWeeklyCreatePage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IMealWeeklyCreateForm>();

  const { createWeeklyMealMutation, createWeeklyMealLoading } =
    useCreateWeeklyMeal();
  // File.
  const onExcelSubmit: SubmitHandler<IMealWeeklyCreateForm> = async ({
    excelFormatMeal,
  }) => {
    if (createWeeklyMealLoading) return;

    // @ts-ignore
    const jsonFormatMeal = await readXlsxFile(excelFormatMeal[0]);

    const stringJson = JSON.stringify(jsonFormatMeal);
    createWeeklyMealMutation({
      excelToJson: stringJson,
    });
  };

  const onImageSubmit: SubmitHandler<IMealWeeklyCreateForm> = async ({
    imageFormatMeal,
  }) => {
    if (!imageFormatMeal) return;
    const worker = await createWorker({
      logger: (m) => console.log(m),
    });
    await worker.load();
    await worker.loadLanguage("kor+eng");
    await worker.initialize("kor+eng");

    const {
      data: { text },
      // @ts-ignore
    } = await worker.recognize(imageFormatMeal[0]);
    console.log(text);
    await worker.terminate();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <GapBox
        style={{
          flexDirection: "row",
          width: "70%",
          height: "60%",
        }}
      >
        <Section>
          <Form onSubmit={handleSubmit(onExcelSubmit)}>
            <input
              {...register("excelFormatMeal")}
              type="file"
              id="excel-file"
              accept=".xlsx,.csv"
            />
            <EndSubmitButton
              onClick={handleSubmit(onExcelSubmit)}
              disabled={createWeeklyMealLoading}
              text="식단 추가"
            />
          </Form>
        </Section>
        <Section>
          <Form onSubmit={handleSubmit(onImageSubmit)}>
            <input
              {...register("imageFormatMeal")}
              type="file"
              id="image-file"
              accept=".png,.jpg"
            />
            <EndSubmitButton
              onClick={handleSubmit(onImageSubmit)}
              disabled={createWeeklyMealLoading}
              text="식단 이미지 추가"
            />
          </Form>
        </Section>
      </GapBox>
    </div>
  );
};

export default MealWeeklyCreatePage;

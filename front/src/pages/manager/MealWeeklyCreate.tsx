import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateWeeklyMeal } from "../../client/meal/CreateWeeklyMeal.client";
import { Section } from "../../components/atomics/boxes/Sections";
import CenterFrame from "../../components/molecules/boxes/CenterFrame";
import { EndSubmitButton } from "../../components/molecules/buttons/EndSubmitButton";
import Form from "../../components/molecules/shared/Form";

interface IMealWeeklyCreateForm {
  excelFormatMeal?: File;
  imageFormatMeal?: File;
}
const MealWeeklyCreatePage = () => {
  const { register, handleSubmit } = useForm<IMealWeeklyCreateForm>();

  const { createWeeklyMealMutation, createWeeklyMealLoading } =
    useCreateWeeklyMeal();
  // File.
  // const onExcelSubmit: SubmitHandler<IMealWeeklyCreateForm> = async ({
  //   excelFormatMeal,
  // }) => {
  //   if (createWeeklyMealLoading) return;

  //   // @ts-ignore
  //   const jsonFormatMeal = await readXlsxFile(excelFormatMeal[0]);

  //   const stringJson = JSON.stringify(jsonFormatMeal);
  //   createWeeklyMealMutation({
  //     excelToJson: stringJson,
  //   });
  // };

  // const onImageSubmit: SubmitHandler<IMealWeeklyCreateForm> = async ({
  //   imageFormatMeal,
  // }) => {
  //   if (!imageFormatMeal) return;
  //   const worker = await createWorker({
  //     logger: (m) => console.log(m),
  //   });
  //   await worker.load();
  //   await worker.loadLanguage("kor+eng");
  //   await worker.initialize("kor+eng");

  //   // const {
  //   //   data,
  //   //   // @ts-ignore
  //   // } = await worker.recognize(imageFormatMeal[0]);
  //   await worker.terminate();
  // };

  return (
    <CenterFrame>
      <Section>
        <Form onSubmit={() => null /* handleSubmit(onExcelSubmit) */}>
          <input
            {...register("excelFormatMeal")}
            type="file"
            id="excel-file"
            accept=".xlsx,.csv"
          />
          <EndSubmitButton
            onClick={() => null /* handleSubmit(onExcelSubmit) */}
            disabled={createWeeklyMealLoading}
            text="식단 추가"
          />
        </Form>
      </Section>
      <Section>
        <Form onSubmit={() => null /* handleSubmit(onImageSubmit) */}>
          <input
            {...register("imageFormatMeal")}
            type="file"
            id="image-file"
            accept=".png,.jpg"
          />
          <EndSubmitButton
            onClick={() => null /* handleSubmit(onImageSubmit) */}
            disabled={createWeeklyMealLoading}
            text="식단 이미지 추가"
          />
        </Form>
      </Section>
    </CenterFrame>
  );
};

export default MealWeeklyCreatePage;

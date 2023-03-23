import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useConfirmVacation } from "../../../../client/manager/ConfirmVacation.client";
import { ColumnBox } from "../../../atomics/boxes/Boxes";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import Table from "../../../molecules/tables/Table";
import UnConfirmedVacationTableContent from "../../../organisms/content/manager/UnConfirmedVacationTableContent";
import { UnConfirmedVacationTableContent_vacation$key } from "../../../organisms/content/manager/__generated__/UnConfirmedVacationTableContent_vacation.graphql";

interface IUnConfirmedVacationsTable {
  unConfirmedVacations: readonly UnConfirmedVacationTableContent_vacation$key[];
  clickedVacationId: string;
  setClickedVacationId: Dispatch<SetStateAction<string>>;
}
const UnConfirmedVacationsTable = ({
  unConfirmedVacations,
  clickedVacationId,
  setClickedVacationId,
}: IUnConfirmedVacationsTable) => {
  const {
    confirmVacationMutation,
    confirmVacationLoading,
    confirmVacationSuccess,
  } = useConfirmVacation();

  const handleConfirmVacation = () => {
    if (confirmVacationLoading) return;
    confirmVacationMutation({ id: clickedVacationId });
  };

  useEffect(() => {
    if (confirmVacationSuccess) {
      setClickedVacationId("");
    }
  }, [confirmVacationSuccess]);

  return (
    <ColumnBox>
      <Table headers={["이름", "시작일", "종료일", "기간", "반차여부"]}>
        {unConfirmedVacations.map(
          (vacation: any) =>
            vacation && (
              <UnConfirmedVacationTableContent
                key={vacation.__id}
                vacation={vacation}
                clickedVacationId={clickedVacationId}
                setClickedVacationId={setClickedVacationId}
              />
            )
        )}
      </Table>
      <EndSubmitButton
        text="승인"
        disabled={confirmVacationLoading || !clickedVacationId}
        onClick={handleConfirmVacation}
      />
    </ColumnBox>
  );
};

export default UnConfirmedVacationsTable;

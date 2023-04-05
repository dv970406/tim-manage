import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { theme } from "../../../../css/theme";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { ListItem } from "../../../atomics/sections/sections";
import { DateText, SectionText } from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { IconBox } from "../../../molecules/boxes/IconBox";

interface IInformationCard {
  mainText: string;
  middleText: React.ReactNode;
  endText: React.ReactNode;
}
const InformationCard = ({
  mainText,
  middleText,
  endText,
}: IInformationCard) => {
  return (
    <RowBox>
      <IconBox icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

      <ColumnBox gap={theme.spacing.xs}>
        <SubTitle style={{ textAlign: "right" }}>{mainText}</SubTitle>

        <DateText style={{ textAlign: "right" }}>{middleText}</DateText>

        <SectionText style={{ textAlign: "right" }}>{endText}</SectionText>
      </ColumnBox>
    </RowBox>
  );
};

export default InformationCard;

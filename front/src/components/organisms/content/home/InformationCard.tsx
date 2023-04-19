import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { theme } from "../../../../css/theme";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { ListItem } from "../../../atomics/boxes/ScrollBox";
import { DateText } from "../../../atomics/typographys/Etc";
import { SubText, SubTitle } from "../../../atomics/typographys/Sub";
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
    <ListItem>
      <RowBox>
        <IconBox icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <ColumnBox gap={theme.spacing.xs} style={{ width: "100%" }}>
          <SubTitle style={{ textAlign: "right" }}>{mainText}</SubTitle>

          <DateText style={{ textAlign: "right" }}>{middleText}</DateText>

          <SubText style={{ textAlign: "right" }}>{endText}</SubText>
        </ColumnBox>
      </RowBox>
    </ListItem>
  );
};

export default InformationCard;

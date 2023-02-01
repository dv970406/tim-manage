import React from "react";
import { Section } from "../../atomics/sections/sections";
import { SummaryText, Text } from "../../atomics/typographys/texts";
import { SubTitle } from "../../atomics/typographys/titles";
import { BoxIcon } from "../../molecules/icons/Icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../../../css/theme";
import { GapBox } from "../../molecules/boxes/Boxes";

interface ISummaryInfo {
  subTitle: string;
  text: string;
  icon: IconProp;
}
const SummaryInfo = ({ subTitle, text, icon }: ISummaryInfo) => {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          gap: theme.spacing.lg,
          justifyContent: "space-between",
          padding: theme.spacing.lg,
        }}
      >
        <GapBox>
          <SubTitle>{subTitle}</SubTitle>
          <div>
            <SummaryText>{text}</SummaryText>
          </div>
        </GapBox>
        <BoxIcon icon={icon} size="lg" bgColor={theme.bgColors.purple} />
      </div>
    </Section>
  );
};

export default SummaryInfo;

import React from "react";
import { Section } from "../../atomics/sections/sections";
import { MainText } from "../../atomics/typographys/texts";
import { SubTitle } from "../../atomics/typographys/titles";
import { IconBox } from "../../molecules/icons/icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../../../css/theme";

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
        <div>
          <SubTitle>{subTitle}</SubTitle>
          <div>
            <MainText>{text}</MainText>
          </div>
        </div>
        <IconBox icon={icon} size="lg" bgColor={theme.bgColors.purple} />
      </div>
    </Section>
  );
};

export default SummaryInfo;

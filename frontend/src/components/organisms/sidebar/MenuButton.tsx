"use client";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { MainText } from "../../atomics/typographys/texts";
import styled from "@emotion/styled";
import { Icon, IIcon } from "../../atomics/icons/icons";
import { CSSProperties, useRef, useState } from "react";
import { theme } from "../../../css/theme";
import { IconBox } from "../../molecules/icons/icons";

interface IMenuButton extends IIcon {
  text: string;
}

const Button = styled("button")(({ theme, isClicked }: any) => ({
  padding: theme.spacing.lg,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing.md,
  backgroundColor: isClicked && theme.bgColors.gray,
  borderRadius: theme.borderRadius.md,
  width: "100%",
  transition: "all 0.2s",
}));

// Chevron 버튼 애니메이션
const chevronAnimation: CSSProperties = {
  transition: "all 0.3s",
  transform: "rotate(180deg)",
};
const defaultAnimation: CSSProperties = {
  transition: "all 0.3s",
  transform: "rotate(360deg)",
};

const MenuButton = ({ icon, text }: IMenuButton) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // 여기 로직 작성

    setIsClicked((prev) => !prev);
  };
  return (
    <Button onClick={handleClick} isClicked={isClicked}>
      <div
        style={{
          display: "flex",
          gap: theme.spacing.md,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconBox
          icon={icon}
          color={isClicked ? theme.colors.white : theme.colors.purple}
          bgColor={isClicked ? theme.bgColors.purple : theme.bgColors.gray}
        />
        <MainText>{text}</MainText>
      </div>

      <Icon
        icon={faChevronDown}
        animation={isClicked ? chevronAnimation : defaultAnimation}
      />
    </Button>
  );
};

export default MenuButton;

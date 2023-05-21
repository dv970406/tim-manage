import { GroupBase, StylesConfig } from "react-select";
import { theme } from "../../css/theme";

// react-select 라이브러리에서 css 스타일링을 정하는 방법이다.
export const userSelectStyles: StylesConfig<
  unknown,
  true,
  GroupBase<unknown>
> = {
  input: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    backgroundColor: "none",
    borderColor:
      isFocused || menuIsOpen ? theme.colors.purple : theme.colors.white,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    transition: "all 0.2s",

    ":focus": {
      borderColor: theme.colors.purple,
    },
  }),

  option: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.section,
      ":hover": {
        backgroundColor: theme.bgColors.gray,
      },
      ":focus": {
        borderColor: theme.bgColors.purple,
      },
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.section,
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.purple,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: theme.colors.white,
    ":hover": {
      backgroundColor: theme.hoverColors.purple,
    },
  }),
};

export const orderSelectStyles: StylesConfig<
  unknown,
  true,
  GroupBase<unknown>
> = {
  input: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  control: (styles, { isFocused, menuIsOpen, hasValue }) => {
    return {
      ...styles,
      backgroundColor: "none",
      border: "none",
      borderRadius: 0,
      padding: theme.spacing.sm,
      transition: "all 0.2s",
      width: 250,

      // 라이브러리 내에서 설정된 border를 끄려면 이렇게까지 해야됐음
      ...(((isFocused && menuIsOpen) || hasValue || !hasValue) && {
        borderBottom: `1px solid ${theme.colors.purple}`,
        boxShadow: "0",
      }),
      borderBottom: `1px solid ${theme.colors.white}`,

      ":hover": {
        borderBottom: `1px solid ${theme.colors.purple}`,
      },
    };
  },

  option: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.section,
      ":hover": {
        backgroundColor: theme.bgColors.gray,
      },
      ":focus": {
        borderColor: theme.bgColors.purple,
      },
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.section,
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.purple,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: theme.colors.white,
    ":hover": {
      backgroundColor: theme.hoverColors.purple,
    },
  }),
};

import { css } from "@emotion/react";
import { theme } from "./theme";

export const globalStyles = css`
  :root {
    --purple: rgb(42, 29, 163);
    --gray: rgb(109, 111, 115);

    --lightgray: #2d3038;
  }

  input {
    all: unset;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /*스크롤이 부모로 번지는 것을 막는 css*/
    overscroll-behavior: contain;
    font-family: Plus Jakarta Sans, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 5px;

    /* 스크롤바 공간에 padding을 주는 꼼수 */
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--lightgray);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    color: ${theme.colors.white};
    overflow-x: hidden;
  }

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  li {
    list-style: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* 자동완성 선택시 배경 흰색으로 바뀌는 것 방지 */
  input:-webkit-autofill {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }

  /* title 한줄로 만드는 용도 */
  .one-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

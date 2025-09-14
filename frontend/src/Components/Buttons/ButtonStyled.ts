import styled from "styled-components";
import { Button } from "antd";

export const ButtonStyled = styled(Button)<{ $size?: string }>`
  text-align: center;
  font-size: ${(props) => {
    switch (props.$size) {
      case "large":
        return "18px";
      case "xlarge":
        return "26px";
      case "xxlarge":
        return "35px";
      default:
        return "16px";
    }
  }} !important;

  padding: ${(props) => {
    switch (props.$size) {
      case "large":
        return "16px 32px";
      case "xlarge":
        return "25px 40px";   /* 👈 под 26px шрифт */
      case "xxlarge":
        return "30px 40px";   /* 👈 под 40px шрифт */
      default:
        return "11px 22px"; // medium / default
    }
  }} !important;
  background-color: #fd5e02;
  border-bottom: 2px solid #ab4509;
  &:hover {
    background-color: #ff7922 !important;
  }
  &:focus,
  &:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
  .ant-wave {
    display: none !important;
  }
`;

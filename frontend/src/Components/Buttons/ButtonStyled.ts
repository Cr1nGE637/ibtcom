import styled from "styled-components";
import { Button } from "antd";

export const ButtonStyled = styled(Button)<{ $size?: string }>`
  text-align: center;
  font-size: ${(props) => {
    switch (props.$size) {
      case "large":
        return "clamp(14px, 2vw, 18px)";
      case "xlarge":
        return "clamp(20px, 3vw, 26px)";
      case "xxlarge":
        return "clamp(24px, 4vw, 35px)";
      default:
        return "clamp(12px, 1.5vw, 16px)";
    }
  }} !important;

  padding: ${(props) => {
    switch (props.$size) {
      case "large":
        return "clamp(12px, 2vw, 16px) clamp(16px, 2.5vw, 20px)";
      case "xlarge":
        return "clamp(18px, 3vw, 25px) clamp(30px, 4vw, 40px)";
      case "xxlarge":
        return "clamp(20px, 3.5vw, 30px) clamp(30px, 4vw, 40px)";
      default:
        return "clamp(8px, 1.5vw, 11px) clamp(16px, 2.5vw, 22px)";
    }
  }} !important;
  background-color: #4a4cf5;
  border-bottom: 2px solid  #4042e2;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    white-space: normal;
    text-align: center;
  }
  
  &:hover {
    background-color: #91b3fa !important;
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

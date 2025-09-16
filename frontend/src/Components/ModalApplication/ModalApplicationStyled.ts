import styled from "styled-components";
import { Form, type FormProps, Input, Modal } from "antd";
import type { ApplicationRequest } from "./ModalApplicationProps.ts";
import TextArea from "antd/es/input/TextArea";

export const ApplicationForm = styled(Form)<FormProps<ApplicationRequest>>`
  //background-color: #197dbe;
  border-radius: 20px;
  align-items: center;
`;

export const ModalApplicationStyled = styled(Modal)`
  &.ant-form-item,
  &.ant-form-item-explain {
    color: #ff4d4f !important;
    font-size: 16px !important;
    margin-top: 4px;
    line-height: 1.4;
  }
  .ant-modal-header {
    //background: #197dbe;

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    text-align: center;
  }

  .ant-modal-body {
    padding: 24px;
    
    @media (max-width: 768px) {
      padding: 16px;
    }
    
    @media (max-width: 480px) {
      padding: 12px;
    }
  }

  .ant-modal-footer {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 16px 24px;
    
    @media (max-width: 768px) {
      padding: 12px 16px;
      flex-direction: column;
      gap: 12px;
    }
    
    @media (max-width: 480px) {
      padding: 8px 12px;
    }
  }

  .ant-modal-content {
    //background: #197dbe;
    border-radius: 16px;
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    .ant-modal {
      margin: 10px;
      max-width: calc(100vw - 20px);
    }
  }
  
  @media (max-width: 480px) {
    .ant-modal {
      margin: 5px;
      max-width: calc(100vw - 10px);
    }
  }
`;

export const ApplicationInput = styled(Input)`
  background: transparent;
  border: 2px solid #197dbe;
  height: 48px;
  //color: white;

  &::placeholder {
    //color: white !important;
    opacity: 0.7; /* можно регулировать прозрачность */
  }

  &:hover,
  &:focus,
  &:active {
    background: transparent;
  }

  &.ant-input-status-error {
    background: transparent !important;
    border: 3px solid #9f0004; /* можно оставить красный для индикации ошибки */
    box-shadow: none !important;
  }

  &.ant-input-status-error::placeholder {
    background: transparent !important;
  }
  
  @media (max-width: 768px) {
    height: 44px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    height: 40px;
    font-size: 14px;
  }
`;

ApplicationInput.TextArea = styled(TextArea)`
  border: 2px solid #197dbe;
  background: transparent;
  resize: none !important;
  height: 100px !important;
  //color: white;
  &::placeholder {
    color: white !important;
    opacity: 0.7; /* можно регулировать прозрачность */
  }

  &:hover,
  &:focus,
  &:active {
    background: transparent;
  }

  &.ant-input-status-error {
    background: transparent !important;
    border: 3px solid #9f0004; /* можно оставить красный для индикации ошибки */
    //color: white;
    box-shadow: none !important;
  }

  &.ant-input-status-error::placeholder {
    background: transparent !important;
  }
  
  @media (max-width: 768px) {
    height: 80px !important;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    height: 70px !important;
    font-size: 14px;
  }
`;

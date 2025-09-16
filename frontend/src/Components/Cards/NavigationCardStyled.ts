import styled from "styled-components";
import { Card } from "antd";

export const NavigationCardStyled = styled(Card)<{$image?: string}>`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 50%;
  min-height: 50%;
  border-radius: 20px;
  overflow: hidden;
  background-image: url("${(props) => props.$image}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(74, 76, 245, 0.15);
    border-color: #4a4cf5;
  }
  
  @media (max-width: 1200px) {
    min-width: 45%;
    min-height: 45%;
  }
  
  @media (max-width: 768px) {
    min-width: 100%;
    min-height: 180px;
    margin-bottom: 20px;
    border-radius: 15px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 480px) {
    min-height: 160px;
    margin-bottom: 15px;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    
    @media (max-width: 768px) {
      padding: 16px;
    }
    
    @media (max-width: 480px) {
      padding: 12px;
    }
  }
  
  /* Улучшенная типографика для мобильных */
  .ant-typography {
    @media (max-width: 768px) {
      font-size: 16px !important;
      line-height: 1.4 !important;
    }
    
    @media (max-width: 480px) {
      font-size: 14px !important;
      line-height: 1.3 !important;
    }
  }
  
  /* Адаптивные иконки/изображения */
  img {
    @media (max-width: 768px) {
      max-height: 60px;
      max-width: 80px;
    }
    
    @media (max-width: 480px) {
      max-height: 50px;
      max-width: 70px;
    }
  }
`;

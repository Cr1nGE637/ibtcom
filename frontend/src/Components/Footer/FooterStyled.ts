import styled from "styled-components";
import { Footer } from "antd/es/layout/layout";

export const FooterStyled = styled(Footer)`
  background: white;
  border-top: 3px solid #4a4cf5;
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  padding: 20px;
  position: relative;
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 100px;
    padding: 20px 15px;
    font-size: 13px;
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 10px;
    font-size: 12px;
    min-height: 80px;
    gap: 8px;
  }
  
  /* Улучшенная читаемость на мобильных */
  p, span, div {
    line-height: 1.4;
    margin: 0;
    
    @media (max-width: 768px) {
      line-height: 1.5;
    }
  }
  
  /* Адаптивные ссылки */
  a {
    color: #4a4cf5;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      display: inline-block;
      margin: 2px 0;
    }
  }
`

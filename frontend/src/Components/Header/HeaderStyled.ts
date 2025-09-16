import styled from "styled-components";
import { Header } from "antd/es/layout/layout";

export const HeaderStyled = styled(Header)`
  background: white;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  padding: 0 20px;
  
  @media (max-width: 1200px) {
    padding: 0 15px;
    height: 80px;
  }
  
  @media (max-width: 768px) {
    height: 70px;
    padding: 0 15px;
    justify-content: space-between;
  }
  
  @media (max-width: 480px) {
    height: 60px;
    padding: 0 10px;
  }
  
  .ant-btn {
    @media (max-width: 768px) {
      font-size: 14px !important;
      padding: 8px 12px !important;
    }
    
    @media (max-width: 480px) {
      font-size: 12px !important;
      padding: 6px 8px !important;
    }
  }
  
  img {
    @media (max-width: 768px) {
      max-height: 40px;
    }
    
    @media (max-width: 480px) {
      max-height: 30px;
    }
  }
  
  .desktop-menu {
    @media (max-width: 768px) {
      display: none !important;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  color: #4a4cf5;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease;
  z-index: 99;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  .ant-btn {
    width: 100%;
    text-align: left;
    justify-content: flex-start;
    padding: 12px 16px !important;
    border-radius: 8px;
    margin-bottom: 8px;
    
    &:hover {
      background-color: #f0f0f0 !important;
    }
  }
`;

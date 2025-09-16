import styled from "styled-components";

export const ParagraphContainer = styled.div<{ $height?: string }>`
  min-height: ${(props) => props.$height};
  display: flex;
  width: 75%;
  padding: 0 20px;
  
  @media (max-width: 1200px) {
    width: 85%;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0 5px;
  }
`;

export const ContentContainer = styled.div<{
  $justifyContent?: string;
  $image?: string;
  $gap?: string;
}>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;
  gap: ${(props) => props.$gap};
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const SubContainer = styled.div<{ $justifyContent?: string }>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "center"};
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-width: 320px;
  position: relative;
  align-items: center;
  
  @media (max-width: 1200px) {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    min-width: 320px;
  }
`;

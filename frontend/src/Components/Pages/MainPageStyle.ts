import styled from "styled-components";

export const ParagraphContainer = styled.div<{ $height?: string }>`
  min-height: ${(props) => props.$height};
  display: flex;
  width: 100%;
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
`;

export const SubContainer = styled.div<{ $justifyContent?: string }>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "center"};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 1920px;
  min-width: 1080px;
  position: relative;
`;

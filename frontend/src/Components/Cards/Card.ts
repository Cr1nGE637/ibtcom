import styled from "styled-components";

export const Card = styled.div<{$image?: string}>`
  display: flex;
  width: 100%;
  height: 70%;
  min-width: 50%;
  min-height: 50%;
  border-radius: 20px;
  overflow: hidden;
  background-image: url("${(props) => props.$image}");
  background-size: cover;
`;

import {
  ContentContainer,
  SubContainer,
} from "../Pages/MainPageStyle.ts";
import NavigationCard from "../Cards/NavigationCard.tsx";
import { navigationCard } from "../Cards/CardLists.ts";
import styled from "styled-components";

const MobileOptimizedContainer = styled(ContentContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    padding: 0 5px;
  }
`;

const CardWrapper = styled(SubContainer)`
  height: 100%;
  width: 400px;
  align-items: center;
  min-width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    max-width: 400px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const NavigationTable = () => {
  return (
    <MobileOptimizedContainer $gap={"40px"} $justifyContent={"center"}>
      {navigationCard.map((item) => (
        <CardWrapper key={item.id}>
          <NavigationCard
            id={item.id}
            paragraph={item.paragraph}
            imageSource={item.imageSource}
            text={item.text}
          />
        </CardWrapper>
      ))}
    </MobileOptimizedContainer>
  );
};

export default NavigationTable;

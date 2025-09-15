import {
  ContentContainer,
  SubContainer,
} from "../Pages/MainPageStyle.ts";
import NavigationCard from "../Cards/NavigationCard.tsx";
import { navigationCard } from "../Cards/CardLists.ts";

const NavigationTable = () => {
  return (
    <ContentContainer $gap={"40px"} $justifyContent={"center"} $image={`${import.meta.env.BASE_URL}/images/bg1.jpg`}>

      {navigationCard.map((item) => (
        <SubContainer key={item.id} style={{height: "100%", width: "300px", alignItems: "center"}}>
          <NavigationCard
            id={item.id}
            paragraph={item.paragraph}
            imageSource={item.imageSource}
            text={item.text}
          />
        </SubContainer>
      ))}
    </ContentContainer>
  );
};

export default NavigationTable;

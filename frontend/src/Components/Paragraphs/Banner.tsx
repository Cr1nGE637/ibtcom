
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import { Typography } from "antd";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";


const { Text } = Typography;

const Banner = () => {

  return (
    <ContentContainer $justifyContent={"space-evenly"}>
      <SubContainer>
        <img
          src={"https://www.ibtcom.ru/wp-content/themes/ibtcom/img/logo.png"}
          alt="Banner"
        />
      </SubContainer>
      <SubContainer>
        <Text style={{ whiteSpace: "pre-line" }}>
          {"Компания инновационных\nБизнес технологий"}
        </Text>
      </SubContainer>
      <SubContainer>
        <Text style={{ whiteSpace: "pre-line" }}>
          {"+7(923)457-79-97\nibtcom@ibtcom.ru"}
        </Text>
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Заказать звонок"}
        />
      </SubContainer>
    </ContentContainer>
  );
};

export default Banner;

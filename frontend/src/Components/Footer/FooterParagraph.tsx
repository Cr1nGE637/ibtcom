import { FooterStyled } from "./FooterStyled.ts";

import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import { SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";

const {Text} = Typography;

const FooterParagraph = () => {
  return (
    <FooterStyled>
      <SubContainer
        style={{
          paddingRight: "10px",
          flexDirection: "column",
          alignItems: "start",
          borderRight: "2px solid black",
        }}
      >
        <Text style={{ whiteSpace: "pre-line", fontSize: 16 }}>
          {"+7 (923) 457-79-97\n" + "ibtcom@ibtcom.ru"}
        </Text>
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Заказать звонок"}
        />
      </SubContainer>
      <SubContainer style={{ paddingLeft: "10px", flexDirection: "column" }}>
        <Text style={{ whiteSpace: "pre-line", fontSize: 16 }}>
          {"© 2010-2025, ООО «Компания Инновационных Бизнес Технологий». Все права защищены.\n" +
            "ИНН 7017275599/КПП 701701001"}
        </Text>
        <a href={"https://t.me/ibtcom"} style={{ width: "12px", fontSize: 30 }}>
          <i className="fab fa-telegram"></i>
        </a>
      </SubContainer>
    </FooterStyled>
  );
};

export default FooterParagraph;

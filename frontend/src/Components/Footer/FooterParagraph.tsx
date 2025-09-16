import { FooterStyled } from "./FooterStyled.ts";

import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import { SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const FooterColumnLeft = styled(SubContainer)`
  padding-right: 10px;
  flex-direction: column;
  align-items: start;
  border-right: 2px solid black;

  @media (max-width: 768px) {
    align-items: center;
    border-right: none;
    padding-right: 0;
    width: 100%;
  }
`;

const FooterColumnRight = styled(SubContainer)`
  padding-left: 10px;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0;
    width: 100%;
  }
`;

const FooterText = styled(Text)`
  white-space: pre-line;
  font-size: clamp(14px, 1.8vw, 16px);
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TelegramLink = styled.a`
  width: 12px;
  font-size: clamp(24px, 4vw, 30px);
`;

const FooterParagraph = () => {
  return (
    <FooterStyled>
      <FooterColumnLeft>
        <FooterText>
          {"+7 (923) 457-79-97\n" + "ibtcom@ibtcom.ru"}
        </FooterText>
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Заказать звонок"}
        />
      </FooterColumnLeft>
      <FooterColumnRight>
        <FooterText>
          {"© 2010-2025, ООО «Компания Инновационных Бизнес Технологий». Все права защищены.\n" +
            "ИНН 7017275599/КПП 701701001"}
        </FooterText>
        <TelegramLink href={"https://t.me/ibtcom"}>
          <i className="fab fa-telegram"></i>
        </TelegramLink>
      </FooterColumnRight>
    </FooterStyled>
  );
};

export default FooterParagraph;

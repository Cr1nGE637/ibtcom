import { Typography } from "antd";
import Information from "./Information.tsx";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";

const { Text } = Typography;

const CostReductionStrategy = () => {
  return (
    <ContentContainer style={{ flexDirection: "column" }}>
      <Information text={"Как мы сократим затраты"} image={"/images/how.png"} />
      <SubContainer
        $justifyContent={"left"}
        style={{ width: "1000px" }}
      >
        <Text
          strong
          style={{
            fontSize: 13,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "30px",
          }}
        >
          {"Позвоните нам по номеру\n" + "+7 (3822) 97-79-97 или"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 13,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "15px",
          }}
        >
          {"Мы проанализируем ваши\n" +
            "затраты и подберем\n" +
            "оптимальный тариф"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 13,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "28px",
          }}
        >
          {"Оформим пакет\n" + "документов"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 13,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "63px",
          }}
        >
          {"Перевод на новый\n" + "тариф в течение\n" + "8 дней"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 13,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "40px",
          }}
        >
          {"Вы экономите до 30%\n" +
            "благодаря подключению\n" +
            "к новому тарифу"}
        </Text>
      </SubContainer>
      <SubContainer
        $justifyContent={"start"}
        style={{ width: "930px", marginTop: "0px" }}
      >
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Оставить заявку"}
          fontSize={"default"}
        />
      </SubContainer>
    </ContentContainer>
  );
};

export default CostReductionStrategy;

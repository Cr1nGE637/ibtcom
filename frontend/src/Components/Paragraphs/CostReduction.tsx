import { Typography } from "antd";
import Information from "./Information.tsx";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";

const { Text } = Typography;

const CostReduction = () => {
  return (
    <ContentContainer style={{ flexDirection: "column", marginTop: "20px", marginBottom: "20px" }}>
      <Information
        text={"Сократим затраты на сотовую связь"}
        image={"/images/icons.png"}
      />
      <SubContainer
        $justifyContent={"left"}
        style={{ width: "1000px", marginBottom: "40px" }}
      >
        <Text
          strong
          style={{
            fontSize: 16,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "80px",
          }}
        >
          {"Доступ к\nспециальным\nтарифам"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 16,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "110px",
          }}
        >
          {"Не нужно менять\nНомер"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 16,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "85px",
          }}
        >
          {"Среднее снижение\nзатрат 30%"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 16,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "70px",
          }}
        >
          {"Смена оператора и\nтарифа в течении 8\nдней"}
        </Text>
      </SubContainer>
      <ButtonForApplication
        modalComponent={ModalApplication}
        buttonText={"Получить доступ к специальным тарифам"}
        fontSize={"xlarge"}
      />
    </ContentContainer>
  );
};

export default CostReduction;

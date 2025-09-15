import { Typography } from "antd";
import Information from "./Information.tsx";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";


const { Text } = Typography;

const IBTCOM = () => {
  return (
    <ContentContainer
      style={{
        flexDirection: "column",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Information text={"IBTCOM это"} image={`${import.meta.env.BASE_URL}/images/what.png`} />
      <SubContainer
        $justifyContent={"left"}
        style={{ width: "1000px", marginBottom: "40px", marginTop: "20px" }}
      >
        <Text
          strong
          style={{
            fontSize: 14,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "40px",
          }}
        >
          {"Высококвалифицированная\n" +
            "помощь при выборе\n" +
            "программного обеспечения"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 14,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "57px",
          }}
        >
          {"Работа напрямую\n" +
            "с крупнейшими\n" +
            "дистрибьюторами\n" +
            "и ресселерами ПО"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 14,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "61px",
          }}
        >
          {"Продажа\n" + "специализированного ПО"}
        </Text>
        <Text
          strong
          style={{
            fontSize: 14,
            whiteSpace: "pre-line",
            textAlign: "center",
            marginLeft: "43px",
          }}
        >
          {"Формирование\n"+
            "пакета программ\n"+
            "в зависимости\n"+
            "от функции сотрудника"}
        </Text>
      </SubContainer>
    </ContentContainer>
  );
};

export default IBTCOM;

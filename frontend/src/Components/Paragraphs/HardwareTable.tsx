import ContactTable from "./ContactTable.tsx";
import { hardwareCard } from "../Cards/CardLists.ts";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";

const {Text} = Typography;

const HardwareTable = () => {
  return (
    <ContentContainer style={{ flexDirection: "column", paddingTop: "40px" }} $gap={"40px"}>
      <ContactTable
        data={hardwareCard}
        columns={6}
        titleLevel={1}
        title={"Подберем и произведем монтаж аппаратного обеспечения"}
        maxWidth={"1300px"}

      />
      <SubContainer
        $justifyContent={"center"}
        style={{ 
          width: "100%", 
          maxWidth: "1300px",
          marginBottom: "40px",
          padding: "0 20px"
        }}
      >
        <Text
          strong
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            whiteSpace: "pre-line",
            textAlign: "center",
            lineHeight: 1.5
          }}
        >
          {"Компания предоставляет бесплатные консалтинговые услуги при выборе аппаратного обеспечения\n" +
            "и предлагает пакеты программ в зависимости от функции сотрудника"}
        </Text>
      </SubContainer>
    </ContentContainer>
  );
};

export default HardwareTable;

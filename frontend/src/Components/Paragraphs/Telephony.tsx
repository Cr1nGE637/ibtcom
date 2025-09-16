import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
const { Title, Text } = Typography;

const Telephony = () => {
  return (
    <ContentContainer $justifyContent={"center"}>
      <SubContainer style={{ 
        flexDirection: "column", 
        width: "50%",
        minWidth: "300px"
      }}>
        <Title
          level={1}
          style={{ 
            whiteSpace: "pre-line", 
            textAlign: "center",
            fontSize: "clamp(24px, 4vw, 48px)"
          }}
        >
          {"Хотите сократить до 30%\nзатрат на сотовую связь?"}
        </Title>
        <Text
          style={{
            whiteSpace: "pre-line",
            textAlign: "center",
            fontSize: "clamp(16px, 2.5vw, 28px)",
            marginBottom: "20px",
          }}
        >
          {"Подключим вашу организацию\n" +
            "к специальным корпоративным тарифам\n" +
            "БЕСПЛАТНО!"}
        </Text>
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Оставить заявку"}
          fontSize={"xxlarge"}
        />
      </SubContainer>
      <SubContainer style={{
        width:'50%',
        minWidth: "300px",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img 
          src={"src/assets/telephony.svg"} 
          alt={"Picture"}
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </SubContainer>
    </ContentContainer>
  );
};

export default Telephony;

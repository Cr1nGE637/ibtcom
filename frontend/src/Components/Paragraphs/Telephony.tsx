import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
const { Title } = Typography;

const Telephony = () => {
  return (
    <ContentContainer $justifyContent={"center"} $image={`${import.meta.env.BASE_URL}/images/bg2.jpg`}>
      <SubContainer style={{ flexDirection: "column", marginLeft: "200px" }}>
        <Title
          level={2}
          style={{ whiteSpace: "pre-line", color: "#fff", textAlign: "center" }}
        >
          {"Хотите сократить до 30%\nзатрат на сотовую связь?"}
        </Title>
        <Title
          level={4}
          style={{
            whiteSpace: "pre-line",
            textAlign: "center",
            marginTop: "0px",
            color: "#fff",
          }}
        >
          {"Подключим вашу организацию\n" +
            "к специальным корпоративным тарифам\n" +
            "БЕСПЛАТНО!"}
        </Title>
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Оставить заявку"}
          fontSize={"xxlarge"}
        />
      </SubContainer>
    </ContentContainer>
  );
};

export default Telephony;

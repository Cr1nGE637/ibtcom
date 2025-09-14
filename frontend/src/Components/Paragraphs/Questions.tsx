import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";
import FAQItem from "../FAQItem/FAQItem.tsx";
import { faqItems } from "../FAQItem/FAQItemStyled.ts";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplicationWithQuestion from "../ModalApplication/ModalApplicationWithQuestion.tsx";
const { Title } = Typography;

const Questions = () => {
  return (
    <ContentContainer
      $justifyContent={"center"}
      style={{ flexDirection: "column", backgroundColor: "#f0f0f0" }}
    >
      <SubContainer style={{ marginBottom: "40px" }}>
        <Title level={1} style={{ whiteSpace: "pre-line" }}>
          Часто задаваемые вопросы
        </Title>
      </SubContainer>
      <ContentContainer
        style={{
          minWidth: "65%",
          maxWidth: "900px",
          display: "grid",
          gridTemplateColumns: `repeat(2, 1fr)`,
          gap: "20px",
          alignItems: "start",
          marginBottom: "40px",
        }}
      >
        {faqItems.map((item) => (
          <SubContainer>
            <FAQItem
              question={item.question}
              answer={item.answer}
              iconImage={"/images/q.png"}
            />
          </SubContainer>
        ))}
      </ContentContainer>
      <ButtonForApplication
        modalComponent={ModalApplicationWithQuestion}
        buttonText={"Задать вопрос"}
        fontSize={"xlarge"}
      />
    </ContentContainer>
  );
};

export default Questions;

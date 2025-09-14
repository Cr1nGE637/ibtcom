import { Typography } from "antd";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import { QuestionIcon, SpeechBubble, TailIcon } from "./FAQItemStyled.ts";

const { Title, Text } = Typography;

interface FAQItemProps {
  question: string;
  answer: string;
  iconImage: string;
}

const FAQItem = ({ question, answer, iconImage }: FAQItemProps) => {
  return (
    <ContentContainer
      style={{ alignItems: "start", flexDirection: "column", width: "400px" }}
    >
      <SubContainer style={{ display: "flex", gap: "8px" }}>
        <QuestionIcon src={iconImage} />
        <Title
          level={4}
          style={{ margin: 0, color: "#197dbe", fontSize: "16px" }}
        >
          {question}
        </Title>
      </SubContainer>
      <SpeechBubble>
        <Text style={{ color: "#333", fontSize: "14px" }}>{answer}</Text>
        <TailIcon src={"/images/corner.png"} />
      </SpeechBubble>

    </ContentContainer>
  );
};

export default FAQItem;

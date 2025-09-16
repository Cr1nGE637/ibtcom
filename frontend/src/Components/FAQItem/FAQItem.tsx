// FAQItem.tsx
import { Collapse, Typography } from "antd";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";

const { Title } = Typography;
const { Panel } = Collapse;

export interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQListProps {
  items: FAQItemProps[];
  title?: string;
}

const FAQItem: React.FC<FAQListProps> = ({ items, title } : FAQListProps) => {
  return (
    <ContentContainer
      style={{ alignItems: "start", flexDirection: "column", width: "100%", marginBottom: 30, marginTop: 30 }}
    >
      <SubContainer style={{ marginBottom: 20, justifyContent: "center", textAlign: "center", width: "100%" }}>
        <Title level={2} style={{textAlign: "center"}}>{title}</Title>
      </SubContainer>

      <Collapse
        size={"large"}
        accordion
        bordered={true}
        expandIconPosition="end"
        style={{ width: "100%", backgroundColor: "transparent" }}
      >
        {items.map((item, index) => (
          <Panel
            header={<strong>{item.question}</strong>}
            key={index.toString()}
            style={{ fontSize: "16px" }}
          >
            <p style={{ margin: 0, lineHeight: 1.6 }}>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </ContentContainer>
  );
};

export default FAQItem;
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import ContactCard from "../Cards/ContactCard.tsx";
import { Typography } from "antd";
const { Title } = Typography;

interface CardItem {
  id?: number;
  imageSource: string;
  text: string;
}

interface ContactTableProps {
  data: CardItem[];
  columns?: number;
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  maxWidth?: string;
  image?: string;
}

const ContactTable = ({
  data,
  columns,
  title,
  titleLevel = 2,
  maxWidth,
  image,
}: ContactTableProps) => {
  return (
    <ContentContainer
      $justifyContent={"center"}
      style={{ flexDirection: "column" }}
      $image={image}
    >
      <SubContainer style={{ marginBottom: "40px" }}>
        <Title level={titleLevel} style={{ whiteSpace: "pre-line" }}>
          {title}
        </Title>
      </SubContainer>
      <ContentContainer
        style={{
          minWidth: "65%",
          maxWidth: maxWidth,
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "5px",
        }}
      >
        {data.map((item) => (
          <SubContainer key={item.id}>
            <ContactCard
              id={item.id}
              imageSource={item.imageSource}
              text={item.text}
            />
          </SubContainer>
        ))}
      </ContentContainer>
    </ContentContainer>
  );
};

export default ContactTable;

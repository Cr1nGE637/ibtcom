import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import ContactCard from "../Cards/ContactCard.tsx";
import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

const GridContainer = styled.div<{ $columns: number }>`
  min-width: 65%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 5px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      ${(props) => Math.min(props.$columns, 4)},
      1fr
    );
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => Math.min(props.$columns, 2)},
      1fr
    );
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

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
        <Title
          level={titleLevel}
          style={{
            whiteSpace: "pre-line",
            textAlign: "center",
            fontSize: "clamp(18px, 2.5vw, 32px)",
          }}
        >
          {title}
        </Title>
      </SubContainer>
      <GridContainer $columns={columns || 1} style={{ maxWidth }}>
        {data.map((item) => (
          <SubContainer key={item.id}>
            <ContactCard
              id={item.id}
              imageSource={item.imageSource}
              text={item.text}
            />
          </SubContainer>
        ))}
      </GridContainer>
    </ContentContainer>
  );
};

export default ContactTable;

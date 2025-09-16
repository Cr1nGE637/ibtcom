import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const PartnersTitle = styled(Title)`
  margin-top: 8px !important;
  text-align: center;
  font-size: clamp(18px, 2vw, 24px) !important;
  width: 100%;

  @media (min-width: 992px) {
    width: auto;
    text-align: left;
    margin: 0 40px 0 0 !important;
    display: flex;
    align-items: center;
  }
`;

interface PartnershipProps {
  imageSource?: string;
}

const partners: PartnershipProps[] = [
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners1.png`,
  },
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners2.png`,
  },
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners3.png`,
  },
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners4.png`,
  },
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners5.png`,
  },
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners6.png`,
  },
  {
    imageSource: `${import.meta.env.BASE_URL}images/partners7.png`,
  },
];

const Partnership = () => {
  return (
    <ContentContainer>
      <SubContainer style={{ 
        gap: "50px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <PartnersTitle level={4}>Нам доверяют</PartnersTitle>
        {partners.map((item, index) => (
          <img 
            key={index}
            src={item.imageSource} 
            alt={`Partner ${index + 1}`} 
            style={{
              height: "40px",
              maxWidth: "120px",
              objectFit: "contain"
            }}
          />
        ))}
      </SubContainer>
    </ContentContainer>
  );
};

export default Partnership;

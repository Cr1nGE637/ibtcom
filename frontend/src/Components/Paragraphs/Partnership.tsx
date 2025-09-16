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
    imageSource: "/images/partners1.png",
  },
  {
    imageSource: "/images/partners2.png",
  },
  {
    imageSource: "/images/partners3.png",
  },
  {
    imageSource: "/images/partners4.png",
  },
  {
    imageSource: "/images/partners5.png",
  },
  {
    imageSource: "/images/partners6.png",
  },
  {
    imageSource: "/images/partners7.png",
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

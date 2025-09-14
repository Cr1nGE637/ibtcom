import { ContentContainer } from "../Pages/MainPageStyle.ts";
import { Typography } from "antd";

const { Title } = Typography;

interface InformationProps {
  text: string;
  image?: string;
}

const Information = ({ text, image }: InformationProps) => {
  return (
    <ContentContainer
      $justifyContent={"center"}
      style={{ flexDirection: "column" }}
    >
      <Title level={1}> {text}</Title>
      <ContentContainer $justifyContent={"center"} style={{ marginTop: "20px" }}>
        <img
          src={image}
          alt="asdas"
          style={{
            height: "118px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "832px",
          }}
        />
      </ContentContainer>
    </ContentContainer>
  );
};

export default Information;

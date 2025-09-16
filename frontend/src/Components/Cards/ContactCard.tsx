import { Card, Typography } from "antd";

const { Text } = Typography;

export interface CardProps {
  id?: number;
  imageSource: string;
  text: string;
}
const ContactCard = ({ imageSource, text}: CardProps) => {
  return (
    <Card
      bodyStyle={{ paddingTop: "5px" }}
      hoverable
      style={{
        width: 180,
        height: 200,
        backgroundColor: "transparent",
        border: "none",
        textAlign: "center",
      }}
      cover={
        <img
          alt="example"
          src={imageSource}
          width={70}
          height={70}
          style={{ paddingTop: "20px", filter: "invert(17%) sepia(32%) saturate(6079%) hue-rotate(204deg) brightness(93%) contrast(98%)"}}
        />
      }
    >
      <Text
        style={{
          justifyContent: "center",
          wordWrap: "break-word",
          maxWidth: "100%",
        }}
      >
        {text}
      </Text>
    </Card>
  );
};

export default ContactCard;

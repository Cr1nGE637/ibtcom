import { Card, Typography } from "antd";
import { useState } from "react";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";

const { Text } = Typography;

export interface CardProps {
  id?: number;
  imageSource: string;
  text: string;
}
const ContactCard = ({ imageSource, text}: CardProps) => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  return (
    <Card
      bodyStyle={{ paddingTop: "5px" }}
      hoverable
      onMouseEnter={() => setIsButtonVisible(true)}
      onMouseLeave={() => setIsButtonVisible(false)}
      style={{
        width: 220,
        height: 200,
        backgroundColor: "transparent",
        border: "none",
        textAlign: "center",
      }}
      cover={
        <img
          alt="example"
          src={imageSource}
          width={50}
          height={50}
          style={{ paddingTop: "20px" }}
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

      {isButtonVisible && (
        <ButtonForApplication
          modalComponent={ModalApplication}
          buttonText={"Оставить заявку"}
        ></ButtonForApplication>
      )}
    </Card>
  );
};

export default ContactCard;

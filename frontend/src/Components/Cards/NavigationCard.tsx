import { Card } from "./Card.ts";
import {Typography} from "antd";

export interface NavigationProps {
  id?: number;
  paragraph: string;
  imageSource?: string;
  text?: string;
}

const {Title} = Typography;

const NavigationCard: React.FC<NavigationProps> = ({
  paragraph,
  imageSource,
  text,
}: NavigationProps) => {
  const handleClick = () => {
    const element = document.getElementById(paragraph);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Card onClick={handleClick} $image={imageSource}>
      <Title level={5} style={{whiteSpace: "pre-line", marginTop: "100px", marginLeft: "30px", color: "#fff"}}>{text}</Title>
    </Card>
  );
};

export default NavigationCard;

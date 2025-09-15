import { Card } from "./Card.ts";
import {Typography} from "antd";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${paragraph}`);
  };
  return (
    <Card onClick={handleClick} $image={imageSource}>
      <Title level={5} style={{whiteSpace: "pre-line", marginTop: "100px", marginLeft: "30px", color: "#fff"}}>{text}</Title>
    </Card>
  );
};

export default NavigationCard;

import { NavigationCardStyled } from "./NavigationCardStyled.ts";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

export interface NavigationProps {
  id?: number;
  paragraph: string;
  imageSource?: string;
  text?: string;
}

const { Title } = Typography;

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
    <NavigationCardStyled
      hoverable
      onClick={handleClick}
      $image={imageSource}
      style={{ textAlign: "center", alignItems: "flex-end" }}
    >
      <Title level={5}>{text}</Title>
    </NavigationCardStyled>
  );
};

export default NavigationCard;

import { Button, Typography } from "antd";
import type { NavigationProps } from "../Cards/NavigationCard.tsx";
import { HeaderStyled } from "./HeaderStyled.ts";
import { createElement, useState } from "react";
import type { Props } from "../ModalApplication/ModalApplicationProps.ts";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const menuItems: { label: string; paragraph: string }[] = [
  { label: "Главная", paragraph: "" },
  { label: "Телефония", paragraph: "telephony" },
  { label: "Программное обеспечение", paragraph: "software" },
  { label: "Аппаратное обеспечение", paragraph: "hardware" },
];

interface ModalProps {
  modalComponent: React.ComponentType<Props>;
}
const HeaderParagraph = ({ modalComponent }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const modal = createElement(modalComponent, { open, setOpen });
  const navigate = useNavigate();
  const handleClick = ({ paragraph }: NavigationProps) => {
    navigate(`/${paragraph}`);}
  return (
    <HeaderStyled>
      {menuItems.map((item) => (
        <Button
          key={item.paragraph}
          type="link"
          style={{ color: "white" }}
          onClick={() => handleClick({ paragraph: item.paragraph })}
        >
          {item.label}
        </Button>
      ))}
      <Button
        type={"link"}
        style={{ boxShadow: "none", border: "none", outline: "none" }}
        onClick={() => setOpen(true)}
      >
        <Text underline style={{ color: "white" }}>
          Получить консультацию
        </Text>
      </Button>
      {modal}
    </HeaderStyled>
  );
};

export default HeaderParagraph;

import { Button, Typography, Drawer, Menu } from "antd";
import type { NavigationProps } from "../Cards/NavigationCard.tsx";
import { HeaderStyled, MobileMenuButton } from "./HeaderStyled.ts";
import { useNavigate } from "react-router-dom";
import { SubContainer } from "../Pages/MainPageStyle.ts";
import ButtonForApplication from "../Buttons/ButtonForApplication.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import { useState } from "react";

const { Text } = Typography;

const menuItems: { label: string; paragraph: string }[] = [
  { label: "Главная", paragraph: "" },
  { label: "Телефония", paragraph: "telephony" },
  { label: "Программное обеспечение", paragraph: "software" },
  { label: "Аппаратное обеспечение", paragraph: "hardware" },
];

const HeaderParagraph = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleClick = ({ paragraph }: NavigationProps) => {
    navigate(`/${paragraph}`);
    setIsMobileMenuOpen(false); // Закрываем мобильное меню после клика
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      <HeaderStyled>
        <SubContainer>
          <img src={`/images/logo.png`} alt="Banner" />
        </SubContainer>
        
        {/* Десктопное меню */}
        <SubContainer style={{ 
          justifySelf: "center", 
          flexWrap: "wrap",
          gap: "5px",
          justifyContent: "center"
        }} className="desktop-menu">
          {menuItems.map((item) => (
            <Button
              key={item.paragraph}
              type="link"
              onClick={() => handleClick({ paragraph: item.paragraph })}
            >
              <Text>{item.label}</Text>
            </Button>
          ))}
          <ButtonForApplication modalComponent={ModalApplication} buttonText={"Заказать звонок"} fontSize={"large"}/>
        </SubContainer>
        
        {/* Мобильная кнопка меню */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderStyled>

      {/* Мобильное меню на Drawer */}
      <Drawer
        placement="right"
        width={280}
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        bodyStyle={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}
      >
        <Menu
          mode="inline"
          selectable={false}
          onClick={({ key }) => handleClick({ paragraph: key === 'home' ? '' : String(key) })}
          items={menuItems.map((item) => ({
            key: item.paragraph === '' ? 'home' : item.paragraph,
            label: item.label,
          }))}
        />
        <div style={{ marginTop: 8 }}>
          <ButtonForApplication 
            modalComponent={ModalApplication} 
            buttonText={"Заказать звонок"} 
            fontSize={"large"}
          />
        </div>
      </Drawer>
    </>
  );
};

export default HeaderParagraph;

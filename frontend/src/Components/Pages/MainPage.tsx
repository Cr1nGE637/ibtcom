import React, { useEffect } from "react";
import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import Banner from "../Paragraphs/Banner.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import NavigationTable from "../Paragraphs/NavigationTable.tsx";
import Information from "../Paragraphs/Information.tsx";
import Questions from "../Paragraphs/Questions.tsx";

import { ConfigProvider } from "antd";
import IBTCOM from "../Paragraphs/IBTCOM.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import { faqItemsMain } from "../FAQItem/FAQItemStyled.ts";

const MainPage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:
            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeightStrong: 800,
          fontSize: 14,
          controlOutlineWidth: 3,
          colorError: "#ff0004",
        },
      }}
    >
      <MainContainer>
        <ParagraphContainer id="banner" $height={"98px"}>
          <Banner />
        </ParagraphContainer>

        <HeaderParagraph modalComponent={ModalApplication} />

        <ParagraphContainer id="main" $height={"576px"}>
          <NavigationTable />
        </ParagraphContainer>

        <ParagraphContainer id="ibtcom" $height={"auto"}>
          <IBTCOM />
        </ParagraphContainer>

        <ParagraphContainer id="partnership" $height={"auto"} style={{paddingBottom: "80px"}}>
          <Information text={"Наши партнеры"} image={"/images/partners.png"} />
        </ParagraphContainer>

        <ParagraphContainer id="questions" $height={"auto"}>
          <Questions data={faqItemsMain}></Questions>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default MainPage;

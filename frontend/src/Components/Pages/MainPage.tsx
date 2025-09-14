import React, { useEffect } from "react";
import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import Banner from "../Paragraphs/Banner.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import NavigationTable from "../Paragraphs/NavigationTable.tsx";
import ContactTable from "../Paragraphs/ContactTable.tsx";
import Telephony from "../Paragraphs/Telephony.tsx";
import Information from "../Paragraphs/Information.tsx";
import { softwareCards } from "../Cards/CardLists.ts";
import Questions from "../Paragraphs/Questions.tsx";

import { ConfigProvider } from "antd";
import CostReduction from "../Paragraphs/CostReduction.tsx";
import CostReductionStrategy from "../Paragraphs/CostReductionStrategy.tsx";
import IBTCOM from "../Paragraphs/IBTCOM.tsx";
import HardwareTable from "../Paragraphs/HardwareTable.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";

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

        <HeaderParagraph modalComponent={ModalApplication}/>

        <ParagraphContainer id="main" $height={"576px"}>
          <NavigationTable />
        </ParagraphContainer>
        <ParagraphContainer id="telephony" $height={"400px"}>
          <Telephony />
        </ParagraphContainer>
        <ParagraphContainer
          id="costReduction"
          $height={"400px"}
          style={{ flexDirection: "column" }}
        >
          <CostReduction />
        </ParagraphContainer>
        <ParagraphContainer id="costReductionStrategy" $height={"380px"}>
          <CostReductionStrategy />
        </ParagraphContainer>
        <ParagraphContainer id="software" $height={"840px"}>
          <ContactTable
            data={softwareCards}
            columns={5}
            titleLevel={1}
            title={"Подберем и оптимизируем ПО"}
            image={"/images/bg3.jpg"}
            maxWidth={"1200px"}
          />
        </ParagraphContainer>
        <ParagraphContainer id="ibtcom" $height={"472px"}>
          <IBTCOM />
        </ParagraphContainer>
        <ParagraphContainer id="hardwareSupport" $height={"548px"}>
          <HardwareTable />
        </ParagraphContainer>
        <ParagraphContainer id="partnership" $height={"360px"}>
          <Information text={"Наши партнеры"} image={"/images/partners.png"} />
        </ParagraphContainer>
        <ParagraphContainer id="questions" $height={"970px"}>
          <Questions></Questions>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default MainPage;

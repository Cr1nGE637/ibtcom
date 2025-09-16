import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";

import FooterParagraph from "../Footer/FooterParagraph.tsx";
import { ConfigProvider } from "antd";
import Telephony from "../Paragraphs/Telephony.tsx";
import CostReduction from "../Paragraphs/CostReduction.tsx";
import CostReductionStrategy from "../Paragraphs/CostReductionStrategy.tsx";
import FAQItem from "../FAQItem/FAQItem.tsx";
import { faqItemsTelephony } from "../FAQItem/FAQItemStyled.ts";


const TelephonyPage = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:
            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeightStrong: 800,
          fontSize: 14,
        },
      }}
    >
      <MainContainer>

        <HeaderParagraph/>

        <ParagraphContainer id="telephony" $height={"auto"}>
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
        <ParagraphContainer id="questions" $height={"auto"}>
          <FAQItem items={faqItemsTelephony} title={"Вопросы по телефонии"}/>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default TelephonyPage;

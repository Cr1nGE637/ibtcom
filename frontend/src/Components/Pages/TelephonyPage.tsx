import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";
import Banner from "../Paragraphs/Banner.tsx";
import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import { ConfigProvider } from "antd";
import Telephony from "../Paragraphs/Telephony.tsx";
import CostReduction from "../Paragraphs/CostReduction.tsx";
import CostReductionStrategy from "../Paragraphs/CostReductionStrategy.tsx";
import Questions from "../Paragraphs/Questions.tsx";
import { faqItemsTelephony } from "../FAQItem/FAQItemStyled.ts";

const TelephonyPage = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:
            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeightStrong: 600,
          fontSize: 14,
        },
      }}
    >
      <MainContainer>
        <ParagraphContainer id="banner" $height={"98px"}>
          <Banner />
        </ParagraphContainer>

        <HeaderParagraph modalComponent={ModalApplication} />

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
        <ParagraphContainer id="questions" $height={"auto"}>
          <Questions data={faqItemsTelephony}></Questions>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default TelephonyPage;

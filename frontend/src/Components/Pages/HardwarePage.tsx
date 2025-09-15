import {MainContainer, ParagraphContainer} from "./MainPageStyle.ts";
import Banner from "../Paragraphs/Banner.tsx";
import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import { ConfigProvider } from "antd";
import HardwareTable from "../Paragraphs/HardwareTable.tsx";
import Questions from "../Paragraphs/Questions.tsx";
import {
  faqItemsHardware,
} from "../FAQItem/FAQItemStyled.ts";


const PrivacyPolicyPage = () => {
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

        <ParagraphContainer id="hardwareSupport" $height={"548px"}>
          <HardwareTable />
        </ParagraphContainer>
        <ParagraphContainer id="questions" $height={"auto"}>
          <Questions data={faqItemsHardware}></Questions>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default PrivacyPolicyPage;
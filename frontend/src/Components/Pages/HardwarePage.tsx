import {MainContainer, ParagraphContainer} from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";

import FooterParagraph from "../Footer/FooterParagraph.tsx";
import { ConfigProvider } from "antd";
import HardwareTable from "../Paragraphs/HardwareTable.tsx";
import FAQItem from "../FAQItem/FAQItem.tsx";
import { faqItemsHardware } from "../FAQItem/FAQItemStyled.ts";


const PrivacyPolicyPage = () => {
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


        <HeaderParagraph />

        <ParagraphContainer id="hardwareSupport" $height={"548px"}>
          <HardwareTable />
        </ParagraphContainer>
        <ParagraphContainer id="questions" $height={"auto"}>
          <FAQItem items={faqItemsHardware} title={"Вопросы по аппаратному обеспечению"}/>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default PrivacyPolicyPage;
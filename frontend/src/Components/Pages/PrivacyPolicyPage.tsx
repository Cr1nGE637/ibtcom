import {MainContainer, ParagraphContainer} from "./MainPageStyle.ts";
import Banner from "../Paragraphs/Banner.tsx";
import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import PrivacyPolicy from "../Paragraphs/PrivacyPolicy.tsx";
import { ConfigProvider } from "antd";


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

          <ParagraphContainer $height={"auto"}>
            <PrivacyPolicy></PrivacyPolicy>
          </ParagraphContainer>
          <FooterParagraph />
        </MainContainer>
      </ConfigProvider>
    );
};

export default PrivacyPolicyPage;
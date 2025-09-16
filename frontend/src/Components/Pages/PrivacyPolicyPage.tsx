import {MainContainer, ParagraphContainer} from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";

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
            fontWeightStrong: 800,
            fontSize: 14,
          },
        }}
      >
        <MainContainer>

          <HeaderParagraph/>

          <ParagraphContainer $height={"auto"}>
            <PrivacyPolicy></PrivacyPolicy>
          </ParagraphContainer>
          <FooterParagraph />
        </MainContainer>
      </ConfigProvider>
    );
};

export default PrivacyPolicyPage;
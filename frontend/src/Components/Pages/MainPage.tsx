
import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import NavigationTable from "../Paragraphs/NavigationTable.tsx";


import { ConfigProvider } from "antd";
import IBTCOM from "../Paragraphs/IBTCOM.tsx";


import Partnership from "../Paragraphs/Partnership.tsx";
import FAQItem from "../FAQItem/FAQItem.tsx";
import { faqItemsMain } from "../FAQItem/FAQItemStyled.ts";

const MainPage: React.FC = () => {

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

        <HeaderParagraph />

        <ParagraphContainer id="ibtcom" $height={"auto"}>
          <IBTCOM />
        </ParagraphContainer>

        <ParagraphContainer id="partnership" $height={"auto"} style={{paddingBottom: "80px"}}>
          <Partnership/>
        </ParagraphContainer>

        <ParagraphContainer id="main" $height={"500px"}>
          <NavigationTable />
        </ParagraphContainer>

        <ParagraphContainer id="questions" $height={"auto"}>
          <FAQItem items={faqItemsMain} title={"Общие вопросы"}/>
        </ParagraphContainer>
        <FooterParagraph />
      </MainContainer>
    </ConfigProvider>
  );
};

export default MainPage;

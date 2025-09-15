import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";
import Banner from "../Paragraphs/Banner.tsx";
import HeaderParagraph from "../Header/HeaderParagraph.tsx";
import ModalApplication from "../ModalApplication/ModalApplication.tsx";
import FooterParagraph from "../Footer/FooterParagraph.tsx";
import { ConfigProvider } from "antd";
import ContactTable from "../Paragraphs/ContactTable.tsx";
import { softwareCards } from "../Cards/CardLists.ts";
import Questions from "../Paragraphs/Questions.tsx";
import {
  faqItemsSoftware,
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

        <ParagraphContainer id="software" $height={"840px"}>
          <ContactTable
            data={softwareCards}
            columns={5}
            titleLevel={1}
            title={"Подберем и оптимизируем ПО"}
            image={`${import.meta.env.BASE_URL}/images/bg3.jpg`}
            maxWidth={"1200px"}
          />
        </ParagraphContainer>

        <ParagraphContainer id="questions" $height={"auto"}>
          <Questions data={faqItemsSoftware}></Questions>
        </ParagraphContainer>


        <FooterParagraph />

      </MainContainer>
    </ConfigProvider>
  );
};

export default PrivacyPolicyPage;

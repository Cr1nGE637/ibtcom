import { MainContainer, ParagraphContainer } from "./MainPageStyle.ts";

import HeaderParagraph from "../Header/HeaderParagraph.tsx";

import FooterParagraph from "../Footer/FooterParagraph.tsx";
import { ConfigProvider } from "antd";
import ContactTable from "../Paragraphs/ContactTable.tsx";
import { softwareCards } from "../Cards/CardLists.ts";
import FAQItem from "../FAQItem/FAQItem.tsx";
import { faqItemsSoftware } from "../FAQItem/FAQItemStyled.ts";


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
          <FAQItem items={faqItemsSoftware} title={"Вопросы по программному обеспечению"}/>
        </ParagraphContainer>


        <FooterParagraph />

      </MainContainer>
    </ConfigProvider>
  );
};

export default PrivacyPolicyPage;

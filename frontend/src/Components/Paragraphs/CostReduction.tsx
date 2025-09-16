import { ContentContainer } from "../Pages/MainPageStyle.ts";
import ContactTable from "./ContactTable.tsx";
import { costReductionCard } from "../Cards/CardLists.ts";

const CostReduction = () => {
  return (
    <ContentContainer
      style={{ flexDirection: "column", paddingTop: "40px" }}
      $gap={"40px"}
    >
      <ContactTable
        data={costReductionCard}
        columns={4}
        titleLevel={2}
        title={"Подберем и произведем монтаж аппаратного обеспечения"}
        maxWidth={"70%"}
      />
    </ContentContainer>
  );
};

export default CostReduction;

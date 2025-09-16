

import { ContentContainer,  } from "../Pages/MainPageStyle.ts";
import ContactTable from "./ContactTable.tsx";
import {
  costReductionStrategyCard,
} from "../Cards/CardLists.ts";



const CostReductionStrategy = () => {
  return (
    <ContentContainer style={{ flexDirection: "column", paddingTop: "40px" }} $gap={"40px"}>
      <ContactTable
        data={costReductionStrategyCard}
        columns={5}
        titleLevel={2}
        title={"Как мы сократим затраты?"}
        maxWidth={"80%"}
      />
    </ContentContainer>
  );
};

export default CostReductionStrategy;

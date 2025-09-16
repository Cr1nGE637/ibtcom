import { Typography} from "antd";
import { ContentContainer, SubContainer } from "../Pages/MainPageStyle.ts";

const { Text, Title } = Typography;

const IBTCOM = () => {
  return (
    <ContentContainer
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        width: "100%",
      }}
    >
      <SubContainer style={{ 
        flexDirection: "column", 
        width: "50%",
        minWidth: "300px"
      }}>
        <Title
          level={1}
          style={{ 
            whiteSpace: "pre-line", 
            textAlign: "center",
            fontSize: "clamp(24px, 4vw, 48px)"
          }}
        >
          {"IBTCOM\nКомпания Инновационных\nБизнес Технологий"}
        </Title>
        <Text
          style={{
            whiteSpace: "pre-line",
            textAlign: "center",
            fontSize: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {"Поможем вашему бизнесу оптимизировать и сократить затраты"}
        </Text>
      </SubContainer>
      <SubContainer style={{
        width:'50%',
        minWidth: "300px",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/ibtcom.svg`}
          alt={"Picture"}
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </SubContainer>
    </ContentContainer>
  );
};

export default IBTCOM;

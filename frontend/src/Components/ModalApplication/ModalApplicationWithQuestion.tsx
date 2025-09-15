import { Button, Checkbox, Form, Typography } from "antd";
import useNotification from "antd/es/notification/useNotification";
import type { ApplicationRequest, Props } from "./ModalApplicationProps.ts";
import { ButtonStyled } from "../Buttons/ButtonStyled.ts";
import {
  ApplicationForm,
  ApplicationInput,
  ModalApplicationStyled,
} from "./ModalApplicationStyled.ts";
import { SubContainer } from "../Pages/MainPageStyle.ts";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const ModalApplicationWithQuestion = ({ open, setOpen }: Props) => {
  const [form] = Form.useForm<ApplicationRequest>();
  const [api, contextHolder] = useNotification();
  const createClientCancel = () => {
    setOpen(false);
  };
  const onFinish = (request: ApplicationRequest) => {
    console.log(request);
    api.success({
      message: "success",
      description: "Заявка подана",
      placement: "bottomRight",
      pauseOnHover: true,
      showProgress: true,
    });
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/privacy-policy`);}
  return (
    <ModalApplicationStyled
      open={open}
      title={
        <SubContainer style={{ flexDirection: "column" }}>
          <Title level={1} style={{ color: "white" }}>
            {"Оставить заявку"}
          </Title>
          <Text
            style={{ whiteSpace: "pre-line", fontSize: "18px", color: "white" }}
          >
            {"И наши менеджеры свяжутся с вами в ближайшее время"}
          </Text>
        </SubContainer>
      }
      onCancel={createClientCancel}
      footer={[
        <ButtonStyled key={"submit"} type={"primary"} onClick={form.submit}>
          Оставить заявку
        </ButtonStyled>,
      ]}
    >
      {contextHolder}
      <ApplicationForm
        form={form}
        onFinish={onFinish}
        layout={"vertical"}
        clearOnDestroy={true}
      >
        <ApplicationForm.Item
          name="name"
          rules={[
            {
              required: true,
              message: " ",
            },
          ]}
          label={
            <Text
              style={{
                whiteSpace: "pre-line",
                fontSize: "18px",
                color: "white",
              }}
            >
              {"Имя"}
            </Text>
          }
        >
          <ApplicationInput placeholder={"Введите ваше имя"} />
        </ApplicationForm.Item>
        <ApplicationForm.Item
          name="number"
          rules={[
            {
              required: true,
              message: " ",
            },
            {
              pattern:
                /^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
              message:
                "Введите корректный российский номер, например: +7 (999) 123-45-67",
            },
          ]}
          label={
            <Text
              style={{
                whiteSpace: "pre-line",
                fontSize: "18px",
                color: "white",
              }}
            >
              {"Телефон"}
            </Text>
          }
        >
          <ApplicationInput placeholder={"Введите ваш номер телефона"} />
        </ApplicationForm.Item>
        <ApplicationForm.Item
          name="email"
          rules={[
            {
              required: true,
              message: " ",
            },
            {
              type: "email",
              message: " ",
            },
          ]}
          label={
            <Text
              style={{
                whiteSpace: "pre-line",
                fontSize: "18px",
                color: "white",
              }}
            >
              {"E-Mail"}
            </Text>
          }
        >
          <ApplicationInput placeholder={"Введите ваш e-mail"} />
        </ApplicationForm.Item>
        <ApplicationForm.Item
          name={"question"}
          label={
            <Text
              style={{
                whiteSpace: "pre-line",
                fontSize: "18px",
                color: "white",
              }}
            >
              {"Вопрос"}
            </Text>
          }
        >
          <ApplicationInput.TextArea placeholder={"Введите ваш вопрос"}/>
        </ApplicationForm.Item>
        <ApplicationForm.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Необходимо согласие с политикой конфиденциальности")),
            },
          ]}>
          <Checkbox style={{ color: "white" }}>
            Я согласен(а) с{" "}
            <Button
              type={"link"}
              style={{ boxShadow: "none", border: "none", outline: "none" }}
              onClick={handleClick}
            >
              <Text underline style={{ color: "white" }}>
                Политикой конфиденциальности
              </Text>
            </Button>
          </Checkbox>
        </ApplicationForm.Item>
      </ApplicationForm>
    </ModalApplicationStyled>
  );
};

export default ModalApplicationWithQuestion;

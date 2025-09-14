import { createElement, useState } from "react";

import { SubContainer} from "../Pages/MainPageStyle.ts";
import type { Props } from "../ModalApplication/ModalApplicationProps.ts";
import { ButtonStyled } from "./ButtonStyled.ts";

interface ModalProps {
  modalComponent: React.ComponentType<Props>;
  buttonText: string;
  fontSize: string;
}

const ButtonForApplication = ({ modalComponent, buttonText, fontSize }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const modalWithProps = createElement(modalComponent, { open, setOpen });
  return (
    <SubContainer>
      <ButtonStyled
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
        $size={fontSize}
      >
        {buttonText}
      </ButtonStyled>
      {modalWithProps}
    </SubContainer>
  );
};

export default ButtonForApplication;

export interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface ApplicationRequest {
  name: string;
  number: string;
  email: string;
  question?: string | "-";
}
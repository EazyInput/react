import IUseInput from "../interfaces/IUseInput";

export const defaultTextInput: IUseInput<string> = {
  error: "",
  value: "",
  dirty: false,
  valid: false,
  handleChange: () => {
    return;
  },
};

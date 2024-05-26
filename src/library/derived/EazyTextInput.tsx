import { EazyInput } from "../base";
import IUseInput from "../interfaces/IUseInput";

export const EazyTextInput: React.FC<EazyTextInputProperties> = ({
  id,
  input,
  placeholder,
  staticStyle,
}: EazyTextInputProperties) => {
  return (
    <EazyInput
      id={id}
      input={input}
      placeholder={placeholder}
      staticStyle={staticStyle}
    />
  );
};

interface EazyTextInputProperties {
  id: string;
  input: IUseInput<string>;
  placeholder: string;
  staticStyle?: string;
}

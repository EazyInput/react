import IUseInput from "../../interfaces/IUseInput";
import { InputType } from "../../interfaces/InputType";

export const EazyInput: React.FC<EazyInputProperties> = ({
  id,
  input,
  required,
}: EazyInputProperties) => {
  return <input id={id} required={required} value={input.value} />;
};

interface EazyInputProperties {
  id: string;
  input: IUseInput<InputType>;
  required?: boolean;
}

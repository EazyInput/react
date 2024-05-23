import IUseInput from "../interfaces/IUseInput";
import { InputType } from "../interfaces/InputType";

export const BaseInput: React.FC<BaseInputProperties> = ({
  id,
  input,
}: BaseInputProperties) => {
  return <input id={id} value={input.value} />;
};

interface BaseInputProperties {
  id: string;
  input: IUseInput<InputType>;
}

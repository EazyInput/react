import IUseInput from "../interfaces/IUseInput";
import { InputType } from "../interfaces/InputType";

export const BaseInput: React.FC<BaseInputProperties> = ({
  input,
}: BaseInputProperties) => {
  return <input value={input.value} />;
};

interface BaseInputProperties {
  input: IUseInput<InputType>;
}

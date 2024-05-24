import IUseInput from "../../interfaces/IUseInput";
import useInput from "../use-input/UseInput";

export default function useTextInput(initialValue = ""): IUseInput<string> {
  return useInput<string>(initialValue, (value) => value);
}

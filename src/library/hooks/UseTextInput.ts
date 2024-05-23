import IUseInput from "../interfaces/IUseInput";
import useInput from "./UseInput";

export default function useTextInput(initialValue = ""): IUseInput<string> {
  return useInput<string>(initialValue, (value) => value);
}

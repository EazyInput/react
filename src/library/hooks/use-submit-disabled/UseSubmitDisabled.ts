import IValid from "../../interfaces/IValid";

export default function useSubmitDisabled(inputs: Array<IValid>): boolean {
  return inputs.some((input) => !input.valid);
}

import IValid from "./IValid";

export default interface IUseInput<T> extends IValid {
  dirty: boolean;
  error: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInput: (event: React.FormEvent<HTMLInputElement>) => void;
  value: T;
}

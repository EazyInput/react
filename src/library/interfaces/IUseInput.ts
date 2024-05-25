import IValid from "./IValid";

export default interface IUseInput<T> extends IValid {
  dirty: boolean;
  error: string;
  updateValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: T;
}

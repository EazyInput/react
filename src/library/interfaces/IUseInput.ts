import IValid from "./IValid";

export default interface IUseInput<T> extends IValid {
  updateValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: T;
}

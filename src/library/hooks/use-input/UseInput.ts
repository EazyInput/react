import { useState } from "react";
import IUseInput from "../../interfaces/IUseInput";

export default function useInput<T>(
  defaultValue: T,
  conversionFunc: (newValue: string) => T,
): IUseInput<T> {
  const [dirty, setDirty] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [value, setValue] = useState<T>(defaultValue);

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDirty(true);
    setError(event.target.validationMessage);
    setValid(event.target.validity.valid);
    setValue(conversionFunc(event.target.value));
  };

  return { dirty, error, updateValue, valid, value };
}

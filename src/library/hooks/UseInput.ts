import { useState } from "react";
import IUseInput from "../interfaces/IUseInput";

export default function useInput<T>(
  defaultValue: T,
  conversionFunc: (newValue: string) => T,
): IUseInput<T> {
  const [valid] = useState<boolean>(false);
  const [value, setValue] = useState<T>(defaultValue);

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    setValue(conversionFunc(element.value));
  };

  return { updateValue, valid, value };
}

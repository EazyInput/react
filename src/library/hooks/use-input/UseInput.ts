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

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    setValues(event.target);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues(event.target);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    setValues(event.target as HTMLInputElement);
  };

  const setValues = (target: EventTarget & HTMLInputElement): void => {
    setDirty(true);
    setError(target.validationMessage);
    setValid(target.validity.valid);
    setValue(conversionFunc(target.value));
  };

  return { dirty, error, handleChange, handleFocus, handleInput, valid, value };
}

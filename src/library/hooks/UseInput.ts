import { useState } from "react";
import IUseInput from "../interfaces/IUseInput";

export default function useInput<T>(defaultValue: T): IUseInput<T> {
  const [valid] = useState<boolean>(false);
  const [value] = useState<T>(defaultValue);

  return { valid, value };
}

import IUseInput from "../../interfaces/IUseInput";
import { InputType } from "../../interfaces/InputType";

/**
 * Defines a base component for all text based inputs.
 */
export const EazyInput: React.FC<EazyInputProperties> = ({
  id,
  input,
  required,
}: EazyInputProperties) => {
  return (
    <input
      aria-labelledby={id}
      id={id}
      required={required}
      value={input.value}
    />
  );
};

interface EazyInputProperties {
  /**
   * The input identifier for accessibility purposes.
   */
  id: string;

  /**
   * The input hook for pushing data in and out of the input.
   */
  input: IUseInput<InputType>;

  /**
   * A value indicating whether the field is required.
   */
  required?: boolean;
}

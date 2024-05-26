import IUseInput from "../../interfaces/IUseInput";
import { InputType } from "../../interfaces/InputType";

/**
 * Defines a base component for all text based inputs.
 */
export const EazyInput: React.FC<EazyInputProperties> = ({
  id,
  input,
  placeholder,
  required,
  title,
}: EazyInputProperties) => {
  return (
    <input
      aria-labelledby={id}
      id={id}
      placeholder={placeholder}
      required={required}
      title={title}
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
   * A placeholder for the input value until one is specified.
   */
  placeholder: string;

  /**
   * A value indicating whether the field is required.
   */
  required?: boolean;

  /**
   * A helpful tooltip for the user when the mouse hovers over the input.
   */
  title?: string;
}

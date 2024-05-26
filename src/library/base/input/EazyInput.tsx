import IUseInput from "../../interfaces/IUseInput";
import { InputType } from "../../interfaces/InputType";

/**
 * Defines a base component for all text based inputs.
 */
export const EazyInput: React.FC<EazyInputProperties> = ({
  errorStyle,
  id,
  input,
  placeholder,
  required,
  staticStyle,
  title,
  validStyle,
}: EazyInputProperties) => {
  const determineStyle = (): string => {
    if (input.valid) {
      return `${staticStyle ?? ""} ${validStyle ?? ""}`;
    }
    return `${staticStyle ?? ""} ${errorStyle ?? ""}`;
  };

  return (
    <input
      aria-labelledby={id}
      className={determineStyle()}
      id={id}
      onChange={input.updateValue}
      placeholder={placeholder}
      required={required}
      title={title}
      value={input.value}
    />
  );
};

interface EazyInputProperties {
  /**
   * The styling for the input when it is in the inValid state.
   */
  errorStyle?: string;

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
   * The default styling for the input. Is always applied no matter the input state.
   */
  staticStyle?: string;

  /**
   * A helpful tooltip for the user when the mouse hovers over the input.
   */
  title?: string;

  /**
   * The styling for the input when it is in the valid state.
   */
  validStyle?: string;
}

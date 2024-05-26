import IUseInput from "../../interfaces/IUseInput";
import { InputType } from "../../interfaces/InputType";
import "./EazyFeedback.style.css";

/**
 * Defines a feedback message for validation purposes.
 */
export const EazyFeedback: React.FC<EazyFeedbackProperties> = ({
  errorStyle,
  input,
  staticStyle,
  validMessage,
  validStyle,
}: EazyFeedbackProperties) => {
  const determineStyle = (): string => {
    if (!input.dirty) {
      return `eazy-not-visible ${staticStyle ?? ""}`;
    }
    if (input.valid) {
      return `${staticStyle ?? ""} ${validStyle ?? ""}`;
    }
    return `${staticStyle ?? ""} ${errorStyle ?? ""}`;
  };

  const determineMessage = (): string => {
    if (!input.dirty) {
      return "placeholder";
    }

    return input.valid ? validMessage ?? "Input is valid." : input.error;
  };

  return <p className={determineStyle()}>{determineMessage()}</p>;
};

interface EazyFeedbackProperties {
  /**
   * The style class that should be applied when the corresponding input is invalid.s
   */
  errorStyle?: string;

  /**
   * The input hook for the corresponding input.
   */
  input: IUseInput<InputType>;

  /**
   * The static styling for the message that is always applied.
   */
  staticStyle?: string;

  /**
   * The content to display when the input is valid.
   */
  validMessage?: string;

  /**
   * The style class that should be applied when the corresponding input is valid.
   */
  validStyle?: string;
}

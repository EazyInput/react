/**
 * Defines a feedback message for validation purposes.
 */
export const EazyFeedback: React.FC<EazyFeedbackProperties> = ({
  staticStyle,
  validMessage,
}: EazyFeedbackProperties) => {
  const determineStyle = (): string => {
    return staticStyle ?? "";
  };

  const determineMessage = (): string => {
    return validMessage ?? "Input is valid.";
  };

  return <p className={determineStyle()}>{determineMessage()}</p>;
};

interface EazyFeedbackProperties {
  /**
   * The static styling for the message that is always applied.
   */
  staticStyle?: string;

  /**
   * The content to display when the input is valid.
   */
  validMessage?: string;
}

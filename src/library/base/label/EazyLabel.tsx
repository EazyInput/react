/**
 * Defines a label for an input.
 */
export const EazyLabel: React.FC<EazyLabelProperties> = ({
  content,
  id,
  style,
}: EazyLabelProperties) => {
  return (
    <label className={style} htmlFor={id}>
      {content}
    </label>
  );
};

interface EazyLabelProperties {
  /**
   * The text content for the label.
   */
  content: string;

  /**
   * The label identifier for accessibility purposes.
   */
  id: string;

  /**
   * Classes for styling the label.
   */
  style?: string;
}

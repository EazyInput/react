import EazyImageSubmitInputProperties from "../EazyImageSubmitInputProperties";

export default interface EazyImageInputProperties
  extends EazyImageSubmitInputProperties {
  /**
   * Denotes an alternate text for image inputs.
   */
  alt?: string;

  /**
   * Specifies the height of an image input.
   */
  height?: string;

  /**
   * The source URL for an image input.
   */
  src?: string;

  /**
   * Specifies the width of an image input.
   */
  width?: string;
}

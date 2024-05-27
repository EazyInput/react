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
}

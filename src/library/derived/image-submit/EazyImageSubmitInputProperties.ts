export default interface EazyImageSubmitInputProperties {
  /**
   * The URL of the file to process the input when the form is submitted.
   */
  formAction?: string;

  /**
   * How the form data should be encoded when submitting.
   */
  formEncType?: string;

  /**
   * What HTTP method should be used when submitting the form data.
   */
  formMethod?: "get" | "post";

  /**
   * What display to use when receiving a response from the server.
   */
  formTarget?: string;
}

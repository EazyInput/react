import { HTMLInputAutoCompleteAttribute } from "react";
import {
  EazyCheckedRadioInputProperties,
  EazyFileInputProperties,
  EazyImageInputProperties,
} from "../../derived";
import IUseInput from "../../interfaces/IUseInput";
import { InputType } from "../../interfaces/InputType";

/**
 * Defines a base component for all text based inputs.
 */
export const EazyInput: React.FC<EazyInputProperties> = ({
  accept,
  alt,
  autocomplete = "on",
  checked,
  dirnameEnabled,
  disabled,
  errorStyle,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,
  height,
  id,
  input,
  list,
  max,
  maxlength,
  name,
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

  const calculateMax = (): string | number | undefined => {
    if (max instanceof Date) {
      return max.toISOString().substring(0, 10);
    } else if (typeof max === "number") {
      return max;
    }
    return undefined;
  };

  return (
    <input
      accept={accept}
      alt={alt}
      aria-labelledby={id}
      autoComplete={autocomplete}
      checked={checked}
      className={determineStyle()}
      dir={dirnameEnabled && name ? `${name}.dir` : undefined}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      height={height}
      id={id}
      list={list}
      max={calculateMax()}
      maxLength={maxlength}
      name={name}
      onChange={input.handleChange}
      onFocus={input.handleFocus}
      onInput={input.handleInput}
      placeholder={placeholder}
      required={required}
      title={title}
      value={input.value}
    />
  );
};

interface EazyInputProperties
  extends EazyFileInputProperties,
    EazyImageInputProperties,
    EazyCheckedRadioInputProperties {
  /**
   * Specifies if the input should support autocomplete. Enabled by default.
   */
  autocomplete?: HTMLInputAutoCompleteAttribute;

  /**
   * A value indicating whether the text direction should be submitted. Requires a name for the input.
   */
  dirnameEnabled?: boolean;

  /**
   * A value indicating whether the input should be disabled.
   */
  disabled?: boolean;

  /**
   * The styling for the input when it is in the inValid state.
   */
  errorStyle?: string;

  /**
   * Specifies what form the input belongs to.
   */
  form?: string;

  /**
   * A value indicating whether the input element should be validated or not.
   */
  formNoValidate?: boolean;

  /**
   * The input identifier for accessibility purposes.
   */
  id: string;

  /**
   * The input hook for pushing data in and out of the input.
   */
  input: IUseInput<InputType>;

  /**
   * Refers to a datalist element for constrained input options.
   */
  list?: string;

  /**
   * Specifies the maximum value for an input in via a number or date type.
   */
  max?: number | Date;

  /**
   * Defines the limit of the character count.
   */
  maxlength?: number;

  /**
   * Denotes the name of the input.
   */
  name?: string;

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

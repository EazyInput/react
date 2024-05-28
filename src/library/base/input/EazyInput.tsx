import { HTMLInputAutoCompleteAttribute } from "react";
import {
  EazyButtonInputProperties,
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
  min,
  minlength,
  multiple,
  pattern,
  name,
  placeholder,
  readonly,
  required,
  size,
  src,
  step,
  staticStyle,
  title,
  type,
  validStyle,
  width,
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

  const calculateMin = (): string | number | undefined => {
    if (min instanceof Date) {
      return min.toISOString().substring(0, 10);
    } else if (typeof min === "number") {
      return min;
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
      min={calculateMin()}
      minLength={minlength}
      multiple={multiple}
      name={name}
      onChange={input.handleChange}
      onFocus={input.handleFocus}
      onInput={input.handleInput}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      size={size}
      src={src}
      step={step}
      title={title}
      type={type}
      value={input.value}
      width={width}
    />
  );
};

interface EazyInputProperties
  extends EazyFileInputProperties,
    EazyImageInputProperties,
    EazyCheckedRadioInputProperties,
    EazyButtonInputProperties {
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
   * Specifies the maximum value for an input via a number or date type.
   */
  max?: number | Date;

  /**
   * Defines the limit of the character count.
   */
  maxlength?: number;

  /**
   * Specifies the minimum value for an input via a number or date type.
   */
  min?: number | Date;

  /**
   * Defines the floor of the character count.
   */
  minlength?: number;

  /**
   * Denotes if an input can have multiple values.
   */
  multiple?: boolean;

  /**
   * Denotes the name of the input.
   */
  name?: string;

  /**
   * Specifies a regular expression for the input.
   */
  pattern?: string;

  /**
   * A placeholder for the input value until one is specified.
   */
  placeholder: string;

  /**
   * Specifies if an input may not be modified.
   */
  readonly?: boolean;

  /**
   * A value indicating whether the field is required.
   */
  required?: boolean;

  /**
   * The width of an input element for the characters.
   */
  size?: number;

  /**
   * The default styling for the input. Is always applied no matter the input state.
   */
  staticStyle?: string;

  /**
   * The interview between numbers.
   */
  step?: number;

  /**
   * A helpful tooltip for the user when the mouse hovers over the input.
   */
  title?: string;

  /**
   * The input type to display. Default is text.
   */
  type: string;

  /**
   * The styling for the input when it is in the valid state.
   */
  validStyle?: string;
}

import { render, screen } from "@testing-library/react";
import { EazyFeedback } from "./EazyFeedback";
import { defaultTextInput } from "../../utilities/DefaultInputs";

describe("eazyFeedback", () => {
  it("not dirty, no static style, is correct", () => {
    render(<EazyFeedback input={defaultTextInput} />);

    expect(screen.getByText("placeholder")).toHaveClass("eazy-not-visible");
  });

  it("not dirty, static style is correct", () => {
    const style = "my-style";

    render(<EazyFeedback input={defaultTextInput} staticStyle={style} />);

    expect(screen.getByText(/placeholder/i)).toHaveClass(style);
  });

  it("dirty and valid, no styling, is correct", () => {
    const input = defaultTextInput;
    input.dirty = true;
    input.valid = true;

    render(<EazyFeedback input={input} />);

    expect(screen.getByText(/input is valid/i)).not.toHaveClass();
  });

  it("dirty and valid, with styling, is correct", () => {
    const input = defaultTextInput;
    input.dirty = true;
    input.valid = true;

    const staticStyle = "static-style";
    const validStyle = "valid-style";

    render(
      <EazyFeedback
        input={input}
        staticStyle={staticStyle}
        validStyle={validStyle}
      />,
    );

    const element = screen.getByText(/input is valid/i);

    expect(element).toHaveClass(staticStyle);
    expect(element).toHaveClass(validStyle);
  });

  it("dirty and in-valid, no styling, is correct", () => {
    const input = defaultTextInput;
    input.dirty = true;
    input.valid = false;
    input.error = "invalid";

    render(<EazyFeedback input={input} />);

    expect(screen.getByText(input.error)).not.toHaveClass();
  });

  it("dirty and inValid, with styling, is correct", () => {
    const input = defaultTextInput;
    input.error = "invalid";
    input.dirty = true;
    input.valid = false;

    const staticStyle = "static-style";
    const errorStyle = "error-style";

    render(
      <EazyFeedback
        input={input}
        staticStyle={staticStyle}
        errorStyle={errorStyle}
      />,
    );

    const element = screen.getByText(input.error);

    expect(element).toHaveClass(staticStyle, errorStyle);
  });
});

import { render, screen } from "@testing-library/react";
import { EazyFeedback } from "./EazyFeedback";
import IUseInput from "../../interfaces/IUseInput";

describe("eazyFeedback", () => {
  it("not dirty, no static style, is correct", () => {
    const input: IUseInput<string> = {
      dirty: false,
      value: "",
      valid: false,
      updateValue: () => {
        return;
      },
    };

    render(<EazyFeedback input={input} />);

    expect(screen.getByText("placeholder")).not.toHaveClass();
  });

  it("not dirty, static style is correct", () => {
    const input: IUseInput<string> = {
      dirty: false,
      value: "",
      valid: false,
      updateValue: () => {
        return;
      },
    };

    const style = "my-style";

    render(<EazyFeedback input={input} staticStyle={style} />);

    expect(screen.getByText(/placeholder/i)).toHaveClass(style);
  });

  it("dirty and valid, no styling, is correct", () => {
    const input: IUseInput<string> = {
      dirty: true,
      value: "",
      valid: true,
      updateValue: () => {
        return;
      },
    };

    render(<EazyFeedback input={input} />);

    expect(screen.getByText(/input is valid/i)).not.toHaveClass();
  });

  it("dirty and valid, with styling, is correct", () => {
    const input: IUseInput<string> = {
      dirty: true,
      value: "",
      valid: true,
      updateValue: () => {
        return;
      },
    };

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
    const input: IUseInput<string> = {
      dirty: true,
      value: "",
      valid: false,
      updateValue: () => {
        return;
      },
    };

    render(<EazyFeedback input={input} />);

    expect(screen.getByText(/input is valid/i)).not.toHaveClass();
  });

  it("dirty and in-valid, with styling, is correct", () => {
    const input: IUseInput<string> = {
      dirty: true,
      value: "",
      valid: false,
      updateValue: () => {
        return;
      },
    };

    const staticStyle = "static-style";
    const errorStyle = "error-style";

    render(
      <EazyFeedback
        input={input}
        staticStyle={staticStyle}
        errorStyle={errorStyle}
      />,
    );

    const element = screen.getByText(/input is valid/i);

    expect(element).toHaveClass(staticStyle);
    expect(element).toHaveClass(errorStyle);
  });
});

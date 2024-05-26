import { defaultTextInput } from "../../utilities/DefaultInputs";
import { EazyInput } from "./EazyInput";
import { render, screen } from "@testing-library/react";

describe("baseInput", () => {
  it("has correct default values", () => {
    const id = "123";
    const placeholder = "placeholder";

    render(
      <EazyInput input={defaultTextInput} id={id} placeholder={placeholder} />,
    );

    const element = screen.getByRole("textbox");

    expect(element).toHaveValue("");
    expect(element).toHaveAttribute("id", id);
    expect(element).not.toBeRequired();
    expect(element).toHaveAttribute("aria-labelledby", id);
    expect(element).not.toHaveClass();
  });

  it("has correct placeholder", () => {
    const id = "123";
    const placeholder = "placeholder";

    render(
      <EazyInput input={defaultTextInput} id={id} placeholder={placeholder} />,
    );

    const element = screen.getByPlaceholderText(placeholder);

    expect(element).toBeInTheDocument();
  });

  it("has correct title", () => {
    const title = "title";

    render(
      <EazyInput
        input={defaultTextInput}
        id="123"
        placeholder="placeholder"
        title={title}
      />,
    );

    const element = screen.getByTitle(title);

    expect(element).toBeInTheDocument();
  });

  it("passes styling correct", () => {
    const placeholder = "placeholder";
    const style = "my-style";

    render(
      <EazyInput
        input={defaultTextInput}
        id="123"
        placeholder={placeholder}
        staticStyle={style}
      />,
    );

    const element = screen.getByPlaceholderText(placeholder);

    expect(element).toHaveClass(style);
  });
});

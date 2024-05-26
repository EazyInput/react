import IUseInput from "../../interfaces/IUseInput";
import { EazyInput } from "./EazyInput";
import { render, screen } from "@testing-library/react";

describe("baseInput", () => {
  it("has correct default values", () => {
    const input: IUseInput<string> = {
      value: "123",
      valid: true,
      updateValue: vi.fn(),
      dirty: true,
      error: "",
    };

    const id = "123";
    const placeholder = "placeholder";

    render(<EazyInput input={input} id={id} placeholder={placeholder} />);

    const element = screen.getByRole("textbox");

    expect(element).toHaveValue(input.value);
    expect(element).toHaveAttribute("id", id);
    expect(element).not.toBeRequired();
    expect(element).toHaveAttribute("aria-labelledby", id);
  });

  it("has correct placeholder", () => {
    const input: IUseInput<string> = {
      value: "",
      valid: true,
      updateValue: vi.fn(),
      dirty: true,
      error: "",
    };

    const id = "123";
    const placeholder = "placeholder";

    render(<EazyInput input={input} id={id} placeholder={placeholder} />);

    const element = screen.getByPlaceholderText(placeholder);

    expect(element).toBeInTheDocument();
  });
});

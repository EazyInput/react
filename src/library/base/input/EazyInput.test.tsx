import IUseInput from "../../interfaces/IUseInput";
import { EazyInput } from "./EazyInput";
import { render, screen } from "@testing-library/react";

describe("baseInput", () => {
  it("has correct default values", () => {
    const input: IUseInput<string> = {
      value: "123",
      valid: true,
      updateValue: vi.fn(),
    };

    const id = "123";

    render(<EazyInput input={input} id={id} />);

    const element = screen.getByRole("textbox");

    expect(element).toHaveValue(input.value);
    expect(element).toHaveAttribute("id", id);
    expect(element).not.toBeRequired();
    expect(element).toHaveAttribute("aria-labelledby", id);
  });
});

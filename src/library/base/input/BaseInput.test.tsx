import IUseInput from "../../interfaces/IUseInput";
import { BaseInput } from "./BaseInput";
import { render, screen } from "@testing-library/react";

describe("baseInput", () => {
  it("has correct default values", () => {
    const input: IUseInput<string> = {
      value: "123",
      valid: true,
      updateValue: vi.fn(),
    };

    const id = "123";

    render(<BaseInput input={input} id={id} />);

    expect(screen.getByRole("textbox")).toHaveValue(input.value);
    expect(screen.getByRole("textbox")).toHaveAttribute("id", id);
  });
});

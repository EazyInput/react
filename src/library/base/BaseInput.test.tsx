import IUseInput from "../interfaces/IUseInput";
import { BaseInput } from "./BaseInput";
import { render, screen } from "@testing-library/react";

describe("baseInput", () => {
  it("has correct default value", () => {
    const input: IUseInput<string> = {
      value: "123",
      valid: true,
    };

    render(<BaseInput input={input} id="123" />);

    expect(screen.getByRole("textbox")).toHaveValue(input.value);
  });

  it("has correct default id", () => {
    const input: IUseInput<string> = {
      value: "123",
      valid: true,
    };

    const id = "455";

    render(<BaseInput input={input} id={id} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("id", id);
  });
});

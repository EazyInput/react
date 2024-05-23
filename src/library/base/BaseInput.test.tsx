import IUseInput from "../interfaces/IUseInput";
import { BaseInput } from "./BaseInput";
import { render, screen } from "@testing-library/react";

describe("baseInput", () => {
  it("has correct default value", () => {
    const input: IUseInput<string> = {
      value: "123",
      valid: true,
    };

    render(<BaseInput input={input} />);

    expect(screen.getByRole("textbox")).toHaveValue(input.value);
  });
});

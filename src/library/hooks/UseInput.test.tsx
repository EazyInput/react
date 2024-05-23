import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import useInput from "./UseInput";
import { UseInputHarness } from "../../utilities/UseInputTestHarness";

describe("useInput", () => {
  it("has correct default value", () => {
    const value = "123";

    const { result } = renderHook(() => useInput(value, (x) => x));

    expect(result.current.value).toEqual(value);
  });

  it("has correct default valid", () => {
    const { result } = renderHook(() => useInput("123", (x) => x));

    expect(result.current.valid).toBeFalse();
  });

  it("should convert event correctly", async () => {
    const user = userEvent.setup();

    render(<UseInputHarness />);

    await user.click(await screen.findByLabelText("label"));

    const toType = "123";

    await user.keyboard(toType);

    const element = await screen.findByLabelText("label");

    expect(element).toHaveValue(toType);
  });
});

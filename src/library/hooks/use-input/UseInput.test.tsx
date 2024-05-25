import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import useInput from "./UseInput";
import { UseInputFixture } from "./UseInput.fixture";

describe("useInput", () => {
  it("has correct default values", () => {
    const value = "123";

    const { result } = renderHook(() => useInput(value, (x) => x));

    expect(result.current.value).toStrictEqual(value);
    expect(result.current.valid).toBeFalse();
    expect(result.current.error).toBe("");
    expect(result.current.dirty).toBeFalse();
  });

  it("should convert event value correctly", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(<UseInputFixture />);

    await user.click(await screen.findByLabelText("label"));

    const toType = "123";

    await user.keyboard(toType);

    const element = await screen.findByLabelText("label");

    expect(element).toHaveValue(toType);
  });

  it("should convert event validity correctly", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(<UseInputFixture required />);

    await user.click(await screen.findByLabelText("label"));

    await user.keyboard("123");

    const element = await screen.findByLabelText("label");

    expect(element).toBeValid();
  });

  it("should set dirty on change", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(<UseInputFixture />);

    await user.click(await screen.findByLabelText("label"));

    await user.keyboard("123");

    const element = await screen.findByText(/is dirty yes/i);

    expect(element).toBeInTheDocument();
  });

  it("should set error on change", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(<UseInputFixture required />);

    await user.click(await screen.findByLabelText("label"));

    await user.keyboard("1");

    await user.keyboard("[Backspace]");

    const element = await screen.findByText(/is error yes/i);

    expect(element).toBeInTheDocument();
  });
});

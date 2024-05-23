import { renderHook } from "@testing-library/react";
import useInput from "./UseInput";

describe("useInput", () => {
  it("has correct default value", () => {
    const value = "123";

    const { result } = renderHook(() => useInput(value));

    expect(value).toEqual(result.current.value);
  });

  it("has correct default valid", () => {
    const { result } = renderHook(() => useInput("123"));

    expect(result.current.valid).toBeFalse();
  });
});

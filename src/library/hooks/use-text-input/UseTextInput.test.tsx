import { renderHook } from "@testing-library/react";
import useTextInput from "./UseTextInput";

describe("useTextInput", () => {
  it("has correct defaults", () => {
    const { result } = renderHook(() => useTextInput());

    expect(result.current.value).toEqual("");
  });
});

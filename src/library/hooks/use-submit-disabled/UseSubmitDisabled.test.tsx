import { renderHook } from "@testing-library/react";
import useSubmitDisabled from "./UseSubmitDisabled";
import IValid from "../../interfaces/IValid";

describe("useSubmitDisabled", () => {
  it("returns true correctly", () => {
    const first: IValid = {
      valid: true,
    };

    const second: IValid = {
      valid: false,
    };

    const { result } = renderHook(() => useSubmitDisabled([first, second]));

    expect(result.current).toBeTrue();
  });

  it("returns false correctly", () => {
    const first: IValid = {
      valid: true,
    };

    const second: IValid = {
      valid: true,
    };

    const { result } = renderHook(() => useSubmitDisabled([first, second]));

    expect(result.current).toBeFalse();
  });
});

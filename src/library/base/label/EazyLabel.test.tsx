import { render, screen } from "@testing-library/react";
import { EazyLabel } from "./EazyLabel";

describe("eazy label", () => {
  it("has correct properties", () => {
    const text = "label";
    const id = "123";
    const style = "my-label";

    render(<EazyLabel content={text} id={id} style={style} />);

    const element = screen.getByText(text);

    expect(element).toHaveClass(style);
    expect(element).toHaveAttribute("for", id);
  });
});

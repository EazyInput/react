import { render, screen } from "@testing-library/react";
import { EazyFeedback } from "./EazyFeedback";

describe("eazyFeedback", () => {
  it("has correct default properties", () => {
    render(<EazyFeedback />);

    const element = screen.getByText("Input is valid.");

    expect(element).toBeInTheDocument();
    expect(element).not.toHaveClass();
  });

  it("passes properties correctly", () => {
    const style = "my-class";
    const message = "valid.";

    render(<EazyFeedback staticStyle={style} validMessage={message} />);

    const element = screen.getByText(message);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(style);
  });
});

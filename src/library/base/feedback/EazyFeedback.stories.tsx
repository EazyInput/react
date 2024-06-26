import { Meta, StoryObj } from "@storybook/react";
import { EazyFeedback } from "./EazyFeedback";

const meta: Meta<typeof EazyFeedback> = {
  component: EazyFeedback,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    input: {
      valid: true,
      dirty: true,
      error: "",
      value: "",
      handleChange: () => {
        return;
      },
      handleFocus: () => {
        return;
      },
      handleInput: () => {
        return;
      },
    },
  },
};

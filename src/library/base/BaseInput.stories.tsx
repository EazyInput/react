import { BaseInput } from "./BaseInput";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    input: {
      value: "123",
      valid: true,
    },
  },
};

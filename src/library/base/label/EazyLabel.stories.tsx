import { Meta, StoryObj } from "@storybook/react";
import { EazyLabel } from "./EazyLabel";

const meta: Meta<typeof EazyLabel> = {
  component: EazyLabel,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    id: "123",
    content: "My Label",
  },
};

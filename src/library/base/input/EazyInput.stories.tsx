import { EazyInput } from "./EazyInput";
import { Meta, StoryObj } from "@storybook/react";
import { EazyInputFixture } from "./EazyInput.fixture";

const meta: Meta<typeof EazyInput> = {
  component: EazyInput,
  render: () => <EazyInputFixture />,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};

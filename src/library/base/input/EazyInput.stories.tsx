import { EazyInput } from "./EazyInput";
import { Meta, StoryObj } from "@storybook/react";
import { EazyInputFixture } from "./EazyInput.fixture";

const meta: Meta<typeof EazyInput> = {
  component: EazyInput,
  render: (args) => (
    <EazyInputFixture title={args.title} placeholder={args.placeholder} />
  ),
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    title: "Input Title",
    placeholder: "Input Placeholder",
  },
};

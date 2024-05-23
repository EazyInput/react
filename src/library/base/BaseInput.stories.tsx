import { InputTestHarness } from "../../utilities/InputTestHarness";
import IUseInput from "../interfaces/IUseInput";
import { BaseInput } from "./BaseInput";
import { Meta, StoryObj } from "@storybook/react";

const input: IUseInput<string> = {
  value: "123",
  valid: true,
};

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  render: () => (
    <InputTestHarness id="123">
      <BaseInput id="123" input={input} />
    </InputTestHarness>
  ),
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};

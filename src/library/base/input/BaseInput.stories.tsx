import { BaseInputHarness } from "../../../utilities/InputTestHarness";
import IUseInput from "../../interfaces/IUseInput";
import { BaseInput } from "./BaseInput";
import { Meta, StoryObj } from "@storybook/react";

const input: IUseInput<string> = {
  value: "123",
  valid: true,
  updateValue: () => {
    return;
  },
};

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  render: () => (
    <BaseInputHarness id="123">
      <BaseInput id="123" input={input} />
    </BaseInputHarness>
  ),
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};

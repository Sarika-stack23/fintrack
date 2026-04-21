import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "../components/ui/Toggle";
const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Toggle>;
export const Off: Story = { args: { label: "Enable Notifications", defaultOn: false }};
export const On: Story = { args: { label: "Budget Alerts", defaultOn: true }};

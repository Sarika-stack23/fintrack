import type { Meta, StoryObj } from "@storybook/react";
import BudgetCard from "../components/cards/BudgetCard";
const meta: Meta<typeof BudgetCard> = {
  title: "Cards/BudgetCard",
  component: BudgetCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof BudgetCard>;
export const Safe: Story = { args: { category: "Food", limit: 5000, spent: 2000 }};
export const Warning: Story = { args: { category: "Entertainment", limit: 2000, spent: 1600 }};
export const Danger: Story = { args: { category: "Utilities", limit: 3000, spent: 2900 }};

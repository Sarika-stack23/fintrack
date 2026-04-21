import type { Meta, StoryObj } from "@storybook/react";
import StatCard from "../components/cards/StatCard";
const meta: Meta<typeof StatCard> = {
  title: "Cards/StatCard",
  component: StatCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StatCard>;
export const Balance: Story = { args: { label: "Total Balance", value: "₹45,000", change: "+8%", type: "balance" }};
export const Income: Story = { args: { label: "Monthly Income", value: "₹30,000", change: "+5%", type: "income" }};
export const Expense: Story = { args: { label: "Monthly Expense", value: "₹12,000", change: "-3%", type: "expense" }};
export const Savings: Story = { args: { label: "Total Savings", value: "₹18,000", change: "+12%", type: "savings" }};

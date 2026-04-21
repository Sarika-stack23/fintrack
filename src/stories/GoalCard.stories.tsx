import type { Meta, StoryObj } from "@storybook/react";
import GoalCard from "../components/cards/GoalCard";
const meta: Meta<typeof GoalCard> = {
  title: "Cards/GoalCard",
  component: GoalCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GoalCard>;
export const Phone: Story = { args: { id: 1, name: "New Phone", target: 25000, saved: 15000, onAddMoney: () => {} }};
export const Trip: Story = { args: { id: 2, name: "Goa Trip", target: 20000, saved: 8000, onAddMoney: () => {} }};
export const Laptop: Story = { args: { id: 3, name: "Laptop", target: 60000, saved: 22000, onAddMoney: () => {} }};

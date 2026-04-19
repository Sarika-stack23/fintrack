import { motion } from "framer-motion";
import BudgetCard from "../components/cards/BudgetCard";
import { budgets } from "../data/mockData";

export default function Budget() {
  const totalLimit = budgets.reduce((a, b) => a + b.limit, 0);
  const totalSpent = budgets.reduce((a, b) => a + b.spent, 0);
  const totalRemaining = totalLimit - totalSpent;
  const overallPercent = Math.round((totalSpent / totalLimit) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h1 className="text-xl font-bold text-dark">Budget Tracker</h1>
        <p className="text-sm text-gray-400">Monitor your monthly spending limits</p>
      </div>
      <div className="bg-dark text-white rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Total Budget</p>
            <p className="text-3xl font-bold">₹{totalLimit.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Remaining</p>
            <p className="text-3xl font-bold text-success">₹{totalRemaining.toLocaleString()}</p>
          </div>
        </div>
        <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallPercent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-primary"
          />
        </div>
        <p className="text-xs text-gray-400">{overallPercent}% of total budget used · ₹{totalSpent.toLocaleString()} spent</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {budgets.map((b) => (
          <BudgetCard key={b.category} {...b} />
        ))}
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

interface BudgetCardProps {
  category: string;
  limit: number;
  spent: number;
}

export default function BudgetCard({ category, limit, spent }: BudgetCardProps) {
  const percentage = Math.round((spent / limit) * 100);
  const remaining = limit - spent;
  const isWarning = percentage >= 70 && percentage < 90;
  const isDanger = percentage >= 90;
  const barColor = isDanger ? "bg-danger" : isWarning ? "bg-warning" : "bg-primary";
  const categoryIcons: Record<string, string> = {
    Food: "🍔", Entertainment: "🎬", Utilities: "💡", Transport: "🚗",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">
            {categoryIcons[category] || "📦"}
          </div>
          <div>
            <p className="text-sm font-semibold text-dark">{category}</p>
            <p className="text-xs text-gray-400">₹{spent.toLocaleString()} of ₹{limit.toLocaleString()}</p>
          </div>
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full
          ${isDanger ? "bg-danger/10 text-danger" : isWarning ? "bg-warning/10 text-warning" : "bg-success/10 text-success"}`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>
      <p className={`text-xs font-medium
        ${isDanger ? "text-danger" : isWarning ? "text-warning" : "text-success"}`}>
        {isDanger ? "⚠️ Budget exceeded!" : isWarning ? `⚠️ Only ₹${remaining.toLocaleString()} left` : `✅ ₹${remaining.toLocaleString()} remaining`}
      </p>
    </motion.div>
  );
}

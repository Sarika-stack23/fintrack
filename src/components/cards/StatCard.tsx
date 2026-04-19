import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  type: string;
}

const typeStyles: Record<string, string> = {
  balance: "bg-primary/10 text-primary",
  income: "bg-success/10 text-success",
  expense: "bg-danger/10 text-danger",
  savings: "bg-warning/10 text-warning",
};

const typeIcons: Record<string, string> = {
  balance: "💰",
  income: "📈",
  expense: "📉",
  savings: "🏦",
};

export default function StatCard({ label, value, change, type }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${typeStyles[type]}`}>
        {typeIcons[type]}
      </div>
      <div>
        <p className="text-2xl font-bold text-dark">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
      </div>
      <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${typeStyles[type]}`}>
        {change} this month
      </span>
    </motion.div>
  );
}

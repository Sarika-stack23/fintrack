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

const changeBg: Record<string, string> = {
  balance: "bg-primary/10 text-primary",
  income: "bg-success/10 text-success",
  expense: "bg-danger/10 text-danger",
  savings: "bg-warning/10 text-warning",
};

export default function StatCard({ label, value, change, type }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3 cursor-default"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${typeStyles[type]}`}>
          {typeIcons[type]}
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${changeBg[type]}`}>
          {change}
        </span>
      </div>

      {/* Value */}
      <div>
        <p className="text-2xl font-bold text-dark">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${typeStyles[type].split(" ")[0].replace("/10", "")}`}
        />
      </div>
    </motion.div>
  );
}

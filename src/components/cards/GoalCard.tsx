import { motion } from "framer-motion";

interface GoalCardProps {
  name: string;
  target: number;
  saved: number;
}

const goalIcons: Record<string, string> = {
  "New Phone": "📱", "Goa Trip": "✈️", "Laptop": "💻",
};

export default function GoalCard({ name, target, saved }: GoalCardProps) {
  const percentage = Math.round((saved / target) * 100);
  const remaining = target - saved;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl">
            {goalIcons[name] || "🎯"}
          </div>
          <div>
            <p className="text-sm font-semibold text-dark">{name}</p>
            <p className="text-xs text-gray-400">₹{saved.toLocaleString()} saved</p>
          </div>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">Target: ₹{target.toLocaleString()}</p>
        <p className="text-xs font-medium text-success">₹{remaining.toLocaleString()} to go</p>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="w-full py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-indigo-600 transition"
      >
        + Add Money
      </motion.button>
    </motion.div>
  );
}

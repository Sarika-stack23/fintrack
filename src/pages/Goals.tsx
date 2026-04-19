import { motion } from "framer-motion";
import GoalCard from "../components/cards/GoalCard";
import { goals } from "../data/mockData";

export default function Goals() {
  const totalTarget = goals.reduce((a, b) => a + b.target, 0);
  const totalSaved = goals.reduce((a, b) => a + b.saved, 0);
  const overallPercent = Math.round((totalSaved / totalTarget) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-dark">My Goals</h1>
          <p className="text-sm text-gray-400">Track your savings goals</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition"
        >
          + New Goal
        </motion.button>
      </div>
      <div className="bg-dark text-white rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Total Target</p>
            <p className="text-3xl font-bold">₹{totalTarget.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Total Saved</p>
            <p className="text-3xl font-bold text-success">₹{totalSaved.toLocaleString()}</p>
          </div>
        </div>
        <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallPercent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-success"
          />
        </div>
        <p className="text-xs text-gray-400">{overallPercent}% of total goals achieved</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <GoalCard key={goal.id} {...goal} />
        ))}
      </div>
    </motion.div>
  );
}

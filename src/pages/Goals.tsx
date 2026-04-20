import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoalCard from "../components/cards/GoalCard";
import { goals as initialGoals } from "../data/mockData";

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newTarget, setNewTarget] = useState("");

  const totalTarget = goals.reduce((a, b) => a + b.target, 0);
  const totalSaved = goals.reduce((a, b) => a + b.saved, 0);
  const overallPercent = Math.round((totalSaved / totalTarget) * 100);

  const handleAddGoal = () => {
    if (!newName || !newTarget) return;
    setGoals([...goals, {
      id: goals.length + 1,
      name: newName,
      target: Number(newTarget),
      saved: 0,
    }]);
    setNewName("");
    setNewTarget("");
    setShowForm(false);
  };

  const handleAddMoney = (id: number, amount: number) => {
    setGoals(goals.map((g) =>
      g.id === id ? { ...g, saved: Math.min(g.saved + amount, g.target) } : g
    ));
  };

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
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition"
        >
          {showForm ? "✕ Cancel" : "+ New Goal"}
        </motion.button>
      </div>

      {/* Add Goal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4"
          >
            <h2 className="text-base font-semibold text-dark">New Goal</h2>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-400">Goal Name</label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. New Bike"
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-400">Target Amount (₹)</label>
              <input
                value={newTarget}
                onChange={(e) => setNewTarget(e.target.value)}
                placeholder="e.g. 50000"
                type="number"
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddGoal}
              className="w-full py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-indigo-600 transition"
            >
              Create Goal
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Card */}
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

      {/* Goal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <GoalCard key={goal.id} {...goal} onAddMoney={handleAddMoney} />
        ))}
      </div>
    </motion.div>
  );
}

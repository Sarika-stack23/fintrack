import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { transactions as initial } from "../data/mockData";

export default function Transactions() {
  const [transactions, setTransactions] = useState(initial);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Food");
  const [newAmount, setNewAmount] = useState("");
  const [newType, setNewType] = useState("expense");

  const categories = ["All", "Food", "Income", "Entertainment", "Utilities"];

  const filtered = transactions.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || t.category === filter;
    return matchSearch && matchFilter;
  });

  const handleAdd = () => {
    if (!newName || !newAmount) return;
    const amount = newType === "expense" ? -Number(newAmount) : Number(newAmount);
    setTransactions([{
      id: transactions.length + 1,
      name: newName,
      category: newCategory,
      amount,
      date: new Date().toISOString().split("T")[0],
    }, ...transactions]);
    setNewName("");
    setNewAmount("");
    setShowForm(false);
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
          <h1 className="text-xl font-bold text-dark">Transactions</h1>
          <p className="text-sm text-gray-400">All your income and expenses</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition"
        >
          {showForm ? "✕ Cancel" : "+ Add"}
        </motion.button>
      </div>

      {/* Add Transaction Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4"
          >
            <h2 className="text-base font-semibold text-dark">New Transaction</h2>

            {/* Type Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setNewType("expense")}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold transition
                  ${newType === "expense" ? "bg-danger text-white" : "bg-gray-100 text-gray-500"}`}
              >
                💸 Expense
              </button>
              <button
                onClick={() => setNewType("income")}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold transition
                  ${newType === "income" ? "bg-success text-white" : "bg-gray-100 text-gray-500"}`}
              >
                📈 Income
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-400">Name</label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Grocery"
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs font-medium text-gray-400">Amount (₹)</label>
                <input
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  placeholder="e.g. 500"
                  type="number"
                  className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs font-medium text-gray-400">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Food</option>
                  <option>Income</option>
                  <option>Entertainment</option>
                  <option>Utilities</option>
                  <option>Transport</option>
                </select>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAdd}
              className="w-full py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-indigo-600 transition"
            >
              Add Transaction
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                ${filter === cat
                  ? "bg-primary text-white"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-4 px-6 py-3 bg-light text-xs font-semibold text-gray-400 uppercase tracking-wide">
          <span>Name</span>
          <span>Category</span>
          <span>Date</span>
          <span className="text-right">Amount</span>
        </div>
        <div className="divide-y divide-gray-50">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-10">No transactions found</p>
          ) : (
            filtered.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-4 px-6 py-4 items-center hover:bg-light transition"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm
                    ${t.amount > 0 ? "bg-success/10" : "bg-danger/10"}`}>
                    {t.amount > 0 ? "📈" : "💸"}
                  </div>
                  <span className="text-sm font-medium text-dark">{t.name}</span>
                </div>
                <span className="text-sm text-gray-400">{t.category}</span>
                <span className="text-sm text-gray-400">{t.date}</span>
                <span className={`text-sm font-semibold text-right
                  ${t.amount > 0 ? "text-success" : "text-danger"}`}>
                  {t.amount > 0 ? "+" : ""}₹{Math.abs(t.amount).toLocaleString()}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}

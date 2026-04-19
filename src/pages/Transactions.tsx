import { useState } from "react";
import { motion } from "framer-motion";
import { transactions } from "../data/mockData";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Food", "Income", "Entertainment", "Utilities"];

  const filtered = transactions.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || t.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h1 className="text-xl font-bold text-dark">Transactions</h1>
        <p className="text-sm text-gray-400">All your income and expenses</p>
      </div>
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

import { useState } from "react";
import { motion } from "framer-motion";
import { transactions, budgets, goals } from "../data/mockData";
import { Download, FileText, TrendingUp, TrendingDown } from "lucide-react";

export default function Reports() {
  const [activeReport, setActiveReport] = useState("monthly");

  const totalIncome = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((a, b) => a + Math.abs(b.amount), 0);
  const netSavings = totalIncome - totalExpense;
  const savingsRate = Math.round((netSavings / totalIncome) * 100);

  const reports = [
    { id: "monthly", label: "Monthly Report" },
    { id: "budget", label: "Budget Report" },
    { id: "goals", label: "Goals Report" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-dark">Reports</h1>
          <p className="text-sm text-gray-400">Download and view financial reports</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition"
        >
          <Download size={16} />
          Export PDF
        </motion.button>
      </div>

      {/* Report Tabs */}
      <div className="flex gap-2">
        {reports.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveReport(r.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition
              ${activeReport === r.id
                ? "bg-primary text-white"
                : "bg-white border border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
              }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Monthly Report */}
      {activeReport === "monthly" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          {/* Summary */}
          <div className="bg-dark text-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={20} className="text-primary" />
              <h2 className="text-base font-semibold">April 2026 — Monthly Summary</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Income", value: `+₹${totalIncome.toLocaleString()}`, color: "text-success" },
                { label: "Total Expense", value: `-₹${totalExpense.toLocaleString()}`, color: "text-danger" },
                { label: "Net Savings", value: `₹${netSavings.toLocaleString()}`, color: "text-primary" },
                { label: "Savings Rate", value: `${savingsRate}%`, color: "text-warning" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-3">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Breakdown */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-base font-semibold text-dark mb-4">Transaction Breakdown</h2>
            <div className="flex flex-col gap-3">
              {transactions.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm
                      ${t.amount > 0 ? "bg-success/10" : "bg-danger/10"}`}>
                      {t.amount > 0 ? <TrendingUp size={14} className="text-success" /> : <TrendingDown size={14} className="text-danger" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.category} · {t.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${t.amount > 0 ? "text-success" : "text-danger"}`}>
                    {t.amount > 0 ? "+" : "-"}₹{Math.abs(t.amount).toLocaleString()}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Budget Report */}
      {activeReport === "budget" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-base font-semibold text-dark mb-4">Budget Performance</h2>
            {budgets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0"
              >
                <div className="w-32 text-sm font-medium text-dark">{b.category}</div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.round((b.spent / b.limit) * 100)}%` }}
                    transition={{ duration: 0.8 }}
                    className={`h-full rounded-full ${
                      Math.round((b.spent / b.limit) * 100) >= 90 ? "bg-danger" :
                      Math.round((b.spent / b.limit) * 100) >= 70 ? "bg-warning" : "bg-primary"
                    }`}
                  />
                </div>
                <div className="text-right w-32">
                  <p className="text-xs font-semibold text-dark">₹{b.spent} / ₹{b.limit}</p>
                  <p className="text-xs text-gray-400">{Math.round((b.spent / b.limit) * 100)}% used</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Goals Report */}
      {activeReport === "goals" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-base font-semibold text-dark mb-4">Goals Progress Report</h2>
            {goals.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0"
              >
                <div className="w-32 text-sm font-medium text-dark">{g.name}</div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.round((g.saved / g.target) * 100)}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-success"
                  />
                </div>
                <div className="text-right w-40">
                  <p className="text-xs font-semibold text-dark">₹{g.saved.toLocaleString()} / ₹{g.target.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">{Math.round((g.saved / g.target) * 100)}% achieved</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

    </motion.div>
  );
}

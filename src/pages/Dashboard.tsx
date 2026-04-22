import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/cards/StatCard";
import LineChart from "../components/charts/LineChart";
import DonutChart from "../components/charts/DonutChart";
import { stats, transactions } from "../data/mockData";
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((a, b) => a + Math.abs(b.amount), 0);
  const savingsRate = Math.round(((totalIncome - totalExpense) / totalIncome) * 100);

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
          <h1 className="text-xl font-bold text-dark">Overview</h1>
          <p className="text-sm text-gray-400">Your financial summary for April 2026</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-xl">
          <TrendingUp size={16} className="text-success" />
          <span className="text-sm font-semibold text-success">Savings Rate: {savingsRate}%</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-success/10 rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
            <TrendingUp size={18} className="text-success" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Income</p>
            <p className="text-base font-bold text-success">+₹{totalIncome.toLocaleString()}</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-danger/10 rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-danger/20 flex items-center justify-center">
            <TrendingDown size={18} className="text-danger" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Expense</p>
            <p className="text-base font-bold text-danger">-₹{totalExpense.toLocaleString()}</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-primary/10 rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">₹</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Net Savings</p>
            <p className="text-base font-bold text-primary">₹{(totalIncome - totalExpense).toLocaleString()}</p>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LineChart />
        <DonutChart />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-dark">Recent Transactions</h2>
            <p className="text-xs text-gray-400">Last 5 transactions</p>
          </div>
          <button
            onClick={() => navigate("/transactions")}
            className="flex items-center gap-1 text-xs text-primary font-semibold hover:underline px-3 py-1.5 rounded-xl hover:bg-primary/10 transition"
          >
            View All <ArrowUpRight size={12} />
          </button>
        </div>
        <div className="flex flex-col">
          {transactions.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:bg-light px-2 rounded-xl transition cursor-pointer"
              onClick={() => navigate("/transactions")}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base
                  ${t.amount > 0 ? "bg-success/10" : "bg-danger/10"}`}>
                  {t.amount > 0 ? "📈" : "💸"}
                </div>
                <div>
                  <p className="text-sm font-medium text-dark">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.category} · {t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${t.amount > 0 ? "text-success" : "text-danger"}`}>
                  {t.amount > 0 ? "+" : "-"}₹{Math.abs(t.amount).toLocaleString()}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium hidden sm:block
                  ${t.amount > 0 ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}>
                  {t.amount > 0 ? "Credit" : "Debit"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

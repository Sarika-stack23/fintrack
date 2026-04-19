import { motion } from "framer-motion";
import StatCard from "../components/cards/StatCard";
import LineChart from "../components/charts/LineChart";
import DonutChart from "../components/charts/DonutChart";
import { stats, transactions } from "../data/mockData";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LineChart />
        <DonutChart />
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-dark mb-4">Recent Transactions</h2>
        <div className="flex flex-col gap-3">
          {transactions.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm ${t.amount > 0 ? "bg-success/10" : "bg-danger/10"}`}>
                  {t.amount > 0 ? "📈" : "💸"}
                </div>
                <div>
                  <p className="text-sm font-medium text-dark">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.category} · {t.date}</p>
                </div>
              </div>
              <span className={`text-sm font-semibold ${t.amount > 0 ? "text-success" : "text-danger"}`}>
                {t.amount > 0 ? "+" : ""}₹{Math.abs(t.amount).toLocaleString()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

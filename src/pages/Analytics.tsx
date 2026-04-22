import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";

const monthlyData = [
  { month: "Nov", income: 28000, expense: 10000, savings: 18000 },
  { month: "Dec", income: 30000, expense: 15000, savings: 15000 },
  { month: "Jan", income: 27000, expense: 11000, savings: 16000 },
  { month: "Feb", income: 32000, expense: 13000, savings: 19000 },
  { month: "Mar", income: 29000, expense: 12000, savings: 17000 },
  { month: "Apr", income: 30000, expense: 12000, savings: 18000 },
];

const radarData = [
  { subject: "Food", A: 64 },
  { subject: "Entertainment", A: 75 },
  { subject: "Utilities", A: 40 },
  { subject: "Transport", A: 40 },
  { subject: "Savings", A: 60 },
  { subject: "Goals", A: 43 },
];

const weeklyData = [
  { day: "Mon", spent: 1200 },
  { day: "Tue", spent: 800 },
  { day: "Wed", spent: 2100 },
  { day: "Thu", spent: 600 },
  { day: "Fri", spent: 1800 },
  { day: "Sat", spent: 3200 },
  { day: "Sun", spent: 900 },
];

const insights = [
  { icon: "📈", title: "Best Saving Month", value: "February", sub: "Saved ₹19,000" },
  { icon: "⚠️", title: "Highest Spending", value: "December", sub: "Spent ₹15,000" },
  { icon: "🎯", title: "Avg Monthly Saving", value: "₹17,167", sub: "Last 6 months" },
  { icon: "💡", title: "Top Expense", value: "Entertainment", sub: "75% of budget used" },
];

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-dark">Analytics</h1>
        <p className="text-sm text-gray-400">Deep dive into your financial patterns</p>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-2"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="text-xs text-gray-400">{item.title}</p>
            <p className="text-lg font-bold text-dark">{item.value}</p>
            <p className="text-xs text-gray-400">{item.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Area Chart */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-dark mb-4">
          Income vs Expense vs Savings — 6 Months
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="savings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="income" stroke="#6366F1" fill="url(#income)" strokeWidth={2} />
            <Area type="monotone" dataKey="expense" stroke="#EF4444" fill="url(#expense)" strokeWidth={2} />
            <Area type="monotone" dataKey="savings" stroke="#22C55E" fill="url(#savings)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bar + Radar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Weekly Spending */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-base font-semibold text-dark mb-4">Weekly Spending Pattern</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="spent" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-base font-semibold text-dark mb-4">Financial Health Radar</h2>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Usage %" dataKey="A" stroke="#6366F1" fill="#6366F1" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Comparison Bar */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-dark mb-4">Monthly Income vs Expense</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#6366F1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="expense" fill="#EF4444" radius={[6, 6, 0, 0]} />
            <Bar dataKey="savings" fill="#22C55E" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  );
}

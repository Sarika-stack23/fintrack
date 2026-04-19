import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { path: "/", label: "Dashboard", icon: "📊" },
  { path: "/transactions", label: "Transactions", icon: "💳" },
  { path: "/budget", label: "Budget", icon: "📈" },
  { path: "/goals", label: "Goals", icon: "🎯" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-64 h-screen bg-dark text-white flex flex-col p-6 gap-8 shadow-xl"
    >
      <div className="text-2xl font-bold text-primary">💰 FinTrack</div>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
              ${isActive
                ? "bg-primary text-white shadow-lg"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
          S
        </div>
        <div>
          <p className="text-sm font-semibold">Sarika</p>
          <p className="text-xs text-gray-400">sarika@email.com</p>
        </div>
      </div>
    </motion.aside>
  );
}

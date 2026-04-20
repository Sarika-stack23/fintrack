import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { path: "/", label: "Dashboard", icon: "▣" },
  { path: "/transactions", label: "Transactions", icon: "⇄" },
  { path: "/budget", label: "Budget", icon: "◎" },
  { path: "/goals", label: "Goals", icon: "◉" },
  { path: "/settings", label: "Settings", icon: "✦" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const name = localStorage.getItem("name") || "Sarika";
  const email = localStorage.getItem("email") || "sarika@email.com";

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-dark text-white flex flex-col shadow-xl overflow-hidden flex-shrink-0"
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-bold text-white whitespace-nowrap tracking-tight"
            >
              💰 FinTrack
            </motion.span>
          )}
        </AnimatePresence>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white text-xs ml-auto flex-shrink-0"
          aria-label="Toggle Sidebar"
        >
          {collapsed ? "▶" : "◀"}
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
              ${isActive
                ? "bg-primary text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <span className="text-base flex-shrink-0 w-5 text-center">{link.icon}</span>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>

      {/* Bottom User */}
      <div className="px-3 py-4 border-t border-white/10">
        <div className={`flex items-center gap-3 px-2 py-2 bg-white/10 rounded-xl
          ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
            {name[0].toUpperCase()}
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-sm font-semibold truncate">{name}</p>
                <p className="text-xs text-gray-400 truncate">{email}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}

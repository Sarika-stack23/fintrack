import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function getDate() {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Navbar() {
  const name = localStorage.getItem("name") || "Sarika";
  const email = localStorage.getItem("email") || "sarika@email.com";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm z-50 relative"
    >
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold text-dark">
          {getGreeting()}, {name} 👋
        </h1>
        <p className="text-xs text-gray-400">{getDate()}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3" ref={dropdownRef}>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="text-sm px-4 py-2 rounded-xl border border-gray-200 bg-light focus:outline-none focus:ring-2 focus:ring-primary w-48 hidden md:block"
        />

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => { setNotifOpen(!notifOpen); setDropdownOpen(false); }}
            className="relative p-2 rounded-xl hover:bg-gray-100 transition"
            aria-label="Notifications"
          >
            🔔
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
          </button>

          <AnimatePresence>
            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50"
              >
                <h3 className="text-sm font-semibold text-dark mb-3">Notifications</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">⚠️</span>
                    <div>
                      <p className="text-xs font-medium text-dark">Entertainment budget at 75%</p>
                      <p className="text-xs text-gray-400">Only ₹501 remaining</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">🎯</span>
                    <div>
                      <p className="text-xs font-medium text-dark">New Phone goal at 60%</p>
                      <p className="text-xs text-gray-400">₹10,000 more to reach target</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">💰</span>
                    <div>
                      <p className="text-xs font-medium text-dark">Salary credited</p>
                      <p className="text-xs text-gray-400">+₹30,000 on Apr 1</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Avatar + Dropdown */}
        <div className="relative">
          <button
            onClick={() => { setDropdownOpen(!dropdownOpen); setNotifOpen(false); }}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm hover:ring-2 hover:ring-primary/30 transition"
          >
            {name[0].toUpperCase()}
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
              >
                {/* User Info */}
                <div className="px-4 py-3 bg-light border-b border-gray-100">
                  <p className="text-sm font-semibold text-dark">{name}</p>
                  <p className="text-xs text-gray-400">{email}</p>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <button
                    onClick={() => { navigate("/settings"); setDropdownOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-dark hover:bg-light transition text-left"
                  >
                    ⚙️ Settings
                  </button>
                  <button
                    onClick={() => { navigate("/"); setDropdownOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-dark hover:bg-light transition text-left"
                  >
                    📊 Dashboard
                  </button>
                  <button
                    onClick={() => { navigate("/transactions"); setDropdownOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-dark hover:bg-light transition text-left"
                  >
                    💳 Transactions
                  </button>
                </div>

                {/* Logout */}
                <div className="p-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-danger hover:bg-danger/10 transition text-left"
                  >
                    🚪 Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.header>
  );
}

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm"
    >
      <div>
        <h1 className="text-lg font-semibold text-dark">Good Morning, Sarika 👋</h1>
        <p className="text-xs text-gray-400">Monday, 20 April 2026</p>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="text-sm px-4 py-2 rounded-xl border border-gray-200 bg-light focus:outline-none focus:ring-2 focus:ring-primary w-48"
        />
        <button className="relative p-2 rounded-xl hover:bg-gray-100 transition" aria-label="Notifications">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
          S
        </div>
      </div>
    </motion.header>
  );
}

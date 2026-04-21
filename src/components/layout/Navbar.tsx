import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Settings, LayoutDashboard, CreditCard, LogOut, X, Menu } from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function getDate() {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

const allPages = [
  { label: "Dashboard", path: "/", desc: "Overview & charts" },
  { label: "Transactions", path: "/transactions", desc: "Income & expenses" },
  { label: "Budget", path: "/budget", desc: "Spending limits" },
  { label: "Goals", path: "/goals", desc: "Savings goals" },
  { label: "Settings", path: "/settings", desc: "Account preferences" },
];

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const name = localStorage.getItem("name") || "Sarika";
  const email = localStorage.getItem("email") || "sarika@email.com";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const searchResults = allPages.filter(p =>
    p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setNotifOpen(false);
        setSearchOpen(false);
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
      className="w-full bg-white border-b border-gray-100 px-4 lg:px-6 py-4 flex items-center justify-between shadow-sm z-50 relative"
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-xl hover:bg-gray-100 transition lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} className="text-dark" />
        </button>
        <div>
          <h1 className="text-base lg:text-lg font-semibold text-dark">
            {getGreeting()}, {name} 👋
          </h1>
          <p className="text-xs text-gray-400 hidden sm:block">{getDate()}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 lg:gap-3" ref={dropdownRef}>

        {/* Search */}
        <div className="relative hidden md:block">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-light w-48 focus-within:ring-2 focus-within:ring-primary transition">
            <Search size={14} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(e.target.value.length > 0); }}
              onFocus={() => searchQuery && setSearchOpen(true)}
              className="text-sm bg-transparent focus:outline-none w-full text-dark"
            />
            {searchQuery && (
              <button onClick={() => { setSearchQuery(""); setSearchOpen(false); }}>
                <X size={12} className="text-gray-400" />
              </button>
            )}
          </div>
          <AnimatePresence>
            {searchOpen && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-12 left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
              >
                <p className="text-xs text-gray-400 px-4 pt-3 pb-1 font-medium uppercase tracking-wide">Pages</p>
                {searchResults.map((result) => (
                  <button
                    key={result.path}
                    onClick={() => { navigate(result.path); setSearchQuery(""); setSearchOpen(false); }}
                    className="w-full flex flex-col px-4 py-3 hover:bg-light transition text-left"
                  >
                    <span className="text-sm font-medium text-dark">{result.label}</span>
                    <span className="text-xs text-gray-400">{result.desc}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bell */}
        <div className="relative">
          <button
            onClick={() => { setNotifOpen(!notifOpen); setDropdownOpen(false); }}
            className="relative p-2 rounded-xl hover:bg-gray-100 transition"
            aria-label="Notifications"
          >
            <Bell size={18} className="text-dark" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full"></span>
          </button>
          <AnimatePresence>
            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-dark">Notifications</h3>
                  <span className="text-xs bg-danger/10 text-danger px-2 py-0.5 rounded-full font-medium">3 new</span>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "⚠️", title: "Entertainment budget at 75%", sub: "Only ₹501 remaining" },
                    { icon: "��", title: "New Phone goal at 60%", sub: "₹10,000 more to go" },
                    { icon: "💰", title: "Salary credited", sub: "+₹30,000 on Apr 1" },
                  ].map((n, i) => (
                    <div key={i} className="flex gap-3 items-start p-2 rounded-xl hover:bg-light transition cursor-pointer">
                      <span className="text-lg">{n.icon}</span>
                      <div>
                        <p className="text-xs font-medium text-dark">{n.title}</p>
                        <p className="text-xs text-gray-400">{n.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Avatar */}
        <div className="relative">
          <button
            onClick={() => { setDropdownOpen(!dropdownOpen); setNotifOpen(false); }}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm hover:ring-2 hover:ring-primary/40 transition"
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
                <div className="px-4 py-3 bg-light border-b border-gray-100">
                  <p className="text-sm font-semibold text-dark">{name}</p>
                  <p className="text-xs text-gray-400">{email}</p>
                </div>
                <div className="p-2">
                  {[
                    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
                    { icon: CreditCard, label: "Transactions", path: "/transactions" },
                    { icon: Settings, label: "Settings", path: "/settings" },
                  ].map((item) => (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setDropdownOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-dark hover:bg-light transition text-left"
                    >
                      <item.icon size={15} className="text-gray-400" />
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="p-2 border-t border-gray-100">
                  <button
                    onClick={() => { localStorage.clear(); window.location.reload(); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-danger hover:bg-danger/10 transition text-left"
                  >
                    <LogOut size={15} />
                    Logout
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

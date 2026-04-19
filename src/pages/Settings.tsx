import { useState } from "react";
import { motion } from "framer-motion";
import Toggle from "../components/ui/Toggle";

export default function Settings() {
  const [name, setName] = useState("Sarika");
  const [email, setEmail] = useState("sarika@email.com");
  const [currency, setCurrency] = useState("INR");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 max-w-2xl"
    >
      <div>
        <h1 className="text-xl font-bold text-dark">Settings</h1>
        <p className="text-sm text-gray-400">Manage your account preferences</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
        <h2 className="text-base font-semibold text-dark">Profile</h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold">
            {name[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-dark">{name}</p>
            <p className="text-xs text-gray-400">{email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-400">Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-400">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-400">Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="INR">₹ INR — Indian Rupee</option>
            <option value="USD">$ USD — US Dollar</option>
            <option value="EUR">€ EUR — Euro</option>
            <option value="GBP">£ GBP — British Pound</option>
          </select>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-all
            ${saved ? "bg-success text-white" : "bg-primary text-white hover:bg-indigo-600"}`}
        >
          {saved ? "✅ Saved!" : "Save Changes"}
        </motion.button>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2">
        <h2 className="text-base font-semibold text-dark mb-2">Notifications</h2>
        <Toggle label="Budget Alerts" defaultOn={true} />
        <Toggle label="Weekly Summary Email" defaultOn={true} />
        <Toggle label="Goal Milestones" defaultOn={false} />
        <Toggle label="New Transaction Alerts" defaultOn={false} />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2">
        <h2 className="text-base font-semibold text-dark mb-2">Appearance</h2>
        <Toggle label="Dark Mode" defaultOn={false} />
        <Toggle label="Compact View" defaultOn={false} />
      </div>
    </motion.div>
  );
}

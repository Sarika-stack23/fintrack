import { useState } from "react";
import { motion } from "framer-motion";

interface ToggleProps {
  label: string;
  defaultOn?: boolean;
}

export default function Toggle({ label, defaultOn = false }: ToggleProps) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium text-dark">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${on ? "bg-primary" : "bg-gray-200"}`}
        aria-label={label}
      >
        <motion.div
          animate={{ x: on ? 24 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm"
        />
      </button>
    </div>
  );
}

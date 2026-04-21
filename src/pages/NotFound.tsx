import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center h-full gap-6 text-center"
    >
      <div className="text-8xl">💸</div>
      <div>
        <h1 className="text-4xl font-bold text-dark">404</h1>
        <p className="text-gray-400 mt-2">Page not found</p>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-indigo-600 transition"
      >
        Back to Dashboard
      </motion.button>
    </motion.div>
  );
}

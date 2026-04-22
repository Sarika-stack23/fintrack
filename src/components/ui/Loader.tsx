import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full mb-4"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white font-semibold text-lg"
      >
        💰 FinTrack
      </motion.p>
      <p className="text-gray-400 text-sm mt-1">Loading your finances...</p>
    </motion.div>
  );
}

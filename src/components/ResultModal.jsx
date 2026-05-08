import { motion } from "framer-motion";

function ResultModal({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-gray-900 border border-cyan-400 p-10 rounded-3xl text-center shadow-[0_0_40px_#00ffff]"
            >
                <h1 className="text-4xl font-bold text-cyan-400 mb-4">
                    🎉 Bingo Complete!
                </h1>

                <p className="text-white text-xl">
                    You Are Globally Connected
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded-xl font-bold"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}

export default ResultModal;
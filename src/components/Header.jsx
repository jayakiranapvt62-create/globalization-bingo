import { motion } from "framer-motion";

function Header() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
        >

            <h1 className="
        text-6xl
        md:text-8xl
        font-black
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        text-transparent
        bg-clip-text
        drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]
      ">
                GLOBALIZATION
            </h1>

            <h2 className="
        text-5xl
        md:text-7xl
        font-black
        text-white
        tracking-[10px]
      ">
                BINGO
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
                Connect With The Digital World
            </p>

        </motion.div>
    );
}

export default Header;
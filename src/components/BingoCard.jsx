import { motion } from "framer-motion";

function BingoCard({ text, active, onClick }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        relative
        overflow-hidden
        h-36
        rounded-3xl
        cursor-pointer
        transition-all
        duration-500
        border
        backdrop-blur-xl
        flex
        items-center
        justify-center
        text-center
        p-4
        group
        
        ${
                active
                    ? `
              bg-gradient-to-br
              from-cyan-400
              to-blue-500
              text-black
              border-cyan-200
              shadow-[0_0_40px_#00ffff]
            `
                    : `
              bg-white/5
              border-white/10
              text-white
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
            `
            }
      `}
        >

            {/* animated glow */}

            <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        -translate-x-full
        group-hover:translate-x-full
        transition-all
        duration-1000
      "></div>

            <p className="relative z-10 font-bold text-sm md:text-base">
                {text}
            </p>
        </motion.div>
    );
}

export default BingoCard;
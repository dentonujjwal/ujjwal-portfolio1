import { motion } from 'framer-motion';
import { FaUserTie, FaDownload } from 'react-icons/fa';

const ResumeHolder = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="relative flex items-end gap-2 group"
        >
            {/* The Actor */}
            <motion.div
                animate={{
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-10 text-white/80"
            >
                {/* Body/Suit Icon */}
                <FaUserTie size={50} className="filter drop-shadow-lg" />

                {/* Hand (Simulated) */}
                <motion.div
                    className="absolute top-1/2 -right-2 w-6 h-2 bg-white/80 rounded-full origin-left"
                    style={{ rotate: -20 }}
                />
            </motion.div>

            {/* The Resume Button (Being Held) */}
            <motion.a
                href="/resume.pdf"
                download="Ujjwal_Rai_Professional_Resume.pdf"
                animate={{
                    y: [0, -5, 0],
                    rotate: [0, 1, -1, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2 // Slight lag for realism
                }}
                className="relative -ml-4 mb-2 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-r-xl rounded-tl-xl font-medium transition-all shadow-xl group-hover:scale-105"
            >
                <span>Download Resume</span>
                <FaDownload />
            </motion.a>
        </motion.div>
    );
};

export default ResumeHolder;

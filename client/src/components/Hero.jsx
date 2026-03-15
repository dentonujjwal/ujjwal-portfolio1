import { motion } from 'framer-motion';
import { FaArrowDown, FaUserAlt } from 'react-icons/fa';
import ThreeDText from './ThreeDText';
import ResumeHolder from './ResumeHolder';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/src/assets/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90"></div>
            </div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                {/* Reveal Panels */}
                <div className="absolute inset-0 flex justify-center pointer-events-none z-20 overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-101%' }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                        className="absolute h-full w-1/2 left-0 bg-[#0a192f] border-r border-accent/20 flex items-center justify-end pr-4"
                    >
                        <motion.div
                            animate={{ opacity: [1, 0], scale: [1, 1.2] }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="flex flex-col items-center gap-1 opacity-40 text-accent/50"
                        >
                            <FaUserAlt size={30} className="animate-pulse" />
                            <span className="text-[8px] font-bold uppercase tracking-widest text-center">Opening...</span>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '101%' }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                        className="absolute h-full w-1/2 right-0 bg-[#0a192f] border-l border-accent/20 flex items-center justify-start pl-4"
                    >
                        <motion.div
                            animate={{ opacity: [1, 0], scale: [1, 1.2] }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="flex flex-col items-center gap-1 opacity-40 text-accent/50"
                        >
                            <FaUserAlt size={30} className="animate-pulse" />
                            <span className="text-[8px] font-bold uppercase tracking-widest text-center">Opening...</span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <span className="text-accent font-medium tracking-widest uppercase">Hello, I'm</span>

                    <div className="flex justify-center -ml-8 md:ml-0 my-8">
                        <ThreeDText />
                    </div>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
                        Full Stack <span className="text-white font-normal">Java Developer</span>
                    </h2>

                    <div className="flex justify-center items-end gap-6 flex-wrap mt-8">
                        <a href="#projects" className="px-8 py-3 bg-accent hover:bg-blue-600 text-white rounded-full font-medium transition-all shadow-lg shadow-accent/25 mb-3">
                            View My Work
                        </a>

                        {/* Resume Actor */}
                        <ResumeHolder />

                        <a href="#contact" className="px-8 py-3 glass hover:bg-white/20 text-white rounded-full font-medium transition-all mb-3">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <FaArrowDown className="text-gray-400 animate-bounce" size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;

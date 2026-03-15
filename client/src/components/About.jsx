import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="order-2 md:order-1">
                        <div className="relative group w-full max-w-md mx-auto">
                            {/* Animated Rotating Border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 animate-spin-slow transition duration-1000 group-hover:duration-200"></div>

                            {/* Moving Line Effect (Snake Border) */}
                            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
                                <div className="absolute inset-[-50%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#00d4ff_290deg,transparent_360deg)] animate-spin-slow-reverse"></div>
                            </div>

                            {/* Image Container */}
                            <div className="relative bg-secondary rounded-2xl p-1">
                                <img
                                    src={profileImg}
                                    alt="Ujjwal Rai"
                                    className="relative w-full rounded-xl shadow-2xl z-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-12 h-1 bg-accent rounded-full"></span>
                            About Me
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a <strong className="text-white">Full Stack Java Developer</strong> with strong expertise in building scalable, secure, and high-performance web applications. I specialize in <span className="text-accent">Java, Spring Boot, React.js, Node.js, and MySQL</span>, with hands-on experience in enterprise-grade systems, AI-powered applications, and cloud fundamentals.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            I focus on clean architecture, performance optimization, and real-world problem solving. Currently pursuing my B.Sc (IT), I am dedicated to creating impactful digital solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 glass rounded-lg text-center">
                                <h3 className="text-3xl font-bold text-gradient">3+</h3>
                                <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
                            </div>
                            <div className="p-4 glass rounded-lg text-center">
                                <h3 className="text-3xl font-bold text-gradient">2026</h3>
                                <p className="text-sm text-gray-400 mt-1">Year of Graduation</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaBolt, FaMobileAlt, FaStethoscope } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Electricity Billing System",
        category: "Enterprise Java Application",
        description: "Automated billing management system reducing manual processing by 50%. Features real-time consumption tracking and automated bill generation.",
        tech: ["Java", "Swing", "MySQL", "XML"],
        icon: <FaBolt className="text-yellow-400" size={40} />,
        color: "from-yellow-400/20 to-orange-500/20",
        link: "#", // Placeholder
        isFeatured: false
    },
    {
        id: 2,
        title: "Mobile Data Sharing",
        category: "Full Stack Web Application",
        description: "Secure prepaid mobile data sharing platform to reduce data wastage. Implements JWT auth and optimized REST APIs.",
        tech: ["React.js", "Node.js", "MySQL", "JWT"],
        icon: <FaMobileAlt className="text-blue-400" size={40} />,
        color: "from-blue-400/20 to-cyan-500/20",
        link: "#",
        isFeatured: false
    },
    {
        id: 3,
        title: "Skin Disease Detection AI",
        category: "AI Powered Web App",
        description: "Advanced AI system for detecting skin diseases using image processing. detailed analysis, confidence scores, and doctor recommendations.",
        tech: ["React.js", "ML", "Node.js", "MySQL"],
        icon: <FaStethoscope className="text-pink-400" size={40} />,
        color: "from-pink-400/20 to-purple-500/20",
        link: "/project/skin-disease-detection",
        isFeatured: true
    }
];

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-12 h-1 bg-accent rounded-full"></span>
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className={`glass group relative rounded-2xl overflow-hidden hover:translate-y-[-10px] transition-all duration-300 ${project.isFeatured ? 'md:col-span-2 lg:col-span-1 border-accent/50' : ''}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="p-8 relative z-10 flex flex-col h-full">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 bg-white/5 rounded-xl backdrop-blur-md">
                                        {project.icon}
                                    </div>
                                    {project.isFeatured && (
                                        <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/20">Featured</span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-sm text-accent mb-4">{project.category}</p>
                                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">{t}</span>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    {project.link.startsWith('/') ? (
                                        <Link to={project.link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                                            View Details <FaExternalLinkAlt size={12} />
                                        </Link>
                                    ) : (
                                        <a href={project.link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                                            View Project <FaGithub size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

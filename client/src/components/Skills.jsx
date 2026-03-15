import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiJavascript, SiPostman, SiGit } from 'react-icons/si';

const skillsData = [
    {
        category: "Languages",
        skills: [
            { name: "Java", icon: <FaJava />, color: "text-red-500" },
            { name: "Python", icon: <FaPython />, color: "text-blue-400" },
            { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
            { name: "C/C++", icon: null, color: "text-gray-400" },
        ]
    },
    {
        category: "Frameworks",
        skills: [
            { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
            { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
            { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
            { name: "Express.js", icon: null, color: "text-gray-400" },
        ]
    },
    {
        category: "Tools & DB",
        skills: [
            { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
            { name: "Git & GitHub", icon: <SiGit />, color: "text-orange-500" },
            { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
            { name: "AWS", icon: <FaAws />, color: "text-yellow-500" }
        ]
    }
];

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] bg-cyan/10 rounded-full blur-[80px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">My technical toolkit tailored for scalable application development.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-3">{category.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-default">
                                        <span className={`text-2xl ${skill.color}`}>{skill.icon || "💻"}</span>
                                        <span className="text-gray-200 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

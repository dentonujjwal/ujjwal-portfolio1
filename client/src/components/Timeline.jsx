import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const timelineData = [
    {
        year: "2025",
        title: "Electricity Billing System",
        subtitle: "Enterprise Java Application",
        description: "Automated billing management system reducing manual work by 50%. Built with Java Swing & MySQL.",
        icon: <FaBriefcase />,
        type: "project"
    },
    {
        year: "2025",
        title: "Mobile Data Sharing System",
        subtitle: "Full Stack Web App",
        description: "Created a secure platform for sharing unused mobile data. Utilizing React, Node.js and JWT.",
        icon: <FaBriefcase />,
        type: "project"
    },
    {
        year: "2023 - Present",
        title: "B.Sc (IT)",
        subtitle: "University of Mumbai",
        description: "Pursuing Bachelor's of Science in Information Technology. Focusing on Software Engineering and Data Science.",
        icon: <FaGraduationCap />,
        type: "education"
    },
    {
        year: "2024",
        title: "Aavishkar Research Convention",
        subtitle: "Zonal Level",
        description: "Presented the 'Mobile Data Sharing System' research project tailored for optimizing data usage.",
        icon: <FaAward />,
        type: "achievement"
    }
];

const TimelineItem = ({ data, index }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row gap-4 mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="md:w-1/2"></div>
            <div className="md:w-12 relative flex items-center justify-center">
                <div className="h-full w-1 bg-white/10 absolute top-0 bottom-0 pointer-events-none"></div>
                <div className="w-10 h-10 bg-primary border-4 border-accent rounded-full flex items-center justify-center z-10 text-white relative">
                    {data.icon}
                </div>
            </div>
            <div className="md:w-1/2 p-4 glass rounded-xl hover:bg-white/5 transition-colors">
                <span className="text-accent text-sm font-bold tracking-wider">{data.year}</span>
                <h3 className="text-xl font-bold mt-1 text-white">{data.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{data.subtitle}</p>
                <p className="text-gray-300">{data.description}</p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & <span className="text-gradient">Experience</span></h2>
                </div>
                <div className="relative">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;

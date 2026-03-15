import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Experience', path: '/#timeline' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple">
                                UR.
                            </Link>
                            <motion.img
                                src={profileImg}
                                alt="Profile"
                                className="w-8 h-8 rounded-full border border-accent/50 object-cover cursor-zoom-in hover:scale-110 transition-transform"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsExpanded(true);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-gray-300 hover:text-accent transition-colors text-sm uppercase tracking-wider font-medium"
                                    onClick={() => {
                                        if (link.path.startsWith('/#')) {
                                            const id = link.path.split('#')[1];
                                            setTimeout(() => {
                                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-4 ml-4 pl-4 border-l border-gray-700">
                                <a href="https://github.com/dentonujjjwal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                                <a href="https://www.linkedin.com/in/ujjwal-rai-8a052a285/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
                                <a href="https://www.instagram.com/dentonujjwal_rai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden glass-dark absolute w-full left-0 top-full">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md w-full text-center"
                                    onClick={() => {
                                        setIsOpen(false);
                                        if (link.path.startsWith('/#')) {
                                            const id = link.path.split('#')[1];
                                            setTimeout(() => {
                                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-6 py-4">
                                <a href="https://github.com/dentonujjjwal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
                                <a href="https://www.linkedin.com/in/ujjwal-rai-8a052a285/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500"><FaLinkedin size={24} /></a>
                                <a href="https://www.instagram.com/dentonujjwal_rai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Expanded Profile Image Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-lg w-full"
                        >
                            <img
                                src={profileImg}
                                alt="Ujjwal Rai Profile"
                                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-accent"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                                onClick={() => setIsExpanded(false)}
                            >
                                <FaTimes size={30} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

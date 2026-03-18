import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Assuming backend runs on port 5000 locally
            const response = await axios.post('/api/contact', formData);
            if (response.status === 201) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple/10 rounded-full blur-[80px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-16"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me</p>
                                    <a href="mailto:ur3707615@gmail.com" className="text-white hover:text-accent transition-colors">ur3707615@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Me</p>
                                    <a href="tel:+918765406848" className="text-white hover:text-accent transition-colors">+91 8765406848</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-white">India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-gray-400 mb-4">Follow Me</p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/ujjwal-rai-8a052a285/" className="p-3 glass rounded-full hover:bg-accent hover:text-white transition-all"><FaLinkedin size={20} /></a>
                                <a href="https://github.com/dentonujjjwal" className="p-3 glass rounded-full hover:bg-gray-700 hover:text-white transition-all"><FaGithub size={20} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl border border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-accent to-purple text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-accent/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-center mt-4">Failed to send. Is the backend running?</p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

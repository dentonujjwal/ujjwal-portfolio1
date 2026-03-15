import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary/80 backdrop-blur-sm border-t border-white/5 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Ujjwal Rai. All rights reserved.
                </p>
                <div className="flex justify-center items-center mt-2 text-sm text-gray-500">
                    <span>Made with</span>
                    <FaHeart className="text-red-500 mx-2 animate-pulse" />
                    <span>using React, Node.js & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

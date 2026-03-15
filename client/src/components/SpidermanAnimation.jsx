import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import spidermanImg from '../assets/spiderman.png';

const SpidermanAnimation = () => {
    // Defines target positions for Spiderman to "swing" to
    const [target, setTarget] = useState({ x: -100, y: 100, rotate: 0 });

    useEffect(() => {
        const moveSpiderman = () => {
            // Calculate safe zones (left 20% and right 20% of screen)
            const safeZoneWidth = window.innerWidth * 0.25;
            const isLeft = Math.random() > 0.5;

            let newX;
            if (isLeft) {
                // Random position in left 25%
                newX = Math.random() * (safeZoneWidth - 100);
            } else {
                // Random position in right 25%
                newX = (window.innerWidth - safeZoneWidth) + Math.random() * (safeZoneWidth - 100);
            }

            // Y position can be anywhere from top 10% to bottom 20%
            const newY = window.innerHeight * 0.1 + Math.random() * (window.innerHeight * 0.7);

            // Swing rotation based on side
            const newRotate = isLeft ? Math.random() * 10 + 5 : Math.random() * -10 - 5;

            setTarget({ x: newX, y: newY, rotate: newRotate });
        };

        // Move initially
        moveSpiderman();

        // Move every 4-7 seconds
        const interval = setInterval(() => {
            moveSpiderman();
        }, Math.random() * 3000 + 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            <motion.div
                initial={{ x: -200, y: -200 }}
                animate={{
                    x: target.x,
                    y: target.y,
                    rotate: target.rotate
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 30
                }}
                className="absolute w-32 md:w-48 filter drop-shadow-2xl"
            >
                <img src={spidermanImg} alt="Spiderman" className="w-full h-auto object-contain" />

                {/* Simulated Web Line (going up) */}
                <motion.div
                    className="absolute bottom-full left-1/2 w-0.5 bg-white/40 h-[100vh] -translate-x-1/2 origin-bottom"
                    animate={{ rotate: -target.rotate }} // Counter-rotate to keep web straight-ish or dynamic
                />
            </motion.div>
        </div>
    );
};

export default SpidermanAnimation;

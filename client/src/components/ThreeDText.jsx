import { motion } from 'framer-motion';

const ThreeDText = () => {
  const name = "UJJWAL RAI";
  const letters = name.split("");

  return (
    <div className="relative perspective-[1000px] select-none py-10 flex justify-center gap-2 md:gap-4 flex-wrap">
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            x: Math.random() * 1000 - 500, 
            y: Math.random() * 1000 - 500, 
            z: Math.random() * 1000 - 500,
            rotateX: Math.random() * 360,
            rotateY: Math.random() * 360
          }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: 0, 
            z: 0,
            rotateX: [0, 10, 0], // Continuous float
            rotateY: [0, -10, 0],
            color: ["#ccd6f6", "#64ffda", "#bd34fe", "#ccd6f6"] // Color Cycle
          }}
          transition={{
            // Assembly Animation
            opacity: { duration: 1, delay: index * 0.1 },
            x: { type: "spring", stiffness: 50, damping: 10, delay: index * 0.1 },
            y: { type: "spring", stiffness: 50, damping: 10, delay: index * 0.1 },
            z: { type: "spring", stiffness: 50, damping: 10, delay: index * 0.1 },
            rotateX: { 
                repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut", delay: 2 + index * 0.1 
            }, 
            rotateY: { 
                repeat: Infinity, repeatType: "reverse", duration: 5, ease: "easeInOut", delay: 2 + index * 0.1 
            },
            color: { duration: 10, repeat: Infinity, ease: "linear", delay: 2 }
          }}
          className="relative transform-style-3d cursor-default"
        >
          <div className="relative text-6xl md:text-9xl font-black">
              {/* Shadow/Depth Layers */}
              {[...Array(8)].map((_, i) => (
                  <span 
                    key={i}
                    className="absolute inset-0 text-primary/50"
                    style={{ 
                        transform: `translateZ(-${i * 2}px)`,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {letter}
                  </span>
              ))}
              
              {/* Front Face */}
              <span className="relative z-50 filter drop-shadow-xl" style={{ transform: "translateZ(0px)" }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ThreeDText;

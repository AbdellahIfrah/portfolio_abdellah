import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="./videos/ocean-waves.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Floating Clouds */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.img
            key={i}
            src="./images/one-piece/cloud.svg"
            alt="Cloud"
            className="absolute opacity-30"
            style={{
              top: `${20 + i * 15}%`,
              left: '-200px',
              width: `${150 + i * 50}px`
            }}
            animate={{
              x: ['-200px', '100vw'],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Floating Ships */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.img
          src="./images/one-piece/thousand-sunny.png"
          alt="Thousand Sunny"
          className="absolute right-0 w-96 opacity-80"
          animate={{
            x: [100, -1500],
            y: [0, -20, 0],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.img
            src="./images/one-piece/straw-hat-logo.png"
            alt="Straw Hat"
            className="w-32 h-32 mx-auto mb-6"
            animate={{
              rotate: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
            animate={{
              textShadow: [
                "0 0 7px #fff",
                "0 0 10px #fff",
                "0 0 21px #fff",
                "0 0 42px #bc13fe",
                "0 0 82px #bc13fe",
                "0 0 92px #bc13fe",
                "0 0 102px #bc13fe",
                "0 0 151px #bc13fe",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Abdellah Ifrah
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            <span className="text-yellow-400">Full Stack Developer</span>
            <span className="mx-3">|</span>
            <span className="text-red-400">Nakama</span>
          </motion.div>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 25px rgb(239 68 68 / 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-500 rounded-full text-lg font-semibold
                     transition-all duration-300 hover:bg-red-400
                     hover:ring-4 hover:ring-red-300/50 group"
          >
            <span className="flex items-center gap-2">
              View My Projects
              <img
                src="./images/one-piece/luffy-icon.png"
                alt="Luffy"
                className="w-12 h-12 transform group-hover:rotate-12 transition-transform"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

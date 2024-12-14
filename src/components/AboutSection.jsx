"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cardVariants, staggerContainer } from '@/utils/animations';

const languages = [
  { 
    name: 'Tamazight', 
    level: 'Native', 
    flag: '🇲🇦', 
    icon: '/images/flags/Berber_flag.svg',
    description: 'Mother tongue, deep cultural roots'
  },
  { 
    name: 'Arabic', 
    level: 'Native', 
    flag: '🇲🇦', 
    icon: '/images/flags/arabic.png',
    description: 'Fluent communication, rich linguistic heritage'
  },
  { 
    name: 'Spanish', 
    level: 'Intermediate', 
    flag: '🇪🇸', 
    icon: '/images/flags/spanish.png',
    description: 'Conversational skills, growing proficiency'
  },
  { 
    name: 'English', 
    level: 'Intermediate', 
    flag: '🇬🇧', 
    icon: '/images/flags/english.png',
    description: 'Professional and technical communication'
  },
  { 
    name: 'French', 
    level: 'Basic', 
    flag: '🇫🇷', 
    icon: '/images/flags/french.png',
    description: 'Foundational understanding'
  },
];

const AboutSection = () => {
  const [text, setText] = useState('');
  const [activeLanguage, setActiveLanguage] = useState(null);
  const fullText = `Hey there! 👋 I'm Abdellah, a developer sailing through the vast seas of web development! Just like Luffy's journey to become the Pirate King, I'm on my own adventure to create amazing digital experiences.

When I'm not coding (my Devil Fruit power 😉), you'll find me exploring new technologies or watching One Piece. My dream? To become one of the greatest developers and create websites that make people smile! ⚓️`;
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Thousand Sunny decoration */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-4xl font-bold text-white mb-6 text-center"
          >
            About Me
          </motion.h2>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Profile Image */}
            <motion.div 
              variants={cardVariants}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-[270px] aspect-square rounded-full overflow-hidden 
                            shadow-[0_0_25px_10px_rgba(59,130,246,0.8)] 
                            border-2 border-blue-400 
                            before:content-[''] before:absolute before:inset-0 before:rounded-full 
                            before:shadow-[0_0_20px_8px_rgba(59,130,246,0.8),inset_0_0_20px_8px_rgba(59,130,246,0.8)] 
                            before:animate-pulse">
                <Image
                  src="/images/profile.jpg"
                  alt="Abdellah Ifrah"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div 
              variants={cardVariants}
              className="flex items-center"
            >
              <p className="text-xl text-gray-300">
                {text}
              </p>
            </motion.div>
          </div>
          
          {/* Languages Grid - Full Width */}
          <motion.div 
            className="grid grid-cols-5 gap-4"
            variants={staggerContainer}
          >
            {languages.map((lang, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover="hover"
                className={`
                  relative overflow-hidden rounded-xl 
                  transition-all duration-300 ease-in-out
                  ${activeLanguage === lang.name 
                    ? 'scale-105 shadow-2xl bg-gray-700' 
                    : 'bg-gray-800 hover:bg-gray-700'}
                  transform hover:scale-105 cursor-pointer
                `}
                onClick={() => setActiveLanguage(activeLanguage === lang.name ? null : lang.name)}
              >
                <div className="p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={lang.icon} 
                        alt={`${lang.name} icon`} 
                        width={60} 
                        height={60} 
                        className="rounded-full border-2 border-gray-600"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-white font-semibold">{lang.name}</h3>
                  <p className="text-gray-400 text-sm">{lang.level}</p>
                </div>
                {activeLanguage === lang.name && (
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white text-sm text-center">{lang.description}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

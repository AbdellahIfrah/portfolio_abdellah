"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cardVariants, staggerContainer } from '@/utils/animations';

const skills = [
  {
    category: 'Devil Fruit Powers (Frontend)',
    items: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'TypeScript', level: 80, icon: '📘' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    ],
  },
  {
    category: 'Haki Abilities (Backend)',
    items: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'SQL', level: 70, icon: '📊' },
    ],
  },
  {
    category: 'Combat Techniques (Tools)',
    items: [
      { name: 'Git', level: 90, icon: '📦' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Linux', level: 80, icon: '🐧' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3"
          >
            <div className="relative w-20 h-20 group">
              <div className="transition-transform duration-300 group-hover:scale-[3] absolute w-full h-full">
                <Image
                  src="/images/one-piece/devil-fruit.png"
                  alt="Skills Icon"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            My Skills
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            My technical skills, honed like a pirate's combat techniques, ready to navigate the complex seas of web development.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-white">{skill.name}</span>
                    </div>
                    <div className="w-1/2 bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.5 + skillIndex * 0.2 }}
                        className="bg-cyan-500 h-2.5 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

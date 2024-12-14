"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cardVariants, staggerContainer } from '@/utils/animations';
import Link from 'next/link';

const projects = [
  {
    title: 'Grand Line Navigator',
    description: 'A full-stack web application for tracking and managing development projects, inspired by the journey through the Grand Line.',
    image: '/images/one-piece/thousand-sunny.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://demo1.com',
    githubLink: 'https://github.com/yourusername/project1',
    character: '/images/one-piece/Luffy.png',
    characterQuote: '"I will become the King of Web Developers!"'
  },
  {
    title: 'Den Den Mushi Chat',
    description: 'Real-time chat application with video calls, bringing the Den Den Mushi to the digital age.',
    image: '/images/one-piece/den-den-mushi.svg',
    technologies: ['Next.js', 'Socket.io', 'WebRTC'],
    demoLink: 'https://demo2.com',
    githubLink: 'https://github.com/yourusername/project2',
    character: '/images/one-piece/brook.png',
    characterQuote: '"Music connects people, just like my code!"'
  },
  {
    title: 'Thousand Sunny Dashboard',
    description: 'A beautiful dashboard template with dark mode, animations, and a One Piece inspired design.',
    image: '/images/one-piece/straw-hat-logo.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoLink: 'https://demo3.com',
    githubLink: 'https://github.com/yourusername/project3',
    character: '/images/one-piece/Shanks.png',
    characterQuote: '"A true developer never stops learning!"'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Thousand Sunny decoration */}
      <motion.div
        className="absolute left-0 top-20 w-32 h-32 opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/images/one-piece/thousand-sunny.png"
          alt="Thousand Sunny"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
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
            <div className="relative w-12 h-12">
              <Image
                src="/images/one-piece/log-pose.png"
                alt="Projects Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            My Projects
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Navigating through the Grand Line of web development, one project at a time.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Character */}
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-3">
                    <Image
                      src={project.character}
                      alt="Project Character"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <p className="italic text-gray-400 text-sm">
                    {project.characterQuote}
                  </p>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <Link href={project.demoLink} target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
                    >
                      Live Demo
                    </motion.button>
                  </Link>
                  <Link href={project.githubLink} target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

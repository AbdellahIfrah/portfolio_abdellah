"use client";

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quote Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/images/one-piece/luffy-icon.png" alt="Luffy" className="w-6 h-6" />
              Pirate Quote
            </motion.h3>
            <p className="text-gray-400 italic">
              "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... that's the Pirate King!"
              <span className="block mt-2 text-sm">- Monkey D. Luffy</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/images/one-piece/log-pose.png" alt="Navigation" className="w-6 h-6" />
              Navigation
            </motion.h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 10 }}
                  className="hover:text-red-400 transition-colors"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Attribution */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/images/one-piece/den-den-mushi-nav.png" alt="Contact" className="w-6 h-6" />
              Contact
            </motion.h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: abdellahifrah0@gmail.com</p>
              <p>Location: Morocco</p>
              <div className="flex items-center gap-4 mt-4">
                {/* Social Links */}
                <motion.a
                  href="https://github.com/AbdellahIfrah"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-red-400"
                >
                  <img src="/images/one-piece/jolly-roger.png" alt="GitHub" className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ifrah-abdellah-7a26082b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-red-400"
                >
                  <img src="/images/one-piece/wanted-poster.png" alt="LinkedIn" className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p> {new Date().getFullYear()} Abdellah Ifrah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

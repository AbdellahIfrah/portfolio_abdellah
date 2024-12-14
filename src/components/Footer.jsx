"use client";

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src="./images/one-piece/straw-hat-logo.png"
            alt="Straw Hat Logo"
            className="w-12 h-12 mb-4"
          />
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Abdellah Ifrah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

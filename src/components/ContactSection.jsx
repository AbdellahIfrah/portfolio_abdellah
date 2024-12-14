import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [800, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              delay: Math.random() * 20,
            }}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: -10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-12">
            Let's build something amazing together! Feel free to reach out through
            any of these channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.a
              href="mailto:abdellahifrah0@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E1E1E] p-6 rounded-lg flex flex-col items-center"
            >
              <img
                src="./images/contact/email.png"
                alt="Email"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">abdellahifrah0@gmail.com</p>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/AbdellahIfrah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E1E1E] p-6 rounded-lg flex flex-col items-center"
            >
              <img
                src="./images/contact/github.png"
                alt="GitHub"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">@AbdellahIfrah</p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/ifrah-abdellah-7a26082b2/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E1E1E] p-6 rounded-lg flex flex-col items-center"
            >
              <img
                src="./images/contact/linkedin.png"
                alt="LinkedIn"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Abdellah Ifrah</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <img
              src="./images/one-piece/den-den-mushi.png"
              alt="Contact Decoration"
              className="w-24 h-24 mx-auto"
            />
          </motion.div>

          <motion.form
            action="https://formspree.io/f/mdkovqwb"
            method="POST"
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                         focus:outline-none focus:border-cyan-500 text-white
                         placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                         focus:outline-none focus:border-cyan-500 text-white
                         placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                         focus:outline-none focus:border-cyan-500 text-white
                         placeholder-gray-400 transition-all duration-300 resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-6 bg-cyan-500 text-white rounded-lg
                       hover:bg-cyan-400 transition-colors animate-glow"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

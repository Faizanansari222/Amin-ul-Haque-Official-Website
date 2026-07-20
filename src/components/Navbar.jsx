import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '#services', icon: '' },
    { name: 'About', href: '#about', icon: '' },
    { name: 'Testimonials', href: '#testimonials', icon: '' },
    { name: 'Contact', href: '#contact', icon: '' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Amin <span className="text-secondary">Ul Haque</span>
              </h1>
              <p className="text-[10px] xs:text-xs text-gray-300 -mt-0.5 sm:-mt-1 hidden xs:block">
                Tax & Financial Specialist
              </p>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-secondary transition-colors duration-300 font-medium text-sm lg:text-base relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-secondary to-cyan-400 text-primary px-5 lg:px-6 py-1.5 lg:py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-1.5 sm:p-2 rounded-md hover:bg-white/10 transition relative z-50"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-primary/98 backdrop-blur-xl z-50 md:hidden shadow-2xl border-l border-white/10"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Menu
                  </h2>
                  <p className="text-xs text-gray-400">Navigate to sections</p>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 rounded-full hover:bg-white/10 transition"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="p-4 sm:p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 w-full">
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-gray-200 group-hover:text-secondary text-base font-medium transition-colors duration-300">
                        {link.name}
                      </span>
                      <ChevronRightIcon className="h-4 w-4 text-gray-500 group-hover:text-secondary ml-auto transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.a>
                ))}

                {/* Divider */}
                <div className="my-4 border-t border-white/10" />

                {/* CTA Button in Menu */}
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="bg-gradient-to-r from-secondary to-cyan-400 text-primary text-center px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                    Get Free Consultation
                  </div>
                </motion.a>

                {/* Social Links in Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <p className="text-xs text-gray-400 mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    {[
                      { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/amin-ul-haque/' },
                      { name: 'Upwork', icon: 'fab fa-upwork', url: 'https://www.upwork.com/freelancers/~0170b69ba952f40fb7' },
                      { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/aminulhaque.officials' },
                      { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/aminulhaque.officials/' },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className={`${social.icon} text-sm`}></i>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
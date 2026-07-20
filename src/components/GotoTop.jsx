import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GoToTop = ({ 
  threshold = 300,
  position = 'bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8',
  buttonColor = 'bg-primary hover:bg-secondary',
  size = 'p-2.5 sm:p-3 md:p-4',
  iconSize = 'h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7',
  showTooltip = true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed ${position} ${buttonColor} text-white ${size} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 border-2 border-white/20 hover:border-white/40 group`}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`${iconSize} group-hover:animate-bounce transition-transform duration-300`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.25a.75.75 0 011.08 0l5.25 5.25a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" 
              clipRule="evenodd" 
            />
          </svg>
          
          {showTooltip && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Back to Top
            </span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
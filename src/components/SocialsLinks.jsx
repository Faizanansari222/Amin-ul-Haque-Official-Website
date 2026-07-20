import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = ({ className = '', username = '@AminUlHaque', variant = 'default' }) => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/amin-ul-haque/',
      color: 'hover:bg-[#0A66C2]'
    },
    {
      name: 'Upwork',
      icon: 'fab fa-upwork',
      url: 'https://www.upwork.com/freelancers/~0170b69ba952f40fb7?mp_source=share',
      color: 'hover:bg-[#6FDA44]'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/aminulhaque.officials',
      color: 'hover:bg-[#1877F2]'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/aminulhaque.officials/',
      color: 'hover:bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]'
    },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-x-twitter',
      url: 'https://x.com/aminulhaque_?s=11',
      color: 'hover:bg-[#000000]'
    }
  ];

  // Variants for different layouts - All responsive
  const variants = {
    default: {
      container: 'flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4',
      username: 'text-gray-400 text-xs sm:text-sm font-medium whitespace-nowrap',
      separator: 'text-gray-600 text-xs sm:text-sm',
      iconSize: 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10',
      iconText: 'text-xs sm:text-sm md:text-base',
      gap: 'gap-1.5 sm:gap-2 md:gap-3'
    },
    large: {
      container: 'flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6',
      username: 'text-gray-300 text-sm sm:text-base font-semibold whitespace-nowrap',
      separator: 'text-gray-600 text-sm sm:text-base',
      iconSize: 'w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12',
      iconText: 'text-sm sm:text-base md:text-xl',
      gap: 'gap-2 sm:gap-3 md:gap-4'
    },
    compact: {
      container: 'flex flex-wrap items-center justify-center gap-1 sm:gap-2',
      username: 'text-gray-500 text-[10px] sm:text-xs font-medium whitespace-nowrap',
      separator: 'text-gray-600 text-[10px] sm:text-xs',
      iconSize: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
      iconText: 'text-[10px] sm:text-xs md:text-sm',
      gap: 'gap-1 sm:gap-1.5 md:gap-2'
    },
    vertical: {
      container: 'flex flex-col items-start gap-2 sm:gap-3',
      username: 'text-gray-400 text-xs sm:text-sm font-medium',
      separator: 'text-gray-600 text-xs sm:text-sm',
      iconSize: 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10',
      iconText: 'text-xs sm:text-sm md:text-base',
      gap: 'gap-1.5 sm:gap-2 md:gap-3'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div className={`${currentVariant.container} ${className}`}>
      {/* Username - displayed once */}
      <span className={currentVariant.username}>
        {username}
      </span>
      
      {/* Separator */}
      <span className={currentVariant.separator}>|</span>
      
      {/* Social Icons */}
      <div className={`flex flex-wrap items-center ${currentVariant.gap}`}>
        {socialPlatforms.map((platform, index) => (
          <motion.a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`
              ${currentVariant.iconSize} 
              rounded-full 
              bg-white/10 backdrop-blur-sm 
              flex items-center justify-center 
              text-white hover:text-white 
              transition-all duration-300 
              ${platform.color} 
              border border-white/20 hover:border-transparent 
              shadow-md hover:shadow-lg
            `}
            aria-label={`Follow on ${platform.name}`}
          >
            <i className={`${platform.icon} ${currentVariant.iconText}`}></i>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
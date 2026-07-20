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
    // {
    //   name: 'YouTube',
    //   icon: 'fab fa-youtube',
    //   url: 'https://www.youtube.com/@aminulhaque_tax',
    //   color: 'hover:bg-[#FF0000]'
    // },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-x-twitter',
      url: 'https://x.com/aminulhaque_?s=11',
      color: 'hover:bg-[#000000]'
    }
  ];

  // Variants for different layouts
  const variants = {
    default: {
      container: 'flex items-center gap-4',
      username: 'text-gray-400 text-sm font-medium whitespace-nowrap',
      iconSize: 'w-10 h-10',
      iconText: 'text-base',
      gap: 'gap-3'
    },
    large: {
      container: 'flex items-center gap-6',
      username: 'text-gray-300 text-base font-semibold whitespace-nowrap',
      iconSize: 'w-12 h-12',
      iconText: 'text-xl',
      gap: 'gap-4'
    },
    compact: {
      container: 'flex items-center gap-2',
      username: 'text-gray-500 text-xs font-medium whitespace-nowrap',
      iconSize: 'w-8 h-8',
      iconText: 'text-sm',
      gap: 'gap-2'
    },
    vertical: {
      container: 'flex flex-col items-start gap-2',
      username: 'text-gray-400 text-sm font-medium',
      iconSize: 'w-10 h-10',
      iconText: 'text-base',
      gap: 'gap-3'
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
      <span className="text-gray-600">|</span>
      
      {/* Social Icons */}
      <div className={`flex items-center ${currentVariant.gap}`}>
        {socialPlatforms.map((platform, index) => (
          <motion.a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`${currentVariant.iconSize} rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:text-white transition-all duration-300 ${platform.color} border border-white/20 hover:border-transparent shadow-lg hover:shadow-xl`}
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
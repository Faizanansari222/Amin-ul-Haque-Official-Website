import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import SocialLinks from './SocialsLinks';
import aminImg from '../assets/amin.png';
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-20">
      {/* Background effects same as before */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-secondary text-sm font-medium mb-6"
            >
              <CheckBadgeIcon className="h-5 w-5" />
              <span>Enrolled Agent & CMA Certified</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Amin <br />
              <span className="text-secondary">Ul Haque</span>
            </h1>
            
            <p className="text-xl text-secondary font-semibold mb-4">
              USA Tax Specialist & Trainer
            </p>

            <p className="text-lg text-gray-300 mb-6 max-w-lg">
              Expert in US Tax, Bookkeeping, and Payroll services with over a decade of experience. 
              Mentored 600+ students and helped CPA firms globally .
            </p>

            {/* Social Links - Added Here */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-3">Connect with me:</p>
              <SocialLinks />
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Consultation <ArrowRightIcon className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition"
              >
                Explore Services
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 mt-10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-primary flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-gray-300 text-sm">
                <span className="text-white font-bold">600+</span> Students Mentored
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="w-80 h-80 p-5 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <img 
                  src={aminImg} 
                  alt="Amin Ul Haque - USA Tax Specialist"
                  className="w-[90%] ml-5 object-cover"
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-2 -right-2 bg-accent text-primary px-6 py-3 rounded-2xl shadow-xl font-bold text-sm"
              >
                ⭐ 5-Star Rated
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -left-4 bg-secondary text-primary px-4 py-2 rounded-full font-bold shadow-lg text-sm"
              >
                📚 600+ Students
              </motion.div>
              
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-secondary/10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
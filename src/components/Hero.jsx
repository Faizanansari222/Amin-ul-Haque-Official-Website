import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import SocialLinks from "./SocialsLinks";
import aminImg from "../assets/amin.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/30">
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/90 to-secondary/20" />
        </motion.div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, -20, 0, 20, 0],
            scale: [1, 1.1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0, 30, 0],
            y: [0, 20, 0, -20, 0],
            scale: [1, 0.9, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.8, 1.2, 1],
            opacity: [0.3, 0.6, 0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-secondary text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/10"
            >
              <motion.div
                // animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <CheckBadgeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <span className="hidden xs:inline">
                Enrolled Agent & CMA Certified
              </span>
              <span className="xs:hidden">EA & CMA Certified</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Amin <br className="hidden sm:block" />
              <motion.span
                className="text-secondary inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(79, 195, 247, 0.3)",
                    "0 0 40px rgba(79, 195, 247, 0.6)",
                    "0 0 20px rgba(79, 195, 247, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Ul Haque
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-secondary font-semibold mb-3 sm:mb-4"
            >
              USA Tax Specialist & Trainer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Expert in US Tax, Bookkeeping, and Payroll services with over a
              decade of experience. Mentored 600+ students and helped CPA firms
              globally.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                Connect with me:
              </p>
              <div className="flex justify-center lg:justify-start">
                <SocialLinks />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 195, 247, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Get Free Consultation{" "}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/10 transition text-sm sm:text-base"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Profile Image Container with Glow */}
              <motion.div
                className="w-52 h-52 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 p-3 sm:p-4 lg:p-5 rounded-full overflow-hidden border-4 border-secondary/30 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(79, 195, 247, 0.2)",
                    "0 0 40px rgba(79, 195, 247, 0.4)",
                    "0 0 20px rgba(79, 195, 247, 0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={aminImg}
                  alt="Amin Ul Haque - USA Tax Specialist"
                  className="w-[80%] md:w-[85%] object-cover rounded-full mx-auto"
                />
              </motion.div>

              {/* Rotating Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-secondary/20"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -inset-6 rounded-full border border-secondary/10"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-accent text-primary px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-xl sm:rounded-2xl shadow-xl font-bold text-[10px] sm:text-xs lg:text-sm"
                whileHover={{ scale: 1.1 }}
              >
                ⭐ 5-Star Rated
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 lg:-top-4 lg:-left-4 bg-secondary text-primary px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full font-bold shadow-lg text-[10px] sm:text-xs lg:text-sm"
                whileHover={{ scale: 1.1 }}
              >
                📚 600+ Students
              </motion.div>

              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-full border-2 border-secondary/10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
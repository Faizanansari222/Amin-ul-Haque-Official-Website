import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import DrakeLogo from "../assets/Software_Logo/Drake.png";
import ProconnectLogo from "../assets/Software_Logo/ZOHO.png";
import DynamicLogo from "../assets/Software_Logo/Dynamics-365.png";
import WaveLogo from "../assets/Software_Logo/Wave_logo.png";
import TurboLogo from "../assets/Software_Logo/turbotax.png";
import QuickBooksLogo from "../assets/Software_Logo/QuickBooks.png";
import XeroLogo from "../assets/Software_Logo/Wave_logo.png";

const About = () => {
  const highlights = [
    "Enrolled Agent (EA) & CMA Certified",
    "10+ years in US Tax, Bookkeeping & Payroll",
    "Mentored 600+ US Tax professionals",
    "Worked closely with CPA firms globally",
    "Expert in Drake Tax & Proconnect software",
    "Specializing in Individuals, Business & Corporate Tax",
  ];

  const stats = [
    { 
      icon: UsersIcon, 
      value: "600+", 
      label: "Students Mentored",
      color: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      iconColor: "text-blue-500"
    },
    { 
      icon: BriefcaseIcon, 
      value: "10+", 
      label: "Years Experience",
      color: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      iconColor: "text-green-500"
    },
    { 
      icon: AcademicCapIcon, 
      value: "EA & CMA", 
      label: "Certifications",
      color: "from-purple-500/10 to-violet-500/10",
      border: "border-purple-500/20",
      iconColor: "text-purple-500"
    },
  ];

  const certifications = [
    { name: "Enrolled Agent (EA)", icon: "📜" },
    { name: "CMA Certified", icon: "📊" },
    { name: "IRS Certified", icon: "✅" },
    { name: "US Tax Specialist", icon: "🇺🇸" },
    { name: "Tax Trainer", icon: "🎓" },
    { name: "QuickBooks ProAdvisor", icon: "📚" },
  ];

  const softwareExpertise = [
    { name: "Drake Tax", logo: DrakeLogo, color: "hover:border-blue-500" },
    { name: "Dynamic", logo: DynamicLogo, color: "hover:border-blue-900" },
    { name: "Turbo", logo: TurboLogo, color: "hover:border-red-500" },
    { name: "Zoho", logo: ProconnectLogo, color: "hover:border-yellow-500" },
    { name: "QuickBooks", logo: QuickBooksLogo, color: "hover:border-green-500" },
    { name: "Wave", logo: XeroLogo, color: "hover:border-blue-300" },
  ];

  const specializations = [
    { icon: UserGroupIcon, label: "Individual Tax", color: "text-blue-500" },
    { icon: BuildingOfficeIcon, label: "Business Tax", color: "text-green-500" },
    { icon: ChartBarIcon, label: "Corporate Tax", color: "text-purple-500" },
    { icon: DocumentTextIcon, label: "Payroll Services", color: "text-orange-500" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            Your trusted US Tax specialist with global expertise and local commitment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Stats & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`bg-gradient-to-br ${stat.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center border ${stat.border} shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <stat.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${stat.iconColor} mx-auto mb-1 sm:mb-2`} />
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-secondary/10"
            >
              <h4 className="font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <ChartBarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                Specializations
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-white/50 p-1.5 sm:p-2 rounded-lg">
                    <spec.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${spec.color}`} />
                    <span className="text-[10px] sm:text-sm text-gray-700">{spec.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications & Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/5 to-accent/5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-secondary/10"
            >
              <h4 className="font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <AcademicCapIcon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                Professional Credentials
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {certifications.map((cert, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm text-primary px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium border border-primary/20 shadow-sm hover:shadow-md hover:border-secondary transition-all duration-300 flex items-center gap-0.5 sm:gap-1"
                  >
                    <span>{cert.icon}</span>
                    {cert.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Software Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-secondary/10"
            >
              <h4 className="font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17.25v-.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v.75m-4.5 0v.75m4.5-.75v.75m-4.5 0a3 3 0 11-3-3h7.5a3 3 0 11-3 3zM3 9.75a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-1.5zM6 6.75a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-1.5z" />
                </svg>
                Software Expertise
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {softwareExpertise.map((software, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${software.color} flex items-center gap-1.5 sm:gap-2 cursor-pointer`}
                  >
                    <img 
                      src={software.logo} 
                      alt={software.name} 
                      className="h-6 sm:h-8 md:w-32 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-secondary/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">Who I Am</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                I am a dedicated US Tax practitioner with over a decade of
                expertise in Individuals, Business, and Corporate tax planning
                and returns, as well as US payroll and sales tax filing.
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/5 to-accent/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-secondary/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🎯</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">What I Do</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                I've played a key role in the US Tax BPO industry, working
                closely with CPA firms and providing comprehensive tax solutions
                to clients. As a US Tax trainer, I have educated and mentored
                more than 600 students.
              </p>
            </motion.div>

            {/* Highlights List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-secondary/10"
            >
              <h4 className="font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                Key Highlights
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-secondary/30"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-gradient-to-r from-secondary to-secondary/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                Let's Work Together
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/amin-ul-haque/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <i className="fab fa-linkedin-in"></i>
                View LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
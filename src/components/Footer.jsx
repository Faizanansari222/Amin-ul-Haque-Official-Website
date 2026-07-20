import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Tax Preparation & Planning',
    'Bookkeeping Services',
    'Payroll Management',
    'Business Advisory',
    'IRS Representation',
    'US Tax Training'
  ];

  const certifications = [
    'Enrolled Agent (EA)',
    'CMA Certified',
    'IRS Certified',
    'US Tax Specialist'
  ];

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
      url: 'https://www.upwork.com/freelancers/aminulhaque',
      color: 'hover:bg-[#6FDA44]'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/aminulhaque.tax',
      color: 'hover:bg-[#1877F2]'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/aminulhaque_tax/',
      color: 'hover:bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/@aminulhaque_tax',
      color: 'hover:bg-[#FF0000]'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/aminulhaque_tax',
      color: 'hover:bg-[#000000]'
    }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1 - Brand & About */}
            <div>
              <h3 className="text-2xl font-extrabold mb-4">
                Amin <span className="text-secondary">Ul Haque</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Enrolled Agent & CMA Certified US Tax Specialist with over a decade of expertise in Individuals, Business, and Corporate tax planning.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span key={index} className="bg-white/5 text-secondary text-xs px-3 py-1 rounded-full border border-secondary/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:aminulhaque.officials96@gmail.com" className="text-white hover:text-secondary transition text-sm">
                      aminulhaque.officials96@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+15551234567" className="text-white hover:text-secondary transition text-sm">
                      +92 3132 454676
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white text-sm">Houston, Texas, United States (Remote Services)</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-gray-400 text-sm mb-3">Follow Me</p>
                <div className="flex flex-wrap gap-3">
                  {socialPlatforms.map((platform, index) => (
                    <motion.a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${platform.color} border border-white/10 hover:border-transparent`}
                      aria-label={`Follow on ${platform.name}`}
                    >
                      <i className={`${platform.icon} text-sm`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              &copy; {currentYear} <span className="text-white font-medium">Amin Ul Haque</span>. 
              All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4 text-secondary" />
              <span>Secure & Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="h-4 w-4 text-secondary" />
              <span>EA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4 text-secondary" />
              <span>10+ Years Experience</span>
            </div>
          </div>
          
          <div className="text-gray-500 text-xs text-center md:text-right">
            <p>Built with ❤️ for financial excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
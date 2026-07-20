import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! I will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">
            Let's <span className="text-secondary">Connect</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 px-4">
            Schedule a free consultation and take the first step towards financial clarity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-secondary/20 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Email</h4>
                <p className="text-gray-300 text-sm sm:text-base break-all">aminulhaque.officials96@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-secondary/20 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Phone</h4>
                <p className="text-gray-300 text-sm sm:text-base">+92 3132 454676</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-secondary/20 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Location</h4>
                <p className="text-gray-300 text-sm sm:text-base">Houston, Texas, United States</p>
                <p className="text-gray-400 text-xs sm:text-sm">(Remote Services Available)</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/10">
              <p className="text-gray-300 text-xs sm:text-sm">
                <span className="text-secondary font-medium">💡 Quick Tip:</span> I respond to all inquiries within 24 hours. For urgent matters, please call directly.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10"
          >
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition text-sm sm:text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition text-sm sm:text-base"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                How can I help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none text-sm sm:text-base"
                placeholder="Tell me about your tax, bookkeeping, or payroll needs..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-secondary text-primary font-bold py-3 sm:py-4 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
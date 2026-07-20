import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'Amin has been a game-changer for my business. His tax expertise saved me thousands, and his bookkeeping services keep my finances in perfect order.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    content: 'I was overwhelmed with tax filings and payroll. Amin made everything simple and stress-free. Highly recommend his services!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    content: 'Working with Amin gave me peace of mind. He handles all my financial compliance, so I can focus on growing my company.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4">
            What Clients <span className="text-secondary">Say</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 px-4">
            Real feedback from people who trusted me with their financial needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-primary text-base sm:text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
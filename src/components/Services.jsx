import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalculatorIcon, 
  DocumentTextIcon, 
  CreditCardIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: CalculatorIcon,
    title: 'Tax Preparation & Planning',
    description: 'Comprehensive tax filing for individuals and businesses. Strategic planning to minimize liabilities and maximize refunds.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: DocumentTextIcon,
    title: 'Bookkeeping Services',
    description: 'Accurate, organized financial records. Monthly reconciliations, expense tracking, and financial reporting.',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: CreditCardIcon,
    title: 'Payroll Management',
    description: 'Full-service payroll processing, tax withholdings, direct deposits, and compliance with federal and state regulations.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: ChartBarIcon,
    title: 'Business Advisory',
    description: 'Strategic financial advice for growth, cash flow management, and business structure optimization.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: UserGroupIcon,
    title: 'IRS Representation',
    description: 'Professional representation in case of audits, notices, or disputes with the IRS. Peace of mind guaranteed.',
    color: 'from-red-500 to-rose-400',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Compliance & Security',
    description: 'Stay compliant with ever-changing tax laws. Your financial data is secured with bank-level encryption.',
    color: 'from-indigo-500 to-violet-400',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4">
            My <span className="text-secondary">Services</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 px-4">
            Comprehensive financial solutions designed to help you save money, stay compliant, and grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 , transition: { duration: 0.3 } }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
              <div className="mt-3 sm:mt-4 flex items-center text-secondary font-medium text-sm sm:text-base">
                Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
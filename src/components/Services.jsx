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
    <section id="services" className="py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            My <span className="text-secondary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions designed to help you save money, stay compliant, and grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center text-secondary font-medium">
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
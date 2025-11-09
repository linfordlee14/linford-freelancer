'use client';

import { services } from '@/lib/content';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for conservation tech, NGOs, and small businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Problem we solve:</p>
                  <p className="text-gray-700">{service.problem}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Deliverables:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Who this is for:</p>
                  <p className="text-gray-700">{service.whoFor}</p>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-600">Timeframe</p>
                      <p className="font-semibold text-gray-900">{service.timeframe}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Starting at</p>
                      <p className="font-bold text-primary text-lg">{service.priceRange.split(' - ')[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

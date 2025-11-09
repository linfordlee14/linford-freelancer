'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Founder, Linfy Tech Solutions — Data Analytics | Cybersecurity | Web Development
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Turning Wildlife Data into Impact with{' '}
            <span className="text-primary">AI and Analytics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-10"
          >
            I help conservation organisations and small businesses transform raw data
            into actionable insights and secure web solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all transform hover:scale-105"
            >
              📅 Book a Free 20-min Audit
            </Link>
            <Link
              href="/#projects"
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            >
              📂 View Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { caseStudies } from '@/lib/content';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world projects solving conservation and business challenges
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-4 mb-4">{study.title}</h3>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900">Problem</h4>
                      <p>{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p>{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {study.tech.map((t) => (
                          <span key={t} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4">
                    <p className="text-sm"><strong>Impact:</strong> {study.metrics}</p>
                  </div>

                  <div className="flex gap-4">
                    {study.link && (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                    {study.github && (
                      <a
                        href={study.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
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

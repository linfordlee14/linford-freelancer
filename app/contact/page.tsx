'use client';

import { useState } from 'react';
import type { Metadata } from "next";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using Netlify Forms - replace with your preferred service
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Let's Build Something Great</h1>
          <p className="text-xl text-gray-700">
            Book a free 20-minute consultation to discuss your project
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6" name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block font-semibold mb-2">Organization / Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-semibold mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="data-analytics">Data Analytics & Dashboards</option>
                  <option value="web-dev">Web Design + Secure Hosting</option>
                  <option value="cybersecurity">Cybersecurity & Training</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">Project Details *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : '📧 Send Message'}
            </button>

            {status === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thanks! I'll respond within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Something went wrong. Please email me directly at linfordlee14@gmail.com
              </div>
            )}
          </form>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Other Ways to Connect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <a href="mailto:linfordlee14@gmail.com" className="p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-600">linfordlee14@gmail.com</div>
              </a>
              <a href="https://www.linkedin.com/in/linfordlee14" target="_blank" rel="noopener noreferrer" className="p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="text-3xl mb-2">💼</div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-600">linfordlee14</div>
              </a>
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-semibold">Calendar</div>
                <div className="text-sm text-gray-600">Calendly link coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

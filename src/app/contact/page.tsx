'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-12">Contact Us</h1>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We'd love to hear from you! Whether you have a question about our products, need a quote, or simply want to provide feedback, feel free to reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-700">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-700">info@speedexfuel.ae</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-700">Speedex Fuel LLC, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 
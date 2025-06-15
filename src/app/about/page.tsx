'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FlagIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-12">About Speedex Fuel</h1>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision & Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Speedex Fuel, we are committed to being the leading provider of high-quality fuel solutions across the UAE. Our vision is to power businesses and communities with efficiency and reliability, contributing to the nation's growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to deliver exceptional fuel products and services, maintaining the highest standards of safety, environmental responsibility, and customer satisfaction. We aim to build lasting partnerships based on trust and mutual success.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <FlagIcon className="h-48 w-48 text-blue-600 opacity-75" />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <BriefcaseIcon className="h-48 w-48 text-green-600 opacity-75" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With years of experience in the fuel industry, Speedex Fuel boasts unparalleled expertise in sourcing, logistics, and distribution. We leverage cutting-edge technology and a robust supply chain to ensure seamless and timely delivery of fuel to your doorstep.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of professionals is dedicated to understanding your unique energy needs and providing tailored solutions that optimize your operations and contribute to your success.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The strength of Speedex Fuel lies in its dedicated and diverse team. From logistics experts to customer service professionals, every member is committed to upholding our values of integrity, excellence, and customer-centricity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We foster a culture of continuous learning and innovation, ensuring that our team is always at the forefront of industry best practices to serve you better.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <UsersIcon className="h-48 w-48 text-purple-600 opacity-75" />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
} 
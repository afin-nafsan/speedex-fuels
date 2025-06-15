"use client";

import React from 'react';
import { HeroSection } from '@/components/hero-section-3';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
    BuildingOffice2Icon, 
    TruckIcon, 
    GlobeAltIcon, 
    UserGroupIcon,
    BeakerIcon,
    FireIcon,
    BoltIcon,
    SunIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
        <main className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section id="home" className="pt-24">
                <HeroSection />
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            About Speedex Fuel
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Your trusted partner in fuel solutions across the UAE
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <BuildingOffice2Icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Established Presence</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Serving Dubai and the UAE with excellence since 2010
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <TruckIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Reliable Delivery</h3>
                            <p className="mt-2 text-base text-gray-500">
                                24/7 fuel delivery services across the UAE
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <GlobeAltIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Global Standards</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Meeting international quality and safety standards
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <UserGroupIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Expert Team</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Professional staff dedicated to your service
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section id="vision-mission" className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Our Vision & Mission
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Driving innovation and sustainability in the fuel industry
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
                        {/* Vision Card */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                To be the leading innovator in sustainable fuel solutions, transforming the energy landscape through cutting-edge technology and environmental responsibility. We envision a future where efficient, clean, and accessible fuel solutions power progress while preserving our planet for generations to come.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                                    <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Delivering innovative, sustainable fuel solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Maintaining highest standards of safety and quality</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Investing in eco-friendly fuel technologies</span>
          </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Building strong industry partnerships</span>
          </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Products
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            High-quality fuel solutions for every need
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                                <FireIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-medium text-gray-900">Petrol</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Premium quality petrol for all vehicle types
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <BeakerIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-medium text-gray-900">Diesel</h3>
                            <p className="mt-2 text-base text-gray-500">
                                High-performance diesel for commercial vehicles
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                <BoltIcon className="h-6 w-6 text-yellow-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-medium text-gray-900">Specialty Fuels</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Custom fuel solutions for specific requirements
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Contact Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Get in touch with our team
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                    <p className="mt-1 text-base text-gray-500">
                                        +971 4 123 4567
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="mt-1 text-base text-gray-500">
                                        info@speedexfuel.ae
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <MapPinIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                                    <p className="mt-1 text-base text-gray-500">
                                        Dubai Industrial City<br />
                                        Dubai, United Arab Emirates
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
        </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <Button className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
    </div>
            </section>

            <Footer />
        </main>
  );
}

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vision & Mission | Speedex Fuel',
    description: 'Learn about Speedex Fuel\'s vision and mission to revolutionize the fuel industry with sustainable and efficient solutions.',
};

const VisionMission = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        Our Vision & Mission
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Driving innovation and sustainability in the fuel industry
                    </p>
                </div>

                {/* Vision Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            To be the leading innovator in sustainable fuel solutions, transforming the energy landscape through cutting-edge technology and environmental responsibility. We envision a future where efficient, clean, and accessible fuel solutions power progress while preserving our planet for generations to come.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                                <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                To revolutionize the fuel industry by:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Delivering innovative, sustainable fuel solutions that meet the evolving needs of our customers</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Maintaining the highest standards of safety, quality, and environmental responsibility</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Investing in research and development to create more efficient and eco-friendly fuel technologies</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Building strong partnerships with stakeholders to drive industry-wide positive change</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">Empowering our team to deliver exceptional service and drive continuous improvement</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission; 
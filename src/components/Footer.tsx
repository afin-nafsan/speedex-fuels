'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Speedex Fuel</h3>
                        <p className="text-sm">
                            Your trusted partner for premium quality fuel and reliable delivery services across Dubai and the UAE.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <Facebook className="size-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <Twitter className="size-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <Instagram className="size-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <Linkedin className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="hover:text-white transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-white transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#products" className="hover:text-white transition-colors duration-300">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-white transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Phone className="size-4" />
                                <span>+971 XX XXX XXXX</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="size-4" />
                                <span>info@speedexfuel.com</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="size-4 mt-1" />
                                <span>Dubai, United Arab Emirates</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Newsletter</h3>
                        <p className="text-sm">Subscribe to our newsletter for updates and special offers.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Speedex Fuel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 
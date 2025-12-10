"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:conbusi@support.com" className="text-orange-500">conbusi@support.com</a></p>
          <p>Phone: <a href="tel:+108736726782" className="text-orange-500">+10 873 672 6782</a></p>
          <p>Address: 600/D, Green Road, New York</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Marketing & SEO</li>
            <li>Startup</li>
            <li>Finance Solution</li>
            <li>Food</li>
            <li>Travel</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Appointment</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Enter your mail and stay updated with our latest news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        <p>
          Esteem spirit temper too say adieus who direct esteem esteems luckily.
        </p>
        <p className="mt-2">
          Copyright © 2025 All rights reserved | This template is made with ❤️ by Colorlib
        </p>
      </div>
    </footer>
  );
}

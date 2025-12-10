"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function TeamCard({ imgSrc, name, position }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        {/* Team Image */}
        <Image
          src={imgSrc}
          alt={name}
          width={300}
          height={300}
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Social Icons Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-5 h-5 hover:text-blue-500" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-5 h-5 hover:text-blue-400" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 hover:text-pink-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Team Info */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
}

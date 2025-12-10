"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import TextInput from "@/components/ui/input/TextInput";
import PrimaryButton from "@/components/ui/button/PrimaryButton";

export default function Contact({ data, location, propertyId }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="py-4 lg:py-20 px-4 sm:px-10 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h2>
        </div>

        <div className="">
          {/* Contact Info Card */}
          <div className="p-8 rounded-2xl bg-white shadow-lg flex justify-between lg:flex-row flex-col items-start lg:items-center gap-12 my-3">
            <div className="flex items-center gap-4">
              <FaPhone className="text-[var(--primary-color)] text-2xl" />
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-gray-600">
                  {data?.phone ?? "+10 367 457 735"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[var(--primary-color)] text-2xl" />
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-gray-600">
                  {data?.email ?? "demo@gmail.com"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaUser className="text-[var(--primary-color)] text-2xl" />
              <div>
                <p className="font-semibold text-lg">Address</p>
                <p className="text-gray-600">{location}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 rounded-2xl bg-white shadow-lg">
            <form className="space-y-6">
              <TextInput
                id="name"
                name="name"
                label="Your Name"
                placeholder="Enter your name"
                icon={<FaUser className="text-gray-400" />}
                bgColor={false}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <TextInput
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                icon={<FaEnvelope className="text-gray-400" />}
                bgColor={false}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <TextInput
                id="phone"
                name="phone"
                label="Phone No."
                placeholder="Enter your phone number"
                type="tel"
                icon={<FaPhone className="text-gray-400" />}
                bgColor={false}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <div>
                <label
                  htmlFor="message"
                  className="text-gray-700 text-sm mb-2 block font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <PrimaryButton type="button" text="Send Message" className="w-full" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

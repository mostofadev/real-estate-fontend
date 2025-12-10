"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import TextInput from "@/components/ui/input/TextInput";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import toast from "react-hot-toast";
import { usePostSendMessage } from "@/hooks/useAdminMessage";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});
export default function ContactUs({ data, location, propertyId }) {

  const { mutate, isPending, isSuccess, isError } = usePostSendMessage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (formData) => {
    const dataToSend = new FormData();

    dataToSend.append("property_id", propertyId);
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email ?? "");
    dataToSend.append("phone", formData.phone ?? "");
    dataToSend.append("message", formData.message);

    mutate(dataToSend, {
      onSuccess: (res) => {
        toast.success("Message sent successfully!");
        reset();
      },
      onError: (error) => {
        if (error.response?.data?.errors) {
          Object.values(error.response.data.errors).forEach((msg) => {
            toast.error(msg[0]);
          });
        } else {
          toast.error("Something went wrong!");
        }
      },
    });
  };
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

          {/* Contact Form Card */}
          <div className="p-10 rounded-2xl bg-white shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <TextInput
                id="name"
                name="name"
                label="Your Name"
                placeholder="Enter your name"
                icon={<FaUser className="text-gray-400" />}
                bgColor={false}
                {...register("name")}
                error={errors.name?.message}
              />

              <TextInput
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                icon={<FaEnvelope className="text-gray-400" />}
                bgColor={false}
                {...register("email")}
                error={errors.email?.message}
              />

              <TextInput
                id="phone"
                name="phone"
                label="Phone No."
                placeholder="Enter your phone number"
                type="tel"
                icon={<FaPhone className="text-gray-400" />}
                bgColor={false}
                {...register("phone")}
                error={errors.phone?.message}
              />

              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-sm mb-2 block font-semibold"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  placeholder="Write your message"
                  className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 text-sm
                    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition
                    ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message?.message}
                  </p>
                )}
              </div>

              <PrimaryButton
                type="submit"
                loading={isPending}
                text="send message"
                className="w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

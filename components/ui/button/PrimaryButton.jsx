"use client";

import Link from "next/link";
import React from "react";

export default function PrimaryButton({
  href,
  type = "button",
  icon,
  text,
  onClick,
  loading = false, // added loading prop
}) {
  const baseClass =
    "px-4 py-2 bg-[var(--primary-color)] text-white rounded-full hover:bg-orange-500 transition font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {icon}
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      disabled={loading} 
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </button>
  );
}

"use client";
import React from "react";

export default function NextButton({ onClick, disabled = false, className = "", children = "Next" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-[var(--primary-color)] hover:brightness-110 text-white font-medium py-2 px-6 rounded-full transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

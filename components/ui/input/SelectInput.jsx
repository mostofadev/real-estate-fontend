"use client";
import React, { useEffect, useState } from "react";

export default function SelectInput({
  options,
  value,
  onChange,
  placeholder,
  Icon,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const selectedOption = options.find((o) => o.value === selected);

  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer border border-gray-200 rounded-lg px-4 py-3 
        text-white flex items-center bg-[rgba(0,0,0,0.5)] 
        justify-between hover:border-[var(--primary-color)]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[var(--primary-color)]">{Icon}</span>

          <span>
            {selectedOption ? selectedOption.label : placeholder || "Select"}
          </span>
        </div>

        <span className="text-gray-200">▼</span>
      </div>

      {open && (
        <div
          className="absolute text-white w-full bg-[rgba(0,0,0,0.85)]
          border border-[var(--primary-color)] rounded-lg shadow-lg 
          mt-1 py-2 z-20"
        >
          {options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => {
                setSelected(opt.value);
                onChange(opt.value);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.15)]"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

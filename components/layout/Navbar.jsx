"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MarginSection from "../section/MarginSection";
import { FiSearch, FiPlus, FiMenu, FiX } from "react-icons/fi";
import PrimaryButton from "../ui/button/PrimaryButton";

const navigation = [
  { name: "Home", to: "/", id: 1 },
  { name: "Property", to: "/property", id: 2 },
  { name: "About Us", to: "/about", id: 3 },
  { name: "Contact Us", to: "/contact", id: 4},
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`w-full z-50 bg-[var(--secondary-color)] border-b border-gray-700/30 transition-all duration-500 ease-out ${
        isScrolled
          ? "fixed top-0 bg-[var(--secondary-color)]/90 backdrop-blur-md shadow-lg"
          : "relative bg-[var(--bg-one)]"
      }`}
    >
      {({ open }) => (
        <>
          <MarginSection>
            <div className="mx-auto max-w-8xl flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0 text-2xl font-bold text-[var(--primary-color)]">
                RealEstate
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex lg:space-x-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.id}
                      href={item.to}
                      className={`px-3 py-2 font-medium text-sm text-white transition-all duration-300 ${
                        isActive
                          ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                          : "text-[var(--text-color)] hover:text-[var(--primary-color)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right Icons */}
              <div className="hidden lg:flex items-center gap-4">
                <button className="p-2 rounded-full  transition text-white">
                  <FiSearch size={20} />
                </button>
                <PrimaryButton
                  icon={<FiPlus />}
                  text="Add Property"
                  href="/login"
                />
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <DisclosureButton className="p-2 rounded-full hover:bg-gray-200 transition">
                  {open ? <FiX size={24} className="text-white"/> : <FiMenu size={24} className="text-white"/>}
                </DisclosureButton>
              </div>
            </div>
          </MarginSection>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="lg:hidden bg-[var(--bg-one)] border-t border-gray-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.id}
                    href={item.to}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[var(--primary-color)]"
                        : "text-[var(--text-color)] hover:text-[var(--primary-color)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Icons */}
              <div className="flex items-center gap-3 mt-4">
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <FiSearch size={20} />
                </button>

                <PrimaryButton
                  icon={<FiPlus />}
                  text="Add Property"
                  href="/login"
                />
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

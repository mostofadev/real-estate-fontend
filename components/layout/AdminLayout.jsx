"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdShoppingCart,
  MdInventory,
  MdPeople,
  MdBarChart,
  MdEmail,
  MdSettings,
  MdMenu,
  MdSearch,
  MdNotifications,
} from "react-icons/md";
import Image from "next/image";
import SidebarItem from "./AdminSideberItem";

const menuItems = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    href: "/admin/dashboard",
  },

  {
    label: "Property",
    icon: MdInventory,
    href: "/admin/property",
  },

  {
    label: "Messages",
    icon: MdShoppingCart,
    href: "/admin/message",
  },
   {
    label: "Complete Message",
    icon: MdShoppingCart,
    href: "/admin/complete-message",
  },
];

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
      <div className="flex h-screen bg-gray-50">
        {/* Mobile sidebar backdrop */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`fixed z-50 lg:static inset-y-0 left-0 transform ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-[var(--secondary-color)] from-indigo-800 to-indigo-900 text-white flex flex-col`}
        >
          <div className="flex items-center justify-between p-4 border-b border-indigo-700">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center mr-2">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 12L21 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-bold">ShopAdmin Pro</h1>
            </div>
            <button
              className="lg:hidden p-1 rounded-md hover:bg-[var(--primary-color)]"
              onClick={() => setMobileSidebarOpen(false)}
            >
              <MdMenu className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <SidebarItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  badge={item.badge}
                  active={pathname}
                  childrenItems={item.children}
                />
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-indigo-700">
            <div className="flex items-center">
              {/* <div className="relative">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3 border-2 border-indigo-400"
                  width={20}
                  height={20}
                />
                <span className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div> */}
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-indigo-300">Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm z-10">
            <div className="flex items-center justify-between px-6 py-3">
              <button
                className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <MdMenu className="w-5 h-5" />
              </button>

              <div className="relative max-w-md w-full mx-4">
                <h2>Welcome Admin</h2>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 relative">
                  <MdNotifications className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                <div className="relative">
                  <button className="flex items-center space-x-2 focus:outline-none">
                    {/* <div className="relative">
                      <Image
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                        width={20}
                        height={20}
                      />
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                    </div> */}
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                      Sarah Johnson
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
  );
};

export default AdminLayout;

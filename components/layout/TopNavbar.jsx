import React from "react";
import MarginSection from "../section/MarginSection";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const topMenuContact = [
  {
    icon: <FiMail />,
    text: "info@docmed.com",
  },
  {
    icon: <FiPhone />,
    text: "1601-609 6780",
  },
];
const socialIcon = [
  {
    icon: <FaLinkedinIn />,
  },
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FcGoogle />,
  },
];
function TopNavbar() {
  return (
    <div className="bg-[var(--secondary-color)] border border-gray-800 hidden lg:block">
      <MarginSection>
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            <p>Welcome to Conbusi consulting service</p>
          </div>

          <div className="text-white">
            <div className="flex gap-12">
              <ul className="flex gap-12 py-5">
                {topMenuContact.map((contact, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-[var(--primary-color)] text-lg">
                      {contact.icon}
                    </span>
                    <p className="text-sm">{contact.text}</p>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-4">
                {socialIcon.map((contact, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white text-lg">
                      {contact.icon}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MarginSection>
    </div>
  );
}

export default TopNavbar;

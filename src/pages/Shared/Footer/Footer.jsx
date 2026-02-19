import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} UserFlow Dashboard. Built with React,
          Tailwind & DaisyUI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

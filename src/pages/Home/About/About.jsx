import React from "react";
import {
  MdOutlineRocketLaunch,
  MdOutlineDevices,
  MdOutlineCode,
  MdOutlineSpeed,
  MdOutlineAutoAwesome,
  MdOutlineStorage,
  MdOutlineSecurity,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiReactrouter,
  SiJavascript,
} from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">UserFlow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building modern web applications with React, Tailwind CSS, and best
            practices
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <MdOutlineRocketLaunch className="text-4xl text-primary" />
                <h2 className="card-title text-2xl text-primary">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600">
                UserFlow Dashboard aims to provide developers with a clean,
                responsive, and scalable starter template for building
                production-ready applications.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <MdOutlineCode className="text-4xl text-primary" />
                <h2 className="card-title text-2xl text-primary">Tech Stack</h2>
              </div>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center gap-3">
                  <FaReact className="text-primary text-xl" />
                  <span className="font-medium">React + Hooks</span>
                </li>
                <li className="flex items-center gap-3">
                  <SiReactrouter className="text-primary text-xl" />
                  <span className="font-medium">React Router</span>
                </li>
                <li className="flex items-center gap-3">
                  <SiTailwindcss className="text-primary text-xl" />
                  <span className="font-medium">Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <SiDaisyui className="text-primary text-xl" />
                  <span className="font-medium">DaisyUI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Responsive Design",
                icon: <MdOutlineDevices className="text-4xl text-primary" />,
                desc: "Works perfectly on all devices",
              },
              {
                title: "Fast Performance",
                icon: <MdOutlineSpeed className="text-4xl text-primary" />,
                desc: "Optimized for quick loading",
              },
              {
                title: "Clean Code",
                icon: (
                  <MdOutlineAutoAwesome className="text-4xl text-primary" />
                ),
                desc: "Well-organized and maintainable",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <MdOutlineStorage />, label: "State Management" },
            { icon: <MdOutlineSecurity />, label: "Secure by Default" },
            { icon: <MdOutlineDesignServices />, label: "Modern UI" },
            { icon: <FaNodeJs />, label: "Node.js Ready" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-base-100 p-4 rounded-lg shadow"
            >
              <div className="text-2xl text-primary">{item.icon}</div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

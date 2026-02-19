import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Smart User Flow
              <span className="text-primary"> Dashboard</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              A modern and responsive dashboard interface built with React,
              Tailwind CSS, and DaisyUI. Designed for performance, scalability,
              and clean UI/UX.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">View Demo</button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-primary">Project Preview</h2>
                <p>
                  Responsive layout with routing, reusable components, and clean
                  architecture suitable for production apps.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

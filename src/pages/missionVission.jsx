import React, { useState } from "react";

const MissionVission = () => {
  const [activeTab, setActiveTab] = useState("history");

  const tabs = {
    history: {
      title: "Our History",
      content: (
        <>
          <h3 className="text-base font-semibold">About Vasoya Brothers Infotech (VBI):</h3>
          <p className="mt-2 text-sm text-gray-700">
            Founded in 2018 by Utsav and Priyank Vasoya, VBI began with a shared vision: to
            empower businesses with innovative IT solutions and exceptional service. What
            started as a small venture has grown into a trusted technology partner for
            companies across various industries.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Over the years, we have expanded our expertise and built a team of skilled
            professionals dedicated to delivering tailored, results-driven solutions. From
            custom software development to IT consulting and advanced AI/ML solutions, we
            pride ourselves on helping businesses save time, reduce costs, and achieve their
            goals effectively.
          </p>
        </>
      ),
    },
    mission: {
      title: "Our Mission",
      content: <p className="text-sm text-gray-700">Our mission content goes here.</p>,
    },
    vision: {
      title: "Our Vision",
      content: <p className="text-sm text-gray-700">Our vision content goes here.</p>,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text Content */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
          We are <span className="text-blue-700 font-bold">IT solutions</span> provider worldwide
        </h2>

        {/* Tabs */}
        <div className="flex space-x-4 bg-gray-100 rounded-md p-1 mb-4">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition duration-200 ${
                activeTab === key
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-600"
              }`}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-3">{tabs[activeTab].content}</div>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-2 text-sm text-gray-800">
          <li className="flex items-center gap-2">✅ Your Trusted IT Partner</li>
          <li className="flex items-center gap-2">✅ Customized IT Solutions</li>
          <li className="flex items-center gap-2">✅ Optimize Time & Resources</li>
          <li className="flex items-center gap-2">✅ Skilled & Experienced Team</li>
        </ul>

        {/* Small Team Images */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Team 1"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1590080876513-37904a3e3cb2"
            alt="Team 2"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side - Image with Floating Card */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Team working"
          className="rounded-xl w-full h-auto object-cover shadow-lg"
        />

        {/* Floating Card */}
        <div className="absolute bottom-[-40px] left-6 bg-green-500 text-white px-8 py-6 rounded-2xl shadow-2xl w-64 text-center transform transition-transform hover:scale-105 duration-300">
          <div className="text-2xl font-bold">+750</div>
          <div className="text-sm">Projects Completed</div>
          <div className="mt-4 text-2xl font-bold">+350</div>
          <div className="text-sm">Happy Clients</div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;

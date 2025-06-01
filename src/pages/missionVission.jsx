import React, { useState } from "react";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("history");

  const tabs = {
    history: {
      title: "Our History",
      content: (
        <>
          <p className="mt-2 text-sm text-gray-700">
            We started in 2019 as a partnership firm with a bold vision to simplify insurance tech.
            By 2022, we became a Private Limited Company, ready to scale innovation.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Today, we empower insurers, TPAs, and employers with smart, AI-driven solutions — from
            predictive analytics to custom software and claims support.
          </p>
          <p className="mt-2 text-sm text-gray-700 font-medium">
            Smarter tools. Faster insights. Better outcomes.
          </p>
        </>
      ),
      image: (
        <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
              <div className="flex justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold">2019</span>
                  </div>
                  <p className="text-xs">Founded</p>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-8 bg-white bg-opacity-50"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold">2022</span>
                  </div>
                  <p className="text-xs">Incorporated</p>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-8 bg-white bg-opacity-50"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold">Now</span>
                  </div>
                  <p className="text-xs">Innovating</p>
                </div>
              </div>
              <p className="text-sm opacity-90">From humble beginnings to industry leaders</p>
            </div>
          </div>
        </div>
      )
    },
    mission: {
      title: "Our Mission",
      content: (
        <p className="text-sm text-gray-700">
          Our mission is to empower TPAs, brokers, and employers with cutting-edge technology,
          data-driven strategies, and reliable services to manage and reduce health insurance costs.
          We are committed to building innovative, accessible, and future-ready solutions that
          enhance transparency and simplify benefits management.
        </p>
      ),
      image: (
        <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">Driven By Purpose</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Innovation</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Transparency</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Efficiency</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    vision: {
      title: "Our Vision",
      content: (
        <p className="text-sm text-gray-700">
          Our vision is to transform the health insurance ecosystem by delivering intelligent,
          tech-driven solutions that promote efficiency, transparency, and financial well-being. We
          envision a future where every stakeholder—from TPAs to employers—can manage health
          insurance seamlessly and effectively through smart automation, data science, and strategic
          insights.
        </p>
      ),
      image: (
        <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">Future Forward</h3>
              <div className="space-y-3 mb-6">
                <div className="w-full bg-white bg-opacity-20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs">Digital Transformation</p>
                <div className="w-full bg-white bg-opacity-20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs">AI Integration</p>
                <div className="w-full bg-white bg-opacity-20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs">Industry Leadership</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
      {/* Left Side - Tabs and Content */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
          Transforming <span className="text-blue-700 font-bold">Insurance Technology</span>
        </h2>

        {/* Tabs */}
        <div className="flex space-x-4 bg-gray-100 rounded-md p-1 mb-4">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition duration-200 ${
                activeTab === key
                  ? "bg-white shadow-sm text-blue-700"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-3 p-4 bg-white rounded-lg shadow-sm">
          {tabs[activeTab].content}
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium">
            Learn more about {tabs[activeTab].title.toLowerCase()}
          </button>
        </div>
      </div>

      {/* Right Side - Images */}
      <div className="space-y-6">
        {tabs[activeTab].image}
        <div className="grid grid-cols-2 gap-4">
          {activeTab === "history" && (
            <>
              <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </>
          )}
          {activeTab === "mission" && (
            <>
              <div className="bg-green-100 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </>
          )}
          {activeTab === "vision" && (
            <>
              <div className="bg-purple-100 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
import React from "react";

const testimonials = [
  {
    title: "Nexcaliber and Entira Incorporated",
    content:
      "We've worked with GBTECH SERVICE for over 10 years and their support, service quality, and responsiveness—despite the time zone difference—have been outstanding. Their team is a pleasure to work with, and I’m happy to personally share our success stories.",
    name: "David Feachen",
    role: "Owner and President of Nexcaliber and Entira Incorporated",
    flag: "🇺🇸",
    image: "",
  },
  {
    title: "iTedium",
    content:
      "Partnering with GB Tech Service under Anupam Biswas’s visionary leadership has transformed our business through innovative, scalable solutions and a strong customer-first approach. His strategic insight, commitment to quality, and hands-on leadership make GB Tech a standout technology partner.",
    name: "Robert A. Meyers, Jr",
    role: "Founder & CEO of iTedium",
    flag: "🇺🇸",
    image: "",
  },
  {
    title: "Nurse Practitioner",
    content:
      "The QA and testing services provided by Vasoya Brothers Infotech were exceptional. Identifying critical issues early saved us valuable time.",
    name: "Katherine Diggs",
    role: "Nurse Practitioner, United States of America ",
    flag: "🇺🇸",
    image: "",
  },
];

const TestimonialCard = ({ title, content, name, role, flag, image }) => (
  <div className="bg-white rounded-xl shadow-md p-6 w-full">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-700 mb-4">{content}</p>
    <div className="flex items-center gap-3">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full font-semibold">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
      )}
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-gray-500">{flag} {role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Side - Heading */}
        <div className="flex-1">
          <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
           ... Testimonials
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What our<br />clients say
          </h2>
          <p className="text-gray-600 text-base mb-6">
            See how our expert solutions have helped businesses achieve success through our client’s reviews.
          </p>
      
        </div>

        {/* Right Side - Testimonial Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

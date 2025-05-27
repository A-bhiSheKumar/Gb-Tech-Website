import React from "react";

const testimonials = [
  {
    title: "AI/ML Solutions",
    content:
      "Our collaboration with Vasoya Brothers Infotech on an AI/ML solution was outstanding. The team demonstrated excellent technical skills, delivering a tailored solution...",
    name: "Jason",
    role: "Software Engineer",
    flag: "🇮🇹",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Custom Software Development",
    content:
      "The VBI team delivered an excellent custom software solution tailored to our business needs. Their proactive approach ensured seamless integration.",
    name: "Joquin Lasa",
    role: "Software Engineer",
    flag: "🇵🇭",
    image: "",
  },
  {
    title: "Web Development",
    content:
      "Vasoya Brothers Infotech created an amazing website for us. Their professionalism and prompt delivery impressed me.",
    name: "Eszter Udvarnoki",
    role: "CEO of Tech Innovators Inc",
    flag: "🇺🇸",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "QA & Testing",
    content:
      "The QA and testing services provided by Vasoya Brothers Infotech were exceptional. Identifying critical issues early saved us valuable time.",
    name: "Rajimol Raju MSN",
    role: "Marketing Director",
    flag: "🇬🇧",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
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
          <button className="flex items-center gap-2 px-5 py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-50 transition">
            📞 Contact Us
          </button>
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

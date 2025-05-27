import React from "react";
import AnupamSir from "../assets/Anupam.png";
import PritikanaMaam from "../assets/Pritikana.jpg";
import DipayanSir from "../assets/Dipayan.png";

export default function AboutUsSection() {
  const team = [
    {
      name: "Anupam Biswas",
      role: "Strategic Leader",
      bio: "Driving company vision and long-term goals.",
      image: AnupamSir, // replace with real image
    },
    {
      name: "Pritikana Ghosh",
      role: "Operational Expert",
      bio: "Enhancing productivity and process efficiency.",
      image: PritikanaMaam,
    },
    {
      name: "Dipayan Roy",
      role: "Technology Strategist",
      bio: "Shaping the future with AI-driven innovation.",
      image: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Mission & Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          Committed to revolutionizing employee benefits through innovative
          technology and personalized solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
  src={member.image}
  alt={member.name}
  className="w-20 h-20 object-cover rounded-full mx-auto block"
/>

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

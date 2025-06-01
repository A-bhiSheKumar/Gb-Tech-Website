import React, { useState } from "react";
import AnupamSir from "../assets/Anupam.png";
import PritikanaMaam from "../assets/Pritikana.jpg";
import DipayanSir from "../assets/Dipayan.png";

export default function AboutUsSection() {
  const team = [
    {
      name: "Anupam Biswas",
      role: "Strategic Leader",
      bio: "Driving company vision and long-term goals.",
      image: AnupamSir,
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
      image:
        "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const reelVideos = [
    {
      src: "https://res.cloudinary.com/dgu2ct7us/video/upload/v1748800168/hnv0tbftam8fdqrhhmhc.mov",
      title: "Our Work Culture",
      description: "Behind the scenes at our creative space"
    },
    {
      src: "https://res.cloudinary.com/dgu2ct7us/video/upload/v1748801390/1748799974695847_wjkxcs.mov",
      title: "Team Collaboration",
      description: "How we work together to innovate"
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          Committed to revolutionizing employee benefits through innovative
          technology and personalized solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover rounded-full mx-auto block mb-4 border-2 border-blue-100"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

      
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get a glimpse of our team dynamics and work environment through these short clips
        </p>
        
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8 px-4 py-2">
            {reelVideos.map((video, index) => (
              <VideoCard 
                key={index} 
                src={video.src} 
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, title, description }) {
  const [muted, setMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-[240px] h-[450px] bg-black rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        src={src}
        muted={muted}
        autoPlay
        loop
        playsInline
        className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'brightness-100' : 'brightness-90'}`}
      />
      
      {/* Video Info Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white/80 text-sm mt-1">{description}</p>
      </div>
      
      {/* Mute Button */}
      <button
        onClick={() => setMuted(!muted)}
        className={`absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-80'}`}
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      {/* Play Icon (shown when not hovered) */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/30 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/90" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
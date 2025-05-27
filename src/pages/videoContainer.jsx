import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiVolumeMute } from "react-icons/ci";
import { GoUnmute } from "react-icons/go";
import { AiOutlineExpandAlt } from "react-icons/ai";
// import clientVideo from "../assets/clientVideo.mp4";

const VideoContainer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMute = () => setIsMuted(!isMuted);
  const closeVideo = () => setIsVisible(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed ${
        isExpanded
          ? "top-0 left-0 w-full h-full bg-opacity-90"
          : "bottom-5 right-2 w-44 md:w-60  h-64 md:h-auto rounded-lg p-2 shadow-lg"
      } z-[9999]`}
    >
      <div className="relative w-full h-full md:w-[195px] md:h-[300px] overflow-hidden rounded-lg">
        <video
          src="https://res.cloudinary.com/dgu2ct7us/video/upload/v1748327510/jmruh2cmyzf9jqbhawfg.mov"
          muted={isMuted}
          autoPlay
          loop
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Vertical Banners: Happy + Clients */}
       <div className="absolute top-1/4 left-[-10px] flex flex-col gap-4 z-50">
            <span className="bg-gradient-to-br from-blue-500 to-black text-white font-bold px-4 py-1 rounded-xl shadow-md text-sm mb-4">
            Happy
         </span>
            <span className="bg-gradient-to-br from-blue-500 to-black text-white font-bold px-4 py-1 rounded-xl shadow-md text-sm mt-20">
             Clients
            </span>
     </div>
        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-2 left-2 bg-gray-700 text-white text-xs p-1 rounded-md"
        >
          {isMuted ? <CiVolumeMute /> : <GoUnmute />}
        </button>

        {/* Close Button */}
        <button
          onClick={closeVideo}
          className="absolute top-2 right-2 bg-gradient-to-br from-blue-500 to-black text-white text-xs p-1 rounded-full shadow-md "
        >
          <IoMdClose />
        </button>

        {/* Expand Button for mobile */}
        <button
          onClick={toggleExpand}
          className="absolute bottom-2 left-2 bg-gray-700 text-white text-xs p-1 rounded-md md:hidden"
        >
          <AiOutlineExpandAlt />
        </button>
      </div>
    </div>
  );
};

export default VideoContainer;
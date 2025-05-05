import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card 
        ref={cardRef}
        className={`rounded-lg shadow-xl shadow-gray-500/10 transition-all duration-500 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          background: isHovered ? 
            `linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,245,245,0.9))` : 
            'white',
          transition: 'transform 0.5s ease-out, background 0.3s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            opacity: isHovered ? 0.1 : 0,
            transform: 'translateZ(-1px)',
          }}
        />
        <CardBody className="px-8 text-center relative" style={{ transformStyle: 'preserve-3d' }}>
          <IconButton
            variant="gradient"
            size="lg"
            color={color}
            className={`pointer-events-none mb-6 rounded-full transition-all duration-300 ${isHovered ? 'scale-110 shadow-lg' : 'scale-100'}`}
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
            }}
          >
            {icon}
          </IconButton>
          <Typography 
            variant="h5" 
            className="mb-2 transition-all duration-300" 
            color="blue-gray"
            style={{
              transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)',
            }}
          >
            {title}
          </Typography>
          <Typography 
            className="font-normal text-blue-gray-600 transition-all duration-300"
            style={{
              transform: isHovered ? 'translateZ(5px)' : 'translateZ(0)',
            }}
          >
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
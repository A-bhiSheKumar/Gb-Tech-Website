import React from 'react'
import "./styles.css"; 
import { FeatureCard } from '@/widgets/cards';
import { featuresData } from '@/data';
import { FingerPrintIcon, UsersIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import HeroVideoContainer from './heroVideoContainer';
const Services = () => {
  return (
  <>
    <section className="-mt-20 pb-20 pt-4 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>

        </div>
      </section>
            <HeroVideoContainer />
  </>
  )
}

export default Services
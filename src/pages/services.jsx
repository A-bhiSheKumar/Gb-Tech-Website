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
const Services = () => {
  return (
  <>
    <section className="-mt-20 from-white via-white/80px-4 pb-20 pt-4 relative z-20">
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
          
          <div className="mt-32 flex flex-wrap items-center relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12 z-10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-2 text-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is <span className="text-blue-600">a pleasure</span>
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Our team of experts delivers cutting-edge solutions tailored to your business needs. 
                We combine innovation with reliability to drive your success.
                <br />
                <br />
                With our proven methodologies and customer-centric approach, we ensure seamless 
                integration and maximum value from our solutions.
              </Typography>
            
              <Button 
                variant="gradient" 
                color="blue" 
                className="flex items-center group"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0 z-10">
              <Card className="shadow-xl border-0 shadow-gray-500/10 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <CardHeader floated={false} className="relative h-56 group overflow-hidden">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Typography variant="h5" color="white" className="font-bold">
                      Discover More
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center mb-2">
                    <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    <Typography variant="small" color="blue-gray" className="font-bold">Enterprise</Typography>
                  </div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Our comprehensive suite of services is designed to propel your business forward with cutting-edge technology and strategic insights.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default Services
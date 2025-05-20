import React, { useEffect } from "react";
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
import { FingerPrintIcon, UsersIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import "./styles.css"; 
import { DraggableCardDemo } from "./gallery";
import { WavyBackgroundDemo } from "./hero";
import Services from "./services";
import { HeroScrollDemo } from "./flipImage";
export function Home() {
  useEffect(() => {
    // Add animation class to the hero section
    const hero = document.querySelector('.hero-section');
    if (hero) {
      hero.classList.add('animate-gradient');
    }
  }, []);

  return (
    <>
      <WavyBackgroundDemo /> 
      <HeroScrollDemo />
       <Services />

{/* <DraggableCardDemo /> */}
      {/* Rest of your sections with similar enhancements */}
      {/* <section className="px-4 pt-20 pb-48 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="container mx-auto relative">
          <PageTitle section="Our Team" heading="Meet the brilliant minds">
            Our diverse team of experts brings together decades of experience and 
            innovation to deliver exceptional results for your business.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton 
                        key={name} 
                        color={color} 
                        variant="gradient"
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced contact section */}
      {/* <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-4">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <PageTitle section="Co-Working" heading="Let's build something amazing">
            Partner with us to transform your ideas into reality with our 
            cutting-edge solutions and expert guidance.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 rounded-xl"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <PageTitle section="Contact Us" heading="Ready to start your journey?">
              Complete this form and we'll get back to you within 24 hours.
            </PageTitle>
            <form className="mx-auto w-full mt-12">
              <div className="mb-8 flex gap-8">
                <Input 
                  variant="outlined" 
                  size="lg" 
                  label="Full Name" 
                  className="focus:border-blue-500 focus:!border-t-blue-500"
                  containerProps={{ className: "flex-grow" }}
                />
                <Input 
                  variant="outlined" 
                  size="lg" 
                  label="Email Address" 
                  className="focus:border-blue-500 focus:!border-t-blue-500"
                  containerProps={{ className: "flex-grow" }}
                />
              </div>
              <Textarea 
                variant="outlined" 
                size="lg" 
                label="Your Message" 
                rows={8} 
                className="focus:border-blue-500 focus:!border-t-blue-500 mb-6"
              />
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree to the
                    <a
                      href="#"
                      className="font-medium text-blue-600 transition-colors hover:text-blue-800"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                color="blue"
              />
              <Button 
                variant="gradient" 
                color="blue" 
                size="lg" 
                className="mt-8 group"
                fullWidth
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </section> */}

      {/* <div className="bg-gradient-to-b from-blue-50 to-white">
        <Footer />
      </div> */}
    </>
  );
}

export default Home;
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
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden hero-section">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-light-blue-500 to-cyan-400 opacity-90 animate-gradient-x"></div>
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated binary code stream */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(50)].map((_, i) => (
        <div 
          key={`binary-${i}`}
          className="absolute font-mono text-white animate-float"
          style={{
            fontSize: `${Math.random() * 12 + 8}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 30 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}
    </div>

    {/* Animated data nodes/connections */}
    {[...Array(15)].map((_, i) => (
      <div 
        key={`node-${i}`}
        className="absolute rounded-full bg-white/10 animate-pulse"
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 8 + 4}s`,
          animationDelay: `${Math.random() * 3}s`
        }}
      />
    ))}

    {/* Animated line graphs/charts */}
    {[...Array(5)].map((_, i) => {
      const points = [];
      for (let p = 0; p < 5; p++) {
        points.push(`${p * 20},${Math.random() * 30}`);
      }
      const pathData = `M ${points.join(' L ')}`;
      
      return (
        <svg
          key={`graph-${i}`}
          className="absolute opacity-30 animate-float"
          viewBox="0 0 100 40"
          style={{
            width: `${Math.random() * 150 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 40 + 20}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          <path 
            d={pathData} 
            stroke="white" 
            strokeWidth="1.5" 
            fill="none" 
            strokeLinejoin="round"
          />
        </svg>
      );
    })}

    {/* Animated database icon outlines */}
    {[...Array(8)].map((_, i) => (
      <svg
        key={`db-${i}`}
        className="absolute opacity-20 animate-float"
        viewBox="0 0 24 24"
        style={{
          width: `${Math.random() * 50 + 30}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 30 + 15}s`,
          animationDelay: `${Math.random() * 5}s`
        }}
      >
        <path 
          d="M12 3C16.9706 3 21 4.34315 21 6V18C21 19.6569 16.9706 21 12 21C7.02944 21 3 19.6569 3 18V6C3 4.34315 7.02944 3 12 3Z" 
          stroke="white" 
          strokeWidth="1"
          fill="none"
        />
        <path 
          d="M21 6C21 7.66 17 9 12 9C7 9 3 7.66 3 6" 
          stroke="white" 
          strokeWidth="1"
          fill="none"
        />
        <path 
          d="M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12" 
          stroke="white" 
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ))}
  </div>
  
  <div className="max-w-8xl container relative mx-auto z-10">
    <div className="flex flex-wrap items-center">
      <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
        <Typography
          variant="h1"
          color="white"
          className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl tracking-tight"
        >
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            Data Is Power
          </span>
        </Typography>
        <Typography variant="lead" color="white" className="opacity-90 text-xl md:text-2xl mb-8">
          We Provide <span className="font-bold">Innovative Solutions</span> for Your Business Needs
        </Typography>
        <div className="flex justify-center gap-4">
          <Button 
            variant="gradient" 
            size="lg" 
            className="bg-white text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
          >
            <RocketLaunchIcon className="h-5 w-5 mr-2" />
            Get Started
          </Button>
          <Button 
            variant="outlined" 
            size="lg" 
            className="text-white border-white hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
          >
            <UsersIcon className="h-5 w-5 mr-2" />
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none z-10"></div>
</div>
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

      {/* Rest of your sections with similar enhancements */}
      <section className="px-4 pt-20 pb-48 relative overflow-hidden">
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
      </section>

      {/* Enhanced contact section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-4">
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
      </section>

      <div className="bg-gradient-to-b from-blue-50 to-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";

export default function BookDemoModal({ open, handleOpen }) {
  const [activeTab, setActiveTab] = useState("call");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen} size="lg" className="rounded-xl p-0">
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden">
        
        {/* LEFT SECTION */}
        <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Request a call</h2>
            <p className="text-sm text-green-100">
              Our experts is ready to help you bring your vision to life.
              Whether you're planning a corporate gathering, a wedding, or a
              large-scale event, we provide personalized guidance and tailored
              solutions to meet your unique needs.
            </p>
          </div>
          <div className="mt-6 bg-white text-black text-sm px-4 py-3 rounded-md shadow-md">
            <p className="italic">
              "On Purpose has saved us thousands of hours of work. We’re able to spin up
              projects and features faster."
            </p>
            <p className="mt-2 text-xs font-semibold">
              — Mollie Hall, Web Developer, Sisyphus
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 p-8">
          {/* Tabs */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab("email")}
              className={`w-1/2 py-2 ${
                activeTab === "email"
                  ? "bg-gray-100 text-black"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Contact via Email
            </button>
            <button
              onClick={() => setActiveTab("call")}
              className={`w-1/2 py-2 ${
                activeTab === "call"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Request a Call
            </button>
          </div>

          {/* Conditional Render */}
          {activeTab === "email" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  required
                  className="focus:!border-green-600"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
                <Input
                  label="Last Name"
                  required
                  className="focus:!border-green-600"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <Input
                label="Email Address"
                type="email"
                required
                className="focus:!border-green-600"
                labelProps={{ className: "before:content-none after:content-none" }}
              />
              <Textarea
                label="Tell us about your event"
                rows={4}
                className="focus:!border-green-600"
                labelProps={{ className: "before:content-none after:content-none" }}
              />
              <Button
                type="submit"
                variant="filled"
                className="w-full bg-black hover:bg-gray-900 rounded-lg text-white py-2"
              >
                Send message
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                By clicking on “Send message”, you agree to our{" "}
                <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
              <p className="text-2xl font-bold text-green-600 mb-4">9830288526</p>
              <a
                href="tel:998329932"
                className="animate-pulse bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                📞 Tap to Call Now
              </a>
              <p className="text-xs text-gray-500 mt-4">
                Our expert will be happy to assist you instantly.
              </p>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
